import React, {useState} from 'react'
import {auth} from "../../config/firebase"
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'


const SignIn = () => {
    
    const [loginemail, setLoginEmail] = useState("")
    const [loginpassword, setLoginPassword] = useState("")
    const navigate = useNavigate()
    
  
    const signInButton = async() => {
      try{
        await signInWithEmailAndPassword(auth, loginemail, loginpassword)
        navigate('/borrower-dashboard')
      } catch (err){
        console.error(err)
      }
    }  

  return (
    <>
<Header />
<section className="main-signin">
    <div className="container">
        <div className="sign-inbx">
            <h1>Welcome Back</h1>
            <p>Enter your credentials to sign in to<br/> your account</p>
            <div className="signbx">
                <div className="inp-sty">
                  <input onChange={(e) => {setLoginEmail(e.target.value)}} type="text" placeholder="Email Address"/>
                </div>
                <div className="inp-sty">
                  <input onChange={(e) => {setLoginPassword(e.target.value)}} type="Password" placeholder="Password"/>
                </div>
                <button onClick ={signInButton} className="sub-btn" type="submit">Sign In</button>
                <a href="javascript:;">Forgot Password?</a>
                <p>Don't have an account?</p>
                <a href="/sign-up">Sign Up</a>

                {/* <div className="dmo-main">
                    <button className="dmo-btn">Borrower</button>
                    <button className="dmo-btn">Investor</button>
                </div> */}
            </div>
        </div>
    </div>
</section>

<Footer />
{/* {% include 'pages/partials/footer.html' %} */}

</>
  )
}

export default SignIn