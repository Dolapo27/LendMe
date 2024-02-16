import React,{useState, useEffect} from 'react';
import borrowerServices from '../services/borrower.services';
import {auth} from "../config/firebase"
import {signOut} from "firebase/auth"
import {MdTravelExplore} from 'react-icons/md'
import { onAuthStateChanged} from "firebase/auth"
import { colors } from 'material-ui/styles';
import {  useNavigate } from 'react-router-dom';

const BorrowerDashboard = () => {

    const [borrowers, setBorrowers] = useState({})
    const [currentUserId, setCurrentUserId] = useState(null);
    
    const navigate = useNavigate()

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
        const loanDetails = await borrowerServices.getBorrower(currentUserId)
        console.log("////", loanDetails)
        const filteredLoanDetails = loanDetails.data()
        console.log(filteredLoanDetails)
        setBorrowers(filteredLoanDetails)
        //setBorrowers(filteredLoanDetails)
        //console.log(borrowers)
        
      } 
    
    const handleLogOut = async () => {
        await signOut(auth)
        navigate("/")

    }

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
                    <section className="main-chkout brow-3 align-center">
                        <div className="container">
                          <div className='borrower-dashboard-header'>
                            <h1>Welcome back, {borrowers.firstName}</h1>
                            <button  onClick={handleLogOut} className="sign-out-button">Sign Out</button>
                         </div>  
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="frm-bx">
                                  <h2>Debt Consolidation</h2> 
                                  <div className="ofr-lst">
                                        <ul>
                                            <li><span>Loan Amount</span> ${borrowers.amount}</li>
                                            {/* <li><span>APR</span> 23.74%</li> */}
                                            <li><span>Interest Rate</span> 2.50%</li>
                                            <li><span>Monthly Payment</span>${(borrowers.amount / 36).toFixed(2)}</li>
                                            <li style={{color: "red" }}><span>Status</span> {borrowers.status}</li>
                                        </ul>
                                 </div> 
                                </div>
                            </div>  
                        </div>  
                    </section> 
              )
              
              :
              (
                <p>No loan details found </p>
              )
            }

        </>
    )
}    
export default BorrowerDashboard;
