import { useEffect } from "react"

const Analytics = () => {

  useEffect(() => {
    document.title = "Dashboard App | Analytics"
  }, [])

  return (
    <div>Analytics</div>
  )
}

export default Analytics