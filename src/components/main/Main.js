import Survay from "./Survay"
import Recent from "./Recent"
import Top from "./Top"

const Main = () => {
  return (
    <main>
      <Survay />
      <div className="grid grid-cols-3 gap-4">
        <Recent />
        <Top />
      </div>
    </main>
  )
}

export default Main