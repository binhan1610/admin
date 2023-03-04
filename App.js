import React, { useState } from "react";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Signin from "./components/Signin";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [user, setUser] = useState("");
  const [name,setName]=useState("")
  const getname =(nameuser)=>{
    setName(nameuser)
  }
  const getperson = (newUser) => {
    setUser([...user,newUser]);
  };
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name}/>} />
          <Route path="/Signin" element={<Signin users={user} getname={getname}/>} />
          <Route path="/Admin" element={<Admin users={user}/>} />
          <Route path="/Signup" element={<Signup  getperson={getperson}/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
