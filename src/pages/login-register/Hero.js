import { starIcon } from "../../assets/icons"
import heroImage from "../../assets/images/hero-pattern.png"

const Hero = () => {

  return (
      <div className="relative flex flex-col justify-center items-center -z-40 w-full h-full text-blue-100 bg-gradient-to-tr from-darkblue to-blue-500">
        <header className="mb-14">
          <span className="font-bold">WELCOME TO</span>
        </header>

        <main className="flex flex-col items-center">
          {starIcon('w-20 h-20')}
          <h1 className="mt-3 text-4xl mb-14 font-bold tracking-wider">CLASSBOX</h1>
          <p className="w-3/4 text-center text-xs">Everything is always integrated with your college's online handouts</p>
        </main>

        <footer className="absolute bottom-0 flex justify-center space-x-7 text-[8px] tracking-widest mb-12">
          <span>BY HAPPY CODE</span>
          <span>|</span>
          <span>DESIGN BY GPUX</span>
        </footer>

        <img className="absolute top-[25%] -z-10 w-72 opacity-5" src={heroImage} alt="hero image" />
      </div>
    
  )
}

export default Hero