import Survay from "../components/main/dashboard/Survay"
import Recent from "../components/main/dashboard/Recent"
import Top from "../components/main/dashboard/Top"

const Dashboard = () => {
  return (
    <main>
      <Survay />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-4 px-6">
        <Recent />
        <Top />
      </div>
    </main>
  )
}

export default Dashboard