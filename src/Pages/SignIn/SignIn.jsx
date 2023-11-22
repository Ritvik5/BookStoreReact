import { React, useState } from 'react'
import './SignIn.css'
import imageLogo from '../../Assets/LoginLogo.png'
import { TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { signInApi } from '../../Services/UserService'
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

export default function SignIn() {

    const [signInObj, setSignInObj] = useState({
        userEmailId: '',
        userPassword: '',
    })

    const takeEmail = (e) => {
        setSignInObj(prevState => ({
            ...prevState,
            userEmailId: e.target.value
        }))
    }

    const takePassword = (e) => {
        setSignInObj(prevState => ({
            ...prevState,
            userPassword: e.target.value
        }))
    }

    console.log(signInObj);

    const [regexObj, setRegexObj] = useState({
        emailBorder: false,
        emailHelper: '',
        passwordBorder: false,
        passwordHelper: '',
    })

    const verifyEmailPass = (e) => {
        e.preventDefault();
        let emailTest = emailRegex.test(signInObj.userEmailId);
        let passwordTest = passwordRegex.test(signInObj.userPassword);

        emailTest === false ? setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: 'Enter a valid email.' }))
            : setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: '' }));

        passwordTest === false ? setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: 'Enter a valid password.' }))
            : setRegexObj(prevState => ({ ...prevState, passwordBorder: false, emailHelper: '' }));

        if (emailTest === true && passwordTest === true) {
            signInApi(signInObj).then((response) => {
                console.log(response);
                navigateToAllBooks();
                localStorage.setItem("token", response.data.data.token);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    let navigate = useNavigate();

    const navigateToAllBooks = () => {
        navigate("/signup-admin");
    }

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
                            <Link to="/" style={!text ? { color: "brown" } : {}}>LOGIN</Link>
                            <span className="link-divider"></span>
                            <Link to="/signup" style={!text ? { textDecoration: 'none', color: 'black' } : {}} >SIGNUP</Link>
                        </div >
                        <div className="form-inputs">
                            <div className="label">
                                Email Id
                                <TextField id="outlined-basic" type="text" size='small'
                                    onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
                            </div>
                            <div className="label">
                                Password
                                <TextField id="outlined-basic" type="password" size='small'
                                    onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} />
                                <div className="forgetlink"><Link id="forget1" to="/">Forget Password?</Link></div>
                            </div>
                            <div id="outlined-basic"><button id="submit" onClick={verifyEmailPass}>Signin</button></div>
                            <div className="hrtag"><hr /><span>OR</span><hr /></div>
                            <div className="facegoogle">
                                <div className="label" ><button id="facebook">Facebook</button></div>
                                <div className="label"><button id="google">Google</button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
