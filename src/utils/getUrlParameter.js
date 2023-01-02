export const getUrlParameter = () => {
  const pathname = window.location.pathname;
  const pathnameArr = pathname.split("/");
  return "/" + pathnameArr[pathnameArr.length - 1];
};
