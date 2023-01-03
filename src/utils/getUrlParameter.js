export const getUrlParameter = () => {
  const pathname = window.location.pathname;
  const pathnameArr = pathname.split("/");

  if(pathnameArr[pathnameArr.length - 1]) {
    if(pathnameArr[pathnameArr.length - 1] !== 'react-tailwind-dashboard' && pathnameArr[pathnameArr.length - 1]){
      return "/" + pathnameArr[pathnameArr.length - 1];
    }else{
      return "/dashboard"
    }
    
  } else {
    return "/dashboard"
  } 
};
