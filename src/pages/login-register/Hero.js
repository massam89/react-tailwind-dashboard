import { useSelector } from "react-redux"
import { starIcon } from "../../assets/icons"
import heroImage from "../../assets/images/hero-pattern.png"

const Hero = () => {

  const isLogin = useSelector(state => state.ui.loginMode)

  return (
      <div className={`absolute ${isLogin ? 'left-[50%]' : 'left-0'} transition-all duration-1000 hidden xs:flex flex-col justify-center items-center -z-40 w-1/2 h-full text-blue-100 bg-gradient-to-tr from-darkblue to-blue-500`}>
        <header className="mb-[5vw]">
          <span className="font-bold text-[1.5vw] tracking-widest">WELCOME TO</span>
        </header>

        <main className="flex flex-col items-center">
          {starIcon('w-[10vw]')}
          <h1 className="mt-3 text-[3vw] mb-14 font-bold tracking-wider">CLASSBOX</h1>
          <p className="w-3/4 text-center text-[1.25vw]">Everything is always integrated with your college's online handouts</p>
        </main>

        <footer className="absolute bottom-0 flex justify-center space-x-7 text-[0.75vw] tracking-widest mb-12">
          <span>BY HAPPY CODE</span>
          <span>|</span>
          <span>DESIGN BY GPUX</span>
        </footer>

        <img className="absolute top-[30%] -z-10 w-72 opacity-5" src={heroImage} alt="hero" />
      </div>
  )
}

export default Hero