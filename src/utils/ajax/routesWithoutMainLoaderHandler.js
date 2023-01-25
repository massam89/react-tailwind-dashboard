export default function routesWithoutMainLoaderHandler() {
    const routes = [
      '/user/IsUserNameInUse',
    ]

    return routes.map(item => process.env.REACT_APP_API_URL + item )
  }