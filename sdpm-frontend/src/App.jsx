import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./features/home"
import './style.css'

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
