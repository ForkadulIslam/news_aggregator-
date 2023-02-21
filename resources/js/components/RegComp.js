import React, {useState} from 'react';
const RegistrationComp =  ()=> {
    const [loading, setLoading] = useState(false);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [full_name, setFullName] = useState('');
    const [reg_error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null)
        let data = {
            full_name:full_name,
            email:email,
            password: password
        }
        axios.post('register',data).then(response => {
            console.log(response);
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('token',response.data.token);
            setLoading(false);
            location.replace('/landing');
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 422) {
                setError(error.response.data.errors['email'][0]);
            } else {
                console.log(error);
            }
        });

    }
    return (
        <form  className="contact-form-style-1 rt-contact-form" onSubmit={handleSubmit}>
            <h4 className="form-title">Registration Form</h4>
            {reg_error &&
                <div className="alert alert-danger">
                    {reg_error}
                </div>
            }
            <div className="form-group">
                <input required={true} onChange={e => {setFullName(e.target.value)}} type="text" name="full_name" className="form-control rt-form-control" placeholder="First name..."/>
            </div>
            <div className="form-group">
                <input required={true} onChange={e => {setEmail(e.target.value)}} type="email" className="form-control rt-form-control" placeholder="E-mail *" name="email"  data-error="Email field is required" />
                <div className="help-block with-errors" />
            </div>
            <div className="form-group">
                <input required={true} onChange={e => {setPassword(e.target.value)}} type="password" name="password" className="form-control rt-form-control" placeholder="Password..."/>
            </div>
            <div className="form-group">
                <button type="submit" className="submit-btn">
                    REGISTER {loading && <i style={{fontSize:'14px',lineHeight:'14px',color:'#dddddd',marginLeft:'10px'}} className="fas fa-spinner fa-pulse"></i>}
                </button>
            </div>
            <div className="form-response" />
        </form>
    )

}

export default RegistrationComp;
