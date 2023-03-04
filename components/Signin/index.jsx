import React, { useState } from "react";
import "./style.css";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login({users,getname}) {
  const navigate = useNavigate()

  const [person, setPerson] = useState({
    username: "",
    password: "",
  });
  const { username, password } = person;


  const handerclick = (el) => {
    el.preventDefault();
    if (!username || !password) return toast.error("nhap day du thong tin");
    const finduser=users.find((el)=>el.username===username&&el.password===password);

    if(finduser===undefined){
      toast.error(`tai khoan ${username} khong ton tai`)
    }
    else 
    {
      getname(username)
      navigate("/")
    }
  };
  return (
    <div>
      <div className="formsignup">
        <form className="signup">
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>
          <div className="input" style={{ display: "flex" }}>
            <CiUser />
            <input
              type={"text"}
              value={username}
              placeholder="enter your username"
              onChange={(el) =>
                setPerson({ ...person, username: el.target.value })
              }
            ></input>
          </div>
          <div className="input" style={{ display: "flex" }}>
            <RiLockPasswordFill />
            <input
              type={"password"}
              value={password}
              placeholder="enter your password"
              onChange={(el) =>
                setPerson({ ...person, password: el.target.value })
              }
            ></input>
          </div>
          <button onClick={handerclick}>Submit</button>
          <br></br>
          <Link className="text" to={"/Signin"}>
            Dont have account? sign up now
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
