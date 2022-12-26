import Survay from "./Survay"
import Recent from "./Recent"
import Top from "./Top"

const Main = () => {
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

export default Main