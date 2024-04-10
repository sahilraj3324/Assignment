import { Profiler } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import LoginPage from "./components/LoginPage";
import What from "./components/What";
import Email from "./components/Email";
import Home from "./components/Home";



export default function App() {
  return (
    <Router>
       <Routes>
         <Route path="/"  element={<LoginPage/>}/>
         <Route path="/create"  element={<CreatePage/>}/>
         <Route path="/what"  element={<What/>}/>
         <Route path="/email"  element={<Email/>}/>
         <Route path="/home"  element={<Home/>}/>
       </Routes>
    </Router>
   
  )

}