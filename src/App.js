import ActivePage from "./ActivePage";
import "./App.css";
import Title from "./Title";
import { useState } from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


function App() {
  const [fNameErr, setFNameErr] = useState("");
  const [lNameErr, setLNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phNumErr, setPhNumErr] = useState("");
  const [selectErr,setSelectErr] = useState("");
  const [pwConfirmationErr, setPwConfirmationErr] = useState("")
  const [pwErr, setPwErr] = useState("");

  const [pw,setPw] = useState("")
  const [optValue,setOptValue] = useState("")
  const [email,setEmail] = useState(null);
  const [phNum, setPhNum] = useState(null);
  
  
  const [visibility,setVisibility] = useState(false)
  const [ipTypeOfPw, setIpTypeOfPw] = useState("password")

  const [disableForEmail,setDisableForEmail] = useState(true)
  const [disableForPh,setDisableForPh] = useState(true)

  const [confirmationPw, setConfirmationPw] = useState("")

  const handler = (e) => {
    console.log(confirmationPw, pw)
    e.preventDefault();
    if(optValue==="") setSelectErr("Please select any option")
    else setSelectErr("")
    if(confirmationPw===pw) setPwConfirmationErr("")
    else setPwConfirmationErr("Password does not match")
  };

  const changeHandlerFN = (e) => {
    if (e.target.value.length < 3) {
      setFNameErr("Please enter minimum 3 characters");
    } else {
      setFNameErr("");
    }
  };
  const changeHandlerLN = (e) => {
    if (e.target.value.length < 3) {
      setLNameErr("Please enter minimum 3 characters");
    } else {
      setLNameErr("");
    }
  };
  const validateEmail = (e) => {
    if (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailErr("");
      setEmail(e.target.value)
    } else {
      setEmailErr("Please enter valid email ID");
    }
  };
  const validatePhNum = (e) => {
    if (e.target.value.match(/^[6789]\d{9}$/i)) {   
      setPhNum(e.target.value)
      setPhNumErr("");
    } else {
      setPhNumErr("Please enter valid mobile number");
    }
  };
  const validatePw = (e) => {
    if (e.target.value.length<8) {   
      setPwErr("Password must be minimum 8 characters");
    } else {
      setPwErr("");
      setPw(e.target.value)

    }
  };
  const setOpt = (e) => {
    if (e.target.value) {   
      setOptValue(e.target.value);
    }
  };
  const checkConfirmationPw = (e) => {
    setConfirmationPw(e.target.value)
  }
  const toggleVisibilty = () =>{
    setVisibility(!visibility)
    visibility ? setIpTypeOfPw("password") : setIpTypeOfPw("text") 
  }
  const verifyEmail = () => {
      if(email)
      setDisableForEmail(false)
      else
      setEmailErr("Please enter valid email ID");
  }
  const verifyPh = () => {
    if(phNum)
    setDisableForPh(false)
    else 
    setPhNumErr("Please enter valid mobile number");
}

  return (
    <div className="App">
      <div className="container">
        <Title />
        <ActivePage />
        <div className="form-container">
          <div className="form-section">
            <div className="reg-heading">
              <h5>USER REGISTRATION</h5>{" "}
            </div>
          </div>
          <form onSubmit={handler}>
            <div className="row">
              <div className="label-input">
                <label>First Name</label>
                <input
                  placeholder="John"
                  type="text"
                  onChange={changeHandlerFN}
                  maxLength="15"
                ></input>
                <small style={{ color: "red" }}>{fNameErr}</small>
              </div>
              <div className="label-input">
                <label>Last Name</label>
                <input
                  placeholder="Doe"
                  name="last_name"
                  type="text"
                  onChange={changeHandlerLN}
                  maxLength="15"
                ></input>
                <small style={{ color: "red" }}>{lNameErr}</small>
              </div>
            </div>
            {/* */}
            <div className="row">
              <div className="label-input">
                <label>Email ID</label>
                <div className="ipt">
                  <input
                    placeholder="you@email.com"
                    id="email"
                    name="email"
                    type="email"
                    onChange={validateEmail}
                  ></input>
                  <button onClick={verifyEmail} className="verify-btn">verify</button>   
                </div>
                <small style={{ color: "red" }}>{emailErr}</small>
              </div>
              <div className="label-input">
                <label>Email OTP</label>
                <div className="single-ipt">
                <input  className={disableForEmail? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForEmail? "disabled" : "" } ></input>
                </div>
                <div className="single-ipt">
                <input className={disableForEmail? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForEmail? "disabled" : ""}></input>
                </div>
                <div className="single-ipt">
                <input className={disableForEmail? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForEmail? "disabled" : ""}></input>
                </div>
                <div className="single-ipt">
                <input className={disableForEmail? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForEmail? "disabled" : ""}></input>
                </div>
                <div className="single-ipt">
                <input className={disableForEmail? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForEmail? "disabled" : ""}></input>
                </div>
                <div className="single-ipt">
                <input className={disableForEmail? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForEmail? "disabled" : ""}></input>
                </div>
              </div>
            </div>
            {/* */}
            <div className="row">
              <div className="label-input">
                <label>Mobile Number</label>
                <div className="ipt">
                  <input
                    name="mobile"
                    placeholder="888 888 8888"
                    type="text"
                    maxLength="10"
                    pattern="[789][0-9]{9}"
                    onChange={validatePhNum}
                  ></input>
                  <button onClick={verifyPh} className="verify-btn">verify</button>
                </div>
                <small style={{ color: "red" }}>{phNumErr}</small>
              </div>
              <div className="label-input">
                <label>Mobile OTP</label>
                <div className="single-ipt">
                <input  className={disableForPh? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForPh? "disabled" : "" } ></input>
                </div>
                <div className="single-ipt">
                <input className={disableForPh? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForPh? "disabled" : ""}></input>
                </div>
                <div className="single-ipt">
                <input className={disableForPh? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForPh? "disabled" : ""}></input>
                </div>
                <div className="single-ipt">
                <input className={disableForPh? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForPh? "disabled" : ""}></input>
                </div>
                <div className="single-ipt">
                <input className={disableForPh? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForPh? "disabled" : ""}></input>
                </div>
                <div className="single-ipt">
                <input className={disableForPh? "otp-box style-color" : "otp-box" } type="text" placeholder="0" maxLength="1"  disabled={disableForPh? "disabled" : ""}></input>
                </div>
              </div>
            </div>
            {/* */}
            <div className="row">
              <div className="label-input">
                <label>Password</label>
                <div className="ipt">
                <input
                  placeholder="********"
                  name="password"
                  type={ipTypeOfPw}
                  maxLength="15"
                  onChange={validatePw}
                ></input>
                <button  onClick={toggleVisibilty} className="eye-btn">{ visibility ? <VisibilityOffIcon/> : <VisibilityIcon/>  } </button>
                </div>
                <small style={{ color: "red" }}>{pwErr}</small>
              </div>
              <div className="label-input">
                <label>Confirm Password</label>
                <div className="ipt">
                <input
                  placeholder="********"
                  name="password_confirmation"
                  type={ipTypeOfPw}
                  maxLength="15"
                  onChange={checkConfirmationPw}
                ></input>
                 <button  onClick={toggleVisibilty} className="eye-btn">{ visibility ? <VisibilityOffIcon/> : <VisibilityIcon/>  } </button>
                </div>
                <small style={{ color: "red" }}>{pwConfirmationErr}</small>
              </div>
            </div>
            <div className="row-select">
              <div className="label-select">
                <label>How do you know about Carbanio?</label>
                <select
                  required=""
                  id="first-choice"
                  name="primary_source"
                  data-select2-id="first-choice"
                  tabIndex="-1"
                  aria-hidden="true"
                  onChange={setOpt}
                >
                  <option
                    selected
                    disabled
                    value="0"
                  >
                    Click to Select…
                  </option>
                  <option value="1">I found in Google / Internet search</option>
                  <option value="2">
                    I received an Email / Newsletter from Carbanio
                  </option>
                  <option value="3">
                    Carbanio's Marketing Team approached me
                  </option>
                  <option value="4">Known person referred</option>
                  <option value="5">
                    I came to know through Advertisement
                  </option>
                  <option value="6">I found it on social media </option>
                  <option value="7">
                    I read a digital article about Carbanio{" "}
                  </option>
                  
                </select>
                <small style={{ color: "red" }}>{selectErr}</small>
              </div>
            </div>
            <div className="row">
              <button type="submit" className="nxt-btn">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
