import { useSelector } from "react-redux"
import Hero from "./Hero"
import Login from "./Login"
import Register from "./Register"

const LoginRegister = () => {
    const isLoginPage = useSelector(state => state.ui.loginMode)

    return (
        <main className={`h-screen flex ${isLoginPage ? '' : 'flex-row-reverse'}`}>
            {isLoginPage ? <Login /> : <Register /> }
            <Hero />
        </main>
    )
}

export default LoginRegister