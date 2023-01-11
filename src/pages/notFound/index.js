import { useEffect } from "react"

const NotFound = () => {

  useEffect(() => {
    document.title = "Dashboard App | Not Found"
  }, [])
  
  return (
    <div>NotFound Page</div>
  )
}

export default NotFound