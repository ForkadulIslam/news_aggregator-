import React, {useState, useEffect} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Autosuggest from 'react-autosuggest';


function FeedCustomizationComp(props) {
    const [apiRequestLimit, setApiRequestLimit] = useState('')
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState(null);
    const [category, setCategory] = useState();
    const [keyword, setKeyword] = useState('');
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [raw_sources_obj,setRawSourceObj] = useState([]);
    const [sources, setSources] = useState([]);
    const [selectedSources,setSelectedSources] = useState('');
    const [selected_source_id,setSelectedSourceId] = useState('');


    useEffect( () => {
        getFeed();
    }, []);

    function getFeed()  {
        axios.get('my_feed').then(response=>{
            if(response.data.category){
                setCategory(response.data.category);
                setValue(response.data.source_id)
                setSelectedSources(response.data.source_id);
                getSourceByCategory(response.data.category)
            }
        });
    }

    function getSourceByCategory(_category) {
        axios.get('source?category='+_category).then(response => {
            let _sources = [];
            if(response.data.sources){
                for(let i=0; i < response.data.sources.length; i++){
                    _sources[i] =  response.data.sources[i].name
                }
                setRawSourceObj(response.data.sources);
                setSources(_sources);
            }else{
                setApiRequestLimit('API request limit exceeded')
            }
        });
    }

    const handleCategoryChange = (event) =>{
        setSources([]);
        setCategory(event.target.value);
        getSourceByCategory(event.target.value);
    }

    function getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : sources.filter((source) =>
            source.toLowerCase().includes(inputValue)
        );
    }

    function handleCustomFeedSubmit(e){
        e.preventDefault();
        let _selected_source_id = '';
        for(let i=0; i< raw_sources_obj.length; i++){
            if(raw_sources_obj[i].name ===  selectedSources){
                _selected_source_id = raw_sources_obj[i].id
            }
        }
        setSelectedSourceId(_selected_source_id);
        let data = {
            category:category,
            selected_source_id:_selected_source_id,
        }
        localStorage.setItem('my_feed',JSON.stringify(data));
        props.onSubmitCustomFeed(data);
        $('.close-btn.offcanvas-close').click();
    }
    function handleFilterSubmit(e){
        e.preventDefault()
        let data = {
            dateFrom:dateFrom,
            dateTo:dateTo,
            keyword:keyword
        }
        props.onSubmitFilter(data);
        $('.close-btn.offcanvas-close').click();
    }

    const logout = async function () {
        await axios.post('logout')
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('token')
        location.replace('/');
    }

    return (
        <div className="offcanvas-content">
            <div className="offcanvas-header">
                <div className="offcanvas-logo">
                    <div className="site-branding">
                        <a className="dark-logo" href="#">
                            MY NEWS
                        </a>
                        <a className="light-logo" href="#">
                            MY NEWS
                        </a>
                    </div>
                </div>
                <div className="close-btn offcanvas-close">
                    <a href="#">
                        <i className="fas fa-times" />
                    </a>
                </div>
            </div>
            <div className="offcanvas-widget">
                <h3 className="offcanvas-widget-title">CUSTOMIZE NEWS FEED</h3>
                <p>
                    My favorite feed
                    { apiRequestLimit ? apiRequestLimit :'' }
                </p>
                <form  className="contact-form-style-1 rt-contact-form" onSubmit={handleCustomFeedSubmit}>
                    <div className="form-group">
                        <label>Select a Category</label>
                        <select value={category} onChange={handleCategoryChange} className="form-control">
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="general">General</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Select Source</label>
                        <Autosuggest class="form-control" required={true}
                            inputProps={{
                                placeholder: 'Source of '+ category,
                                value,
                                onChange: (event, { newValue }) => {
                                    setValue(newValue);
                                },
                            }}
                            suggestions={suggestions}

                            onSuggestionsFetchRequested={({ value }) => {
                                setSuggestions(getSuggestions(value));
                            }}
                            onSuggestionsClearRequested={() => {
                                setSuggestions([]);
                            }}
                            getSuggestionValue={(suggestion) => {
                                setSelectedSources(suggestion);
                                return suggestion;
                            }}
                            renderSuggestion={(suggestion) => (
                                <div>
                                    {suggestion}
                                </div>
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <input style={{ width:'100%' }} type="submit" value="SAVE AS MY FEED" className="btn btn-block btn-primary"/>
                    </div>
                </form>
                <form className="contact-form-style-1 rt-contact-form" onSubmit={handleFilterSubmit}>
                    <div className="form-group">
                        <label>Keyword - (Required)</label>
                        <input type="text" onChange={e => setKeyword(e.target.value)}  className='form-control' placeholder="Leave blank for all feed"/>
                    </div>
                    <div className="form-group">
                        <label>Date From <small>Optional</small></label>
                        <DatePicker className="form-control" selected={dateFrom} onChange={(date) => setDateFrom(date)}/>
                    </div>

                    <div className="form-group">
                        <label>Date To <small>Optional</small></label>
                        <DatePicker className="form-control" selected={dateTo} onChange={(date) => setDateTo(date)}/>
                    </div>
                    <div className="form-group">
                        <input style={{ width:'100%' }} type="submit" value="SEARCH" className="btn btn-block btn-info"/>
                    </div>
                </form>
                <span style={{cursor:'pointer',color:'blue'}} onClick={logout} className="btn btn-xs">Logout</span>
            </div>
        </div>
    )

}

export default FeedCustomizationComp;
