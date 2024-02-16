import React from 'react'
import { FaInfoCircle, FaLock, FaPhoneSquare } from 'react-icons/fa'
import Footer from '../../components/Footer/footer'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import borrowerServices from '../../services/borrower.services'
import { onAuthStateChanged} from "firebase/auth"
import {auth} from "../../config/firebase"
import lenderServices from '../../services/lender.services'

const Investor2 = () => {
  const [nationalInsuranceNumber, setNationalInsuranceNumber] = useState('')
  const [creditScore, setCreditScore] = useState('')
  const [isFormValid, setIsFormValid] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  
  const navigate = useNavigate()

  const validateForm = () => {
    setIsFormValid(nationalInsuranceNumber !== '' && creditScore !== '');
  };

  const handleNationalInsuranceNumber = (event) => {
    setNationalInsuranceNumber(event.target.value);
    validateForm();
  };

  const handleCreditScore = (event) => {
    setCreditScore(event.target.value);
    validateForm();
  };

  
  const moveToNextPage = () => {
    if (isFormValid) {
      // Navigate to the next page
      navigate('/browse-loan-request')
    } else {
      alert('Please fill in all the fields before proceeding.');
    }
  };



useEffect(() => {
     onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, get the user's ID
            setCurrentUserId(user.uid);
            console.log(currentUserId)
            } else {
            // User is signed out
            setCurrentUserId(null);
            }
        });
}, []);



    


  const handleSubmit = async(event) => {
    event.preventDefault()
    const updateLenderDetails = {
        creditScore,
        nationalInsuranceNumber
    }

    try{
        await lenderServices.updateLender(currentUserId, updateLenderDetails)
        alert("Account created successfully")
        moveToNextPage()
        
    } catch (err){
        console.error(err.message)
        alert("Please fill all fields")
    }
}  


  return (
    <>
<header className="header chkout">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="logo"><img src="assets/images/logo.svg" alt=""/></div>
                </div>
            </div>
        </div>
    </header>
    
    
    <div className="clear"></div>

<section className="main-chkout">
    <div className="container">
       <h4>To accurately Create an Account, please provide your NI number and Credit Score</h4>

        <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-12">
                <div className="main-bx-st">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="inp-sty lgap icn">
                            <input value={nationalInsuranceNumber} onChange={handleNationalInsuranceNumber} type="text" placeholder="Enter your NI" required/>
                            <span><FaLock aria-hidden="true"/></span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inp-sty">
                            <input value={creditScore} type="text" onChange={handleCreditScore} placeholder="Credit Score" required/>
                        
                        </div>
                    </div>
                </div>
                <div className="ssn-main">
                    <div className="ssn-bx">
                        <h5><FaInfoCircle aria-hidden="true"/> Why do we need this?</h5>
                        <p>Your NI is used to make sure we identify your credit history and not someone else’s. All information entered into the Peertwo website is kept safe and secure. For more information, please read our Peertwo Privacy Policy</p>
                    </div>
                </div>
                </div>

            </div> {/* col-md-8 End */}

        <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="bubble-r-box">
                <h5>Got Questions? Give us a call</h5>
                <div className="buble-bx">
                    <span><FaPhoneSquare aria-hidden="true"/></span>
                    <h5>(800) 222-6688 <span>6am - 6pm PT</span></h5>
                </div>
            </div>
        </div>
        <div className="clear"></div>
               <button onClick={handleSubmit} className="btncus gtr">Create Account</button>
               <h6 className="chk-b"><FaInfoCircle aria-hidden="true"/> Checking your rate won't affect your credit score!</h6>
        </div>
            <div className="clear"></div>
            

           

     
            
    </div> {/* container End */}
    
</section> 
<Footer />
{/* PUT FOOTER HERE */}
</>


  )
}

export default Investor2