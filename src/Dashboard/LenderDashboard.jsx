import React, { useState, useEffect } from 'react';
import {MdTravelExplore} from 'react-icons/md'
import {auth} from "../config/firebase"
import {signOut} from "firebase/auth"
import borrowerServices from '../services/borrower.services';
import { useParams } from 'react-router-dom';
import ConfirmationModal from '../components/Modal/ConfirmationModal';
import {  useNavigate } from 'react-router-dom';

const LenderDashboard = () => {
  
  const {borrowerId } = useParams();
  const [loanAmount, setLoanAmount] = useState('')
  const [loanPurpose, setLoanPurpose] = useState('');
  const [borrower, setBorrower] = useState(null)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loanFunded, setLoanFunded] = useState(false);


  const navigate = useNavigate()

  useEffect(() => {
    const fetchBorrowerDetails = async () => {
        try{
          const borrowerData = await borrowerServices.getBorrower(borrowerId)
          console.log(borrowerData)
          const filteredBorrowerData = borrowerData.data()
          console.log(filteredBorrowerData)
          setBorrower(filteredBorrowerData)
          // console.log(borrower)
        } catch(err){
           console.error(err.message)
        }
    }

      fetchBorrowerDetails()
  }, [borrowerId])  
  

  const handleLoanFunding = () => {
    // Display the confirmation modal
    setLoanAmount(borrower.amount);
    setLoanPurpose(borrower.loanPurpose);
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmFunding = () => {
    // Implement the loan funding logic here
    console.log(`Funding $${borrower.amount} for borrower with ID: ${borrowerId}`);

    // Close the confirmation modal
    setIsConfirmationModalOpen(false);
    setSuccess(true)
    setLoanFunded(true)
  };
  
  const handleLogout = async () => {
      await signOut(auth)
      navigate("/")
  }




  return (
      <>
          <header className="header chkout">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="logo">
                        <a href="/">
                        <h1><MdTravelExplore className='header-icon'/>LendMe</h1>
                        </a>
                        </div>
                      </div>
                  </div>
              </div>
          </header>
      
      
          <div className="clear"></div>
          {borrower ? (
          
                  <section className="main-chkout brow-3" key={borrower.id}>
                      <div className="container">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h1>Browse Loan Requests</h1>
                          <button className='sign-out-button' onClick={handleLogout}>Sign Out</button>
                        </div>
                        <a href="/browse-loan-request"> Back to loans</a>

                          <div className="col-md-8 col-sm-8 col-xs-12">
                              <div className="frm-bx">
                                <h2>{borrower.loanPurpose}</h2> 
                                <div className="ofr-lst">
                                      <ul>
                                          <li><span>Loan Amount</span> ${borrower.amount}</li>
                                          <li><span>Yield</span> 2.50%</li>
                                          <li><span>Monthly Payment</span>${(borrower.amount / 36).toFixed(2)}</li>
                                          <li><span>Loan Term</span> 36 Months</li>
                                      </ul>
                                      {loanFunded ? ( <h2 className='fund'> Funded </h2> ) : (<button className='btn-loan ofr' onClick={handleLoanFunding }>Fund Loan</button>)}
                                      
                               </div> 
                              </div>
                          </div>  

                          <ConfirmationModal
                            isOpen={isConfirmationModalOpen}
                            onClose={() => setIsConfirmationModalOpen(false)}
                            onConfirm={handleConfirmFunding}
                            success={success}
                            loanAmount={loanAmount} // Pass loan amount to the modal
                            loanPurpose={loanPurpose} // Pass loan purpose to the modal
                          />        
                      </div>  
                  </section> 
            )  

            : 

            <p>No details found</p>
          }
      </>
  )
  
};

export default LenderDashboard;
