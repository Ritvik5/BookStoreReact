import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUpForm from '../Pages/SignUp/SignUp'
import SignInForm from '../Pages/SignIn/SignIn'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element= {<SignInForm/>}></Route>
                <Route path={"/signup-admin"} element={<SignUpForm/>}></Route>
                <Route path={"/signup"} element= {<SignUpForm/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
