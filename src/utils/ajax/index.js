import store from "../../store";
import { uiActions } from "../../store/ui/uiSlice";
import axios from "axios";

// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     store.dispatch(uiActions.hideLoader())
//     return response;
//   }, function (error) {
//     console.log(error)
//     return Promise.reject(error);
//   });

export const ajax = async(mode, url, method, isBody, body) => {
  
  const baseUrl = process.env.REACT_APP_API_URL;
  const localUrl = `${baseUrl}/${url}`
  const token = localStorage.getItem('token')

  store.dispatch(uiActions.showLoader());

  switch(mode){
    case 'tokenJson':
        return (
            new Promise( async(resolve, reject)=>{
                await axios({
                    url: localUrl,
                    method: method,
                    data: isBody ? JSON.stringify(body) : null,
                    timeout: 60 * 1 * 1000, // Let's say you want to wait at least 1 mins 
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                }).then(res => { 
                    store.dispatch(uiActions.hideLoader())    
                    resolve (res)
                })
                .catch(err=>{  
                    store.dispatch(uiActions.hideLoader())          
                    reject (err)
                })
            })
           
        );  
    default:
        return
  }
};
