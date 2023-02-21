import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.withCredentials = true
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status === 401){
        console.log('Error from Axios------')
        console.log(error.response.data);
        if(error.response.data && error.response.data.message === 'Token is Expired' || error.response.data.message === 'Invalid Token' || error.response.data.message === 'Unauthenticated.' ){
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('token')
            location.replace('/');
        }
    }
    return Promise.reject(error);
});
