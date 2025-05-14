import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/home"
import StepLayout from "./pages/MultistepForm"
import CriticalPriority from "./pages/CriticalPriority"
import './index.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multistepform" element={<StepLayout />} />
        <Route path="/criticalpriority" element={<CriticalPriority />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
