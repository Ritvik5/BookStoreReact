import { useState, React, useEffect } from 'react';
import './SignUp.css'
import imageLogo from '../../Assets/LoginLogo.png'
import { TextField } from '@mui/material'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { signUpApi } from '../../Services/UserService'


const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneNumberRegex = /^(\d{10})$/;


export default function SignUp() {

  const [signUpObj, setSignUpObj] = useState(
    {
      userName: '',
      userEmailId: '',
      userPassword: '',
      userPhoneNumber: '',
      userRole:'User'
    })

  const takeEmail = (e) => {
    setSignUpObj(prevState => ({
      ...prevState,
      userEmailId: e.target.value
    }))
  }

  const takePassword = (e) => {
    setSignUpObj(prevState => ({
      ...prevState,
      userPassword: e.target.value
    }))
  }

  const takeFullName = (e) => {
    setSignUpObj(prevState => ({
      ...prevState,
      userName: e.target.value
    }))
  }

  const takePhoneNumber = (e) => {
    setSignUpObj(prevState => ({
      ...prevState,
      userPhoneNumber: e.target.value
    }))
  }

  console.log(signUpObj);

  const [regexObj, setRegexObj] = useState(
    {
      userNameBorder: false,
      userNameHelper: '',
      emailBorder: false,
      emailHelper: '',
      passwordBorder: false,
      passwordHelper: '',
      phoneNumBorder: false,
      phoneNumHelper: ''
    })

  const verifyUserSignup =  (e) => {
    e.preventDefault();
    let userNameCheck = nameRegex.test(signUpObj.userName);
    let userEmailCheck = emailRegex.test(signUpObj.userEmailId);
    let userPasswordCheck = passwordRegex.test(signUpObj.userPassword);
    let userPhoneNumberCheck = phoneNumberRegex.test(signUpObj.userPhoneNumber);

    if (userNameCheck === false) {
      setRegexObj(prevState => ({
        ...prevState,
        userNameBorder: true,
        userNameHelper: 'Enter a valid name.'
      }))
    }
    else if (userNameCheck === true) {
      setRegexObj(prevState => ({
        ...prevState,
        userNameBorder: false,
        userNameHelper: ''
      }))
    }

    if (userEmailCheck === false) {
      setRegexObj(prevState => ({
        ...prevState,
        emailBorder: true,
        emailHelper: 'Enter a valid email.'
      }))
    }
    else if (userEmailCheck === true) {
      setRegexObj(prevState => ({
        ...prevState,
        emailBorder: true,
        emailHelper: ''
      }))
    }

    if (userPasswordCheck === false) {
      setRegexObj(prevState => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: 'Enter a valid password.'
      }))
    }
    else if (userPasswordCheck === true) {
      setRegexObj(prevState => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: ''
      }))
    }

    if (userPhoneNumberCheck === false) {
      setRegexObj(prevState => ({
        ...prevState,
        phoneNumBorder: true,
        phoneNumHelper: 'Enter a valid phone number.'
      }))
    }
    else if (userPhoneNumberCheck === true) {
      setRegexObj(prevState => ({
        ...prevState,
        phoneNumBorder: false,
        phoneNumHelper: ''
      }))
    }

    if (userNameCheck === true && userEmailCheck === true && userPasswordCheck === true && userPhoneNumberCheck === true) {
       signUpApi(signUpObj).then((response) => {
        navigateToLogIn();
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })

    }
  }

  const navigate = useNavigate();

  const navigateToLogIn = () => {
    navigate("/");
  }

  const location = useLocation();

  console.log(location);

  const [text, settext] = useState(false)
  const handletext = () => {
    settext(true)
  }

  useEffect(() => {
    if (location.pathname === "/signup-admin") {
      setSignUpObj(prevState => ({
        ...prevState,
        userRole: "Admin"
      }));
    }
  }, [location.pathname]);

  return (
    <div className="body">
      <div className="MainContainer">
        <div className="image">
          <img id="image" src={imageLogo} alt="logo" />
          <p id="text">ONLINE BOOK SHOPPING</p>
        </div>
        <form className="formcontainer">
          <div className="form">

            <div className="top-links"  >
              <Link to={'/'} style={!text ? { textDecoration: "none", color: "black" } : {}} >LOGIN</Link>
              <span className="link-divider"></span>
              <Link to={'/signup'} style={!text ? { color: "brown" } : {}}  >SIGNUP</Link>
            </div >
            <div className="form-inputs">
              <div className="label">
                Full Name
                <TextField id="outlined-basic" type='text' size='small'
                  onChange={takeFullName} error={regexObj.userNameBorder} helperText={regexObj.userNameHelper} />
              </div>
              <div className="label">
                Email Id
                <TextField id="outlined-basic" type='text' size='small'
                  onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
              </div>
              <div className="label">
                Password
                <TextField id="outlined-basic" type="password" size='small'
                  onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} />
              </div>
              <div className="label">
                Mobile Number
                <TextField id="outlined-basic" type="text" size='small'
                  onChange={takePhoneNumber} error={regexObj.phoneNumBorder} helperText={regexObj.phoneNumHelper} />
              </div>
              {/* <div className='label'>
                Role
                <TextField id="outlined-basic" type="text" size='small' />
              </div> */}
              <div className="label">
                <button id="submit" onClick={verifyUserSignup} >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
