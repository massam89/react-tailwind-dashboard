import Hero from "./Hero"
import Login from "./Login"
import Register from "./Register"

const LoginRegister = () => {

    return (
        <main className='h-screen relative z-50 overflow-hidden bg-gradient-to-r from-darkblue bg-[#1c4c9f] xs:from-white xs:bg-white xs:to-bg-white'>
            <Login />
            <Register />
            <Hero />
        </main>
    )
}

export default LoginRegister