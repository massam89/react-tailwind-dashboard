import Hero from "./Hero"
import Login from "./Login"
import Register from "./Register"

const LoginRegister = () => {

    return (
        <main className='h-screen relative z-50 overflow-hidden bg-color bg-gradient-to-r from-darkblue bg-[#13346e] xs:from-white xs:bg-white xs:to-bg-white'>
            <Login />
            <Register />
            <Hero />
        </main>
    )
}

export default LoginRegister