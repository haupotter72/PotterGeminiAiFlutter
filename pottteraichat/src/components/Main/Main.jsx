import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";
import React, { useEffect, useState } from "react";
import { auth, db } from "./config";
import { doc, getDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import img1 from "../../assets/bg5.png";
const Main = () => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setinput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      {userDetails ? (
        <>
          <div className="">
            <div className="nav ">
              <p>Potter AI</p>
              <div className="flex gap-2 ">
                <h3 className="font-bold mr-2">HI {userDetails.firstName}</h3>
                <img src={assets.user_icon} alt="" />
                <Button
                  className="hover:bg-green-600 hover:text-blue hover:font-semibold"
                  type="submit"
                  variant="contained"
                  disableElevation
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
            <div className="main-container">
              {!showResult ? (
                <>
                  <div className="greet">
                    <p>
                      {" "}
                      <span>
                        Hello, {userDetails.firstName} {userDetails.lastName}{" "}
                      </span>{" "}
                    </p>
                    <p>How can I help you today?</p>
                  </div>
                  <div className="cards">
                    <div className="card">
                      <p>
                        Suggest beautiful place to see on an upcoming road trip
                      </p>
                      <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                      <p>Briefly summarize this concept: urban planning </p>
                      <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                      <p>
                        Brainstorm team bonding activiting for our work reetreat
                      </p>
                      <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card card-last">
                      <p>Improvee the readabillity of the following code</p>
                      <img src={assets.code_icon} alt="" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="result">
                  <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading ? (
                      <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                      </div>
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                    )}
                  </div>
                </div>
              )}

              <div className="main-bottom">
                <div className="search-box">
                  <input
                    onChange={(e) => setinput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Enter a prompt here"
                  />
                  <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input ? (
                      <img
                        onClick={() => onSent()}
                        src={assets.send_icon}
                        alt=""
                      />
                    ) : null}
                  </div>
                </div>
                <p className="bottom-info">
                  Potter AI may display inaccryte infi, incoding about people, so
                  double-check its response. Your privacy and Ited Apps
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Button
            className="hover:bg-green-600 hover:text-blue hover:font-semibold"
            type="submit"
            variant="contained"
            disableElevation
          >
            <a className="text-black font-bold " href="/">
              Login Here
            </a>
          </Button>
        </div>
      )}
      {/* <div className="">
      <div className="nav">
        <p>Potter AI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                {" "}
                <span>Hello, Dev.</span>{" "}
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful place to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activiting for our work reetreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card card-last">
                <p>Improvee the readabillity of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setinput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Ited may display inaccryte infi, incoding about people, so
            double-check its response. Your privacy and Ited Apps
          </p>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Main;
