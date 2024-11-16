import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "../../Home";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

function GoogleLogin() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        // Chuyển hướng đến trang Home sau khi đăng nhập thành công
        navigate("/home");
      })
      .catch((error) => {
        console.error("Lỗi đăng nhập:", error);
      });
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    setValue(email);
    // Nếu đã có email trong localStorage, tự động chuyển đến trang Home
    if (email) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      {!value ? (
        <Button
          className="hover:bg-gray-500 font-semibold"
          onClick={handleClick}
          variant="contained"
          disableElevation
        >
          <GoogleIcon className=" mr-4" /> LOGGIN WITH GOOGLE
        </Button>
      ) : (
        <div>
          {/* Có thể thêm loading hoặc thông báo ở đây */}
          Đang chuyển hướng...
        </div>
      )}
    </div>
  );
}
export default GoogleLogin;

// import React from "react";

// function Home(){
//     const logout =()=>{
//         localStorage.clear()
//         window.location.reload()
//     }
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <button onClick={logout}>Logout</button>
//         </div>
//     );
// }
// export default Home;
