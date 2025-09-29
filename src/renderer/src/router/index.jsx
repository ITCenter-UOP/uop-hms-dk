import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import HomePage from "../pages/HomePage"
import FormTest from "../pages/FormTest"
import Login from "../pages/AuthPage/Login"

const AppRoutes = () => {
    const location = useLocation()

    return (
        <>
            {/* Show Nav only if not on "/" */}
            {/* {location.pathname !== "/" && <Nav />} */}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test-form" element={<FormTest />} />
                <Route path="/login" element={<Login />} />
                

            </Routes>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

export default App