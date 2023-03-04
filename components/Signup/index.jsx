import React, { useState } from "react";
import "./style.css";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const data = {
  username: "",
  password: "",
  confirmpassword: "",
};
function Signup({ getperson }) {
  const navigate = useNavigate();
  const [person, setPerson] = useState(data);
  const { username, password, confirmpassword } = person;
  const handerclick = (el) => {
    el.preventDefault();
    if (!username || !password || !confirmpassword)
      return toast.error("nhap day du thong tin");
    if (confirmpassword !== password) return toast.error("xem lai mat khau");
    else {
      const user = {
        username: username,
        password: password,
      };
      getperson(user);
      navigate("/Signin");
    }
  };

  return (
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
        <div className="input" style={{ display: "flex" }}>
          <RiLockPasswordFill />
          <input
            type={"password"}
            value={confirmpassword}
            placeholder="confirm your username"
            onChange={(el) =>
              setPerson({ ...person, confirmpassword: el.target.value })
            }
          ></input>
        </div>
        <button className="btn" onClick={handerclick}>
          Submit
        </button>
        <input type="checkbox" />Is admin
        <br></br>
        
        <Link className="text" to={"/Signin"}>
          Have account? sign in now
        </Link>
      </form>
    </div>
  );
}

export default Signup;
