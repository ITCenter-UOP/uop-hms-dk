import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FormTest from "./pages/FormTest"

const AppRoutes = () => {
  const location = useLocation()

  return (
    <>
      {/* Show Nav only if not on "/" */}
      {/* {location.pathname !== "/" && <Nav />} */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test-form" element={<FormTest />} />
        
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