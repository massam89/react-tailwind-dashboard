import { useEffect } from "react"
import { useSelector } from "react-redux"
import Hero from "./Hero"
import Login from "./Login"
import Register from "./Register"

const LoginRegister = () => {
    useEffect(() => {
        document.title = 'Dashboard App | Login-register'
    }, [])

    const isLoginPage = useSelector(state => state.ui.loginMode)

    return (
        <main className={`h-screen flex ${isLoginPage ? '' : 'flex-row-reverse'}`}>
            {isLoginPage ? <Login /> : <Register /> }
            <Hero />
        </main>
    )
}

export default LoginRegister