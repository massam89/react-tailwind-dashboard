import store from "../../store";
import { uiActions } from "../../store/ui/uiSlice";
import axios from "axios";
import routesWithoutMainLoaderHandler from "./routesWithoutMainLoaderHandler";
import { checkTokenValidation } from "../../store/auth/authActions";

axios.interceptors.request.use((config) => {
    routesWithoutMainLoaderHandler(config)
    store.dispatch(checkTokenValidation())
    return config;
  },(error) => {
    return Promise.reject(error);
  });

axios.interceptors.response.use((response) => {
    store.dispatch(uiActions.hideLoader())
    return response;
  }, (error) => {
    store.dispatch(uiActions.hideLoader())
    return Promise.reject(error);
  });

export const ajax = async(mode, url, method, isBody, body) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const localUrl = `${baseUrl}/${url}`
  const token = localStorage.getItem('access_token')

  switch(mode){
    case 'tokenJson':
      return (
        new Promise(async(resolve, reject) => {
          await axios({
              url: localUrl,
              method: method,
              data: isBody ? JSON.stringify(body) : null,
              timeout: 60 * 1 * 1000,
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}` : null
              }
          }).then(res => resolve (res))
            .catch(err => reject (err))
        })  
      );  
    default:
      return
  }
};
