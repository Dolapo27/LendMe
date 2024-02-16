import React, { useState, useEffect } from 'react'
import stopwatch from '../../Assets/images/stopwatch.svg'
import calendar2 from '../../Assets/images/calendar2.svg'
import percent from '../../Assets/images/percent.svg'
import wallet from '../../Assets/images/wallet.svg'
import Footer from '../../components/Footer/footer'
import Borrowerservices from '../../services/borrower.services'
import {Link} from 'react-router-dom'
import {MdTravelExplore} from 'react-icons/md'
import { onAuthStateChanged} from "firebase/auth"
import {auth} from "../../config/firebase"

const Borrow3 = () => {

// const [loanAmount, setLoanAmount] = useState(0)
// const [apr, setApr] = useState(0) = useState(0)
// const [interestRate, setInterestRate] = useState(0)
// const [monthlyPayment, setMonthlyPayment] = useState(0) 


const [borrowers, setBorrowers] = useState({})
const [currentUserId, setCurrentUserId] = useState(null)


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
       

          
       

      details() 
}, [currentUserId]); 


    const details = async () => {
    if (currentUserId){
        const loanDetails = await Borrowerservices.getBorrower(currentUserId)
        console.log("////", loanDetails)
        const filteredLoanDetails = loanDetails.data()
        //console.log(filteredLoanDetails)
        setBorrowers(filteredLoanDetails)
        console.log(borrowers)
    }    

    
  } 





// const getBorrower = async () => {
//     const data = await Borrowerservices.getBorrowers()
//     const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id }) )
//     console.log(filteredData)
//     setBorrowers(filteredData)
  
// }  

//return this back to the section key={borrowers.id}
    
  return (
    <>
    <header className="header chkout">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="logo"><h1><MdTravelExplore className='header-icon'/>LendMe</h1></div>
                </div>
            </div>
        </div>
    </header>

    
    <div className="clear"></div>
    {Object.keys(borrowers).length > 0 ? (
        <section className="main-chkout brow-3">
            <div className="container">
                <h1>You qualify for a ${borrowers.amount} loan</h1>

                <div className="col-md-8 col-sm-8 col-xs-12">
                    
                    <div className="frm-bx">
                        <h2>Your customized loan offers:</h2>
                        <button className="btn-ofr">36 Months Term</button>
                        <div className="ofr-lst">
                            <ul>
                                <li><span>Loan Amount</span> ${borrowers.amount}</li>
                                {/* <li><span>APR</span> 23.74%</li> */}
                                <li><span>Interest Rate</span> 2.50%</li>
                                <li><span>Monthly Payment</span>${(parseFloat(borrowers.amount) / 36).toFixed(2)}</li>
                            </ul>
                            <Link to='/request-submit' >
                             <button className="btn-loan ofr">Get this loan</button>
                            </Link>  
                            {/* <button className="edt-btn">edit loan Amount</button> */}
                        </div>
                        
                        <div className="">
                            <button className="btn-ofr ofr-2">60 Months Term</button>
                        <div className="ofr-lst ofr2">
                            <ul>
                                <li><span>Loan Amount</span> ${borrowers.amount}</li>
                                {/* <li><span>APR</span> {(((borrowers.amount * 0.25 * 60) / 2) / (borrowers.amount / 12))}%</li> */}
                                <li><span>Interest Rate</span> 2.50%</li>
                                <li><span>Monthly Payment</span> ${(parseFloat(borrowers.amount) / 60).toFixed(2)}</li>
                            </ul>
                            <Link to='/request-submit' >
                             <button className="btn-loan ofr">Get this loan</button>
                            </Link>                            
                            {/* <button className="edt-btn">edit loan Amount</button> */}
                        </div>
                            
                        </div>

                    </div> {/* Form tab End */}            
                </div> {/* col-md-8 End */}

                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="chklst">
                    <ul>
                        <li>
                            <img src={stopwatch} alt=""/>
                            <p>Get a Quote in<br/> 5 minutes</p>
                        </li>
                        <li>
                            <img src={percent} alt=""/>
                            <p>Get lower rates</p>
                        </li>

                        <li>
                            <img src={wallet} alt=""/>
                            <p>Single monthly payments</p>
                        </li>

                        <li>
                            <img src={calendar2} alt=""/>
                            <p>Fixed terms—3 or 5 years*</p>
                        </li>

                    </ul>
                    </div>
                </div>

            </div> 
            {/* container End */}
       </section> 
      )
       :
       (
        <p>No loan details found</p>
       )
    }  
    
   
<Footer />
{/* PUT FOOTER HERE */}
</>
  )
}

export default Borrow3