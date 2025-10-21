import {Dashboard} from "./pages/dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/Signup"
import { SignIn } from "./pages/signin"
function App(){
  return <BrowserRouter>
    <Routes>
      <Route path="/singup" element={<SignUp />} />
      <Route path="/singin" element={<SignIn/>} />  
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
}

export default App
