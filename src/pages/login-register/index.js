import { useEffect } from "react"
import Hero from "./Hero"
import Login from "./Login"
import Register from "./Register"

const LoginRegister = () => {
    useEffect(() => {document.title = 'Dashboard App | Login-register'}, [])

    return (
        <main className='h-screen relative z-50'>
            <Login />
            <Register />
            <Hero />
        </main>
    )
}

export default LoginRegister