import React, { useState } from "react";
import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import img from "../../assets/bg2.jpg";
import styles from "./Regiser.css";
import img2 from "../../assets/bg4.jpg";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../hooks/InputControl";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../Login/config";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import Button from "@mui/material/Button";
const cx = classNames.bind(styles);

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
            <form className={"formparent rounded-lg"} onSubmit={handleRegister}>
              <h3 className="destwo  text-3xl text-black hover:text-green-600 pt-2 cursor-pointer font-bold text-center ">
                REGISTER ACCOUNT HERE !
              </h3>

              <div className="mb-3 mt-4">
                <label>FIRST NAME:</label>
                <InputControl
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label>LAST NAME:</label>
                <InputControl
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label>Email:</label>
                <InputControl
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label>PASSWORD</label>
                <InputControl
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  <a className="text-black font-bold " href="/">
                    Login Here
                  </a>
                </Button>
              </div>
              <img className={cx(" imggg rounded-md")} src={img2}></img>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
