import { useState, React } from 'react';
import './SignUp.css'
import imageLogo from '../../Assets/LoginLogo.png'
import { TextField } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function SignUp() {

  // const [signUpObj, setSignUpObj] = useState(
  //     {
  //       fullName: '',
  //       emailId: '',
  //       password: '',
  //       mobileNumber: ''
  //     })
  // const [regexObj, setRegexObj] = useState(
  //     { 
  //       fullNameBorder: false,
  //       fullNameHelper:'',
  //       emailBorder: false,
  //       emailHelper: '',
  //       passwordBorder: false,
  //       passwordHelper: '',
  //       mobileNumBorder: false,
  //       mobileNumHelper: ''
  //     })
  const navigate = useNavigate();
  const [text, settext] = useState(false)
  const handletext = () => {
    settext(true)
  }
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
                <TextField id="outlined-basic" type="text"
                /></div>
              <div className="label">Email Id<TextField id="outlined-basic" type="text"
              /></div>
              <div className="label">Password<TextField id="outlined-basic" type="password"
              /></div>
              <div className="label">Mobile Number<TextField id="outlined-basic" type="text"
              /></div>
              <div className="label"><button id="submit" >Signup</button></div>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}
