import React, {useState} from 'react'
import {auth} from "../../config/firebase"
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'



const AdminSignIn = () => {
    
    const [loginemail, setLoginEmail] = useState("")
    const [loginpassword, setLoginPassword] = useState("")
    const navigate = useNavigate()
    
  
    const signInButton = async() => {
      try{
        await signInWithEmailAndPassword(auth, loginemail, loginpassword)
        navigate('/admin-dashboard')
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
            <h1>Welcome</h1>
            <div className="signbx">
                <div className="inp-sty">
                  <input onChange={(e) => {setLoginEmail(e.target.value)}} type="text" placeholder="Email Address"/>
                </div>
                <div className="inp-sty">
                  <input onChange={(e) => {setLoginPassword(e.target.value)}} type="Password" placeholder="Password"/>
                </div>
                <Link to="/admin-dasboard">
                    <button onClick ={signInButton} className="sub-btn" type="submit">Sign In</button>
                </Link>
                
                
               

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

export default AdminSignIn