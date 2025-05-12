import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/home"
import StepLayout from "./pages/MultistepForm"
import './index.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step_layout" element={<StepLayout />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
