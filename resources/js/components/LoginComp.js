import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

const LoginComp =  ()=> {
    if(localStorage.getItem('isLoggedIn')){
        return <Navigate to='/landing'  />
    }
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginErr, setLoginError] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [emailErr, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    async function handleSubmit (e){
        e.preventDefault();
        setLoginError('');
        setPasswordErr('');
        setEmailError('');
        setLoading(true);
        try{
            let response = await axios.post('login',{email:email, password:password});
            console.log(response.data);
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('token',response.data.token);
            setLoading(false);
            location.replace('/landing');
        } catch (e) {
            console.log(e)
            setLoading(false);
            let er_resp = e.response.data.errors;
            console.log(er_resp.auth_error)
            if(er_resp.password){
                setPasswordErr(er_resp.password[0])
            }
            if(er_resp.email){
                setEmailError(er_resp.email[0])
            }
            if(er_resp.auth_error){
                setLoginError(er_resp.auth_error);
            }
        }
    }

    return (
        <form  className="contact-form-style-1 rt-contact-form" onSubmit={handleSubmit}>
            <h4 className="form-title">Login Form</h4>
            { loginErr && <div className="alert alert-danger" >{loginErr}</div> }
            <div className="form-group">
                <input onChange={e => {setEmail(e.target.value)}} type="email" className="form-control rt-form-control" placeholder="E-mail *" name="email"  data-error="Email field is required" required />
                <div  className="help-block with-errors" >{emailErr}</div>
            </div>
            <div className="form-group">
                <input  onChange={e => {setPassword(e.target.value)}} type="password" name="password" className="form-control rt-form-control" placeholder="Password..." required={true}/>
                <div  className="help-block with-errors" >{passwordErr}</div>
            </div>
            <div className="form-group">
                <button type="submit" className="submit-btn">
                    LOGIN {loading && <i style={{fontSize:'14px',lineHeight:'14px',color:'#dddddd',marginLeft:'10px'}} className="fas fa-spinner fa-pulse"></i>}
                </button>
            </div>
        </form>
    )

}

export default LoginComp;
