import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Features from "./pages/Features";
import Suscribe from "./pages/Suscribe";

export default function App() {
  return (
    <div className="bg-[#2F1893] text-white min-h-screen py-10 px-[35px] lg:px-24" style={{ fontFamily :[ "DM Sans", "sans-serif"]  }}>
      <>
<BrowserRouter>
<Routes>
<Route path="/Features" element= {<Features/>}/>
<Route path="/Suscribe" element= {<Suscribe/>}/>


</Routes>



</BrowserRouter>

      <Header/>
      
      <Main/>
      </>
    </div>
  )
}