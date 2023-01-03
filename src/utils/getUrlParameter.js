export const getUrlParameter = () => {
  const pathname = window.location.pathname;
  const pathnameArr = pathname.split("/");
  console.log(pathnameArr)
  if(pathnameArr[pathnameArr.length - 1]) {
    return "/" + pathnameArr[pathnameArr.length - 1];
  } else {
    return "/dashboard"
  } 
};
