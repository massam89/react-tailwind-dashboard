import routesWithoutMainLoader from "../../data/routesWithoutMainLoader";
import store from "../../store";
import { uiActions } from "../../store/ui/uiSlice";

export default function routesWithoutMainLoaderHandler(config) {
  const urlObject = new URL(config.url)
  const newArray= routesWithoutMainLoader.map((item) => process.env.REACT_APP_API_URL + item);
  
  if(!newArray.some(item => item === urlObject.href)){
    store.dispatch(uiActions.showLoader())
  }
}
