import React, { useState } from "react";
import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import img from "../../assets/bg1.jpg";
import img1 from "../../assets/bg3.jpg";
import styles from "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../hooks/InputControl";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import GoogleLogin from "./GoogleLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
const cx = classNames.bind(styles);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      // window.location.href = "/home";
      window.location.href = "/home";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <div className={cx("background-page")}>
      <ToastContainer />
      <div className={cx("parent")}>
        <div className={cx("parentone")}>
          <div className={cx("child1")}>
            <img className={cx("img1 rounded-3xl")} src={img}></img>
          </div>
          <div className={cx("child2")}>
            <Typography className={cx("desone")} variant="h3" fontWeight="bold">
              Hi ! I AM POTTER AI CHAT
            </Typography>
            <form className="formparent rounded-lg" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-black hover:text-green-600 pt-2 cursor-pointer font-bold text-center ">
                LOGIN HERE !
              </h3>

              <div className="mb-3 mt-4 ">
                <label>EMAIL: </label>
                <InputControl
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label>PASSWORD: </label>
                <InputControl
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between mr-6 mt-2 mb-4">
                {/* <button type="submit" className="btn btn-primary">
                  Submit
                </button> */}
                <Button
                  className="hover:bg-green-600 hover:text-blue hover:font-semibold"
                  type="submit"
                  variant="contained"
                  disableElevation
                >
                  SUBMIT
                </Button>
                <Button
                  className="hover:bg-pink-400"
                  variant="contained"
                  disableElevation
                >
                  <a className="text-black font-bold " href="/register">
                    Register Here
                  </a>
                </Button>
              </div>
              <GoogleLogin />
              <img className={cx(" imggg rounded-md")} src={img1}></img>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
