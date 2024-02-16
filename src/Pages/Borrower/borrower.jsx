import React, {useEffect,useState} from 'react'
import { FaCaretDown } from 'react-icons/fa'
import percent from '../../Assets/images/percent.svg'
import stopwatch from '../../Assets/images/stopwatch.svg'
import wallet from '../../Assets/images/wallet.svg'
import calendar2 from '../../Assets/images/calendar2.svg'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword,  onAuthStateChanged} from "firebase/auth"
import {auth} from "../../config/firebase"
import Borrowerservices from '../../services/borrower.services'
import {Alert} from 'react-bootstrap'
import SuccessModal from '../../components/Modal/successmodal'; // Import the SuccessModal component
import ErrorModal from '../../components/Modal/erromodal'; // Import the ErrorModal component



// import {collection,getDoc,getDocs, addDoc,setDoc,updateDoc,doc} from "firebase/firestore"
// import {db} from "../../config/firebase"

 
const Borrower = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const amountFromLoan = searchParams.get('amount');
  const [amount, setAmount] = useState(amountFromLoan || '');
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState({error: false, msg: ""})
  
  const [loanPurpose, setloanPurpose] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [individualIncome, setIndividualIncome] = useState('');
  const [additionalYearlyIncome, setAdditionalYearlyIncome] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null)
 const [loginmessage, setLoginmessage] = useState("")


//  const userRef = collection(db, "borrowers")

  const navigate = useNavigate()
 
  const handleSuccess = () => {
    setShowSuccessModal(true);
    setModalMessage('Operation was successful!');
  };

  const handleError = () => {
    setShowErrorModal(true);
    setModalMessage('An error occurred.');
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };


   
  const validateForm = () => {
    setIsFormValid(firstName !== '' && lastName !== '' && dateOfBirth !== '' && address !== ''
    && city !== '' && country !== ''&& postCode !== ''&& monthlyPayment !== ''
    && individualIncome !== ''&& additionalYearlyIncome !== ''&& email !== '' && password !== '');
  };

    // Update state and validate when input changes
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
        validateForm();
      };
      const handleLastName = (event) => {
        setLastName(event.target.value);
        validateForm();
      };
      const handleDateOfBirth = (event) => {
        setDateOfBirth(event.target.value);
        validateForm();
      };
      const handleAddress = (event) => {
        setAddress(event.target.value);
        validateForm();
      };
      const handleCity = (event) => {
        setCity(event.target.value);
        validateForm();
      };
      const handleCountry = (event) => {
        setCountry(event.target.value);
        validateForm();
      };
      const handlePostCode = (event) => {
        setPostCode(event.target.value);
        validateForm();
      };
      const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
        validateForm();
      };
      const handleMonthlyPayment = (event) => {
        setMonthlyPayment(event.target.value);
        validateForm();
      };
      const handleEmploymentStatus = (event) => {
        setEmploymentStatus(event.target.value);
        validateForm();
      };
      const handleIndividualYearlyIncome = (event) => {
        setIndividualIncome(event.target.value);
        validateForm();
      };
      const handleAdditionalYearlyIncome = (event) => {
        setAdditionalYearlyIncome(event.target.value);
        validateForm();
      };
      const handleEmail = (event) => {
        setEmail(event.target.value);
        validateForm();
      };
      const handlePassword = (event) => {
        setPassword(event.target.value);
        validateForm();
      };

      const handleLoanPurpose = (e) => {
        setloanPurpose(e.target.value)
        validateForm()
      }



      
   

      // Move to the next page
  const moveToNextPage = () => {
    if (isFormValid) {
        navigate('/borrow2')
      // Logic to navigate to the next page
    }
   
  };

  const signUpButton = async(event) => {
    event.preventDefault()
    const newBorrower = {
        amount,
        loanPurpose,
        firstName,
        lastName,
        dateOfBirth,
        address,
        city,
        postCode,
        phoneNumber,
        employmentStatus,
        monthlyPayment,
        individualIncome,
        additionalYearlyIncome,
        status:"Pending",
        role: "borrower" 
    } 
  

  try{
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    const borrower = {... newBorrower, id: `${userCredentials.user.uid}`}
    await Borrowerservices.addBorrower(borrower)
    console.log("This is current user id: " + borrower.id)
    moveToNextPage()
    setModalMessage('Borrower added successfully');
    setShowSuccessModal(true);
  
    
} catch (err){
   console.log(err.error)
   setModalMessage('Please fill all the fields!');
      setShowErrorModal(true);
     
  }
}  



//    const [borrowers, setBorrowers] = useState([])
//     useEffect(() => {
//         getBorrower()
//     }, []) 

//     const getBorrower = async () => {
//         const data = await Borrowerservices.getAllBorrowers()
//         const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id }) )
//         //setBorrowers(filteredData)
//         const ids = filteredData.map((item) => item.id)
//         console.log(ids)
//         //return(borrowers)
//     }


   



  return (
    <>
    <Header />

<div class="clear"></div>

<section class="main-chkout">
    <div class="container">
        <h1>Get a Quote</h1>

        <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="frm-bx">
                <h2>How much would you like to borrow?</h2>
                <div class="frm-gap">
                    <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Amount</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty lgap">
                            <input type="text" value={amount} placeholder="Amount" onChange={((e) => {setAmount(e.target.value)})}/>
                            <span>$</span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Loan Purpose</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty">
                           <select name="" id="" value={loanPurpose} onChange={handleLoanPurpose}>
                            <option value="">What do you need it for?</option>
                            <option value="Credit Cards">Credit Cards</option>
                            <option value="Debt Consolidation">Debt Consolidation</option>
                            <option value="Student Loans">Student Loans</option>
                            <option value="Home Improvement">Home Improvement</option>
                               <option value="student loans">student loans</option>
                               <option value="Medical/Dental">Medical/Dental</option>
                               <option value="Busin">Busin</option>
                               <option value="Large Purchase">Large Purchase</option>
                               <option value="Automobile">Automobile</option>
                               <option value="Special Occassion">Special Occassion</option>
                               <option value="Vacation">Vacation</option>
                               <option value="Baby or Adoption">Baby or Adoption</option>
                               <option value="">Other</option>
                           </select>
                           <FaCaretDown aria-hidden="true"/>

                       </div>
                    </div>
                </div>
                </div>
            </div> Form tab End

            <div class="frm-bx">
                <h2>Tell Us About Yourself</h2>
                <div class="frm-gap">
                    <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Full Name</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="inp-sty">
                            <input value = {firstName} onChange={handleFirstName}   type="text" placeholder="First Name"/>

                        </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inp-sty">
                            <input value={lastName} onChange={handleLastName}   type="text" placeholder="Last Name"/>

                        </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Date of Birth</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty">
                            <input value={dateOfBirth} onChange={handleDateOfBirth}   type="text" placeholder="Date of Birth (MM/DD/YYYY)"/>

                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Street Address</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty">
                            <input value={address} onChange={handleAddress}   type="text" placeholder="Apt/Suite No, Street"/>

                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">City</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="inp-sty">
                                    <input value={city} onChange={handleCity}   type="text" placeholder="City"/>
                                </div>
                          </div>
                          <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="inp-sty1">
                                    <label for="">Country</label>
                                </div>
                            </div>
                          <div class="col-md-6">
                                <div class="inp-sty">
                                    <div class="inp-sty">
                                      <input value={country} onChange={handleCountry}   type="text" placeholder="Country"/>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">ZIP & Phone</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="inp-sty">
                            <input value={postCode} onChange={handlePostCode}   type="text" placeholder="Zip/Postal Code"/>

                        </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inp-sty">
                            <input value={phoneNumber} onChange={handlePhoneNumber}  type="text" placeholder="Phone Number"/>

                        </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Row End */}

                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Monthly Housing Payment</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty">
                            <input value={monthlyPayment} onChange={handleMonthlyPayment}   type="text" placeholder="Monthly Housing Payment"/>

                        </div>

                    </div>
                </div> {/* Row End Here */}

                </div>
            </div> {/* Form tab End */}

            <div class="frm-bx">
                <h2>What is your income?</h2>
                <div class="frm-gap">
                    <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Employment Status</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty">
                           <select name="" id="" value={employmentStatus} onChange={handleEmploymentStatus}>
                            <option value="">Employment Status</option>
                            <option value="Employed">Employed</option>
                            <option value="Self-Employed">Self-Employed</option>
                            <option value="Other">Other</option>

                           </select>
                           <FaCaretDown aria-hidden="true"/>

                       </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Individual Yearly Income</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty lgap">
                            <input value={individualIncome} onChange={handleIndividualYearlyIncome}  type="text" placeholder="Individual Yearly Income"/>
                            <span>$</span>
                        </div>

                    </div>
                </div> {/* Row End Here */}

                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Additional Yearly Income</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty lgap">
                            <input value={additionalYearlyIncome} onChange={handleAdditionalYearlyIncome}   type="text" placeholder="Additional Yearly Income"/>
                            <span>$</span>
                        </div>

                    </div>
                </div> {/* Row End Here */}

                </div>
            </div> {/* Form tab End */}

            <div class="frm-bx">
                <h2>Save your information</h2>
                <div class="frm-gap">
                    <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Email Address</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty">
                            <input value={email} onChange={handleEmail}   type="email" placeholder="Email Address"/>

                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="inp-sty1">
                            <label for="">Create Password</label>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="inp-sty">
                            <input value={password} onChange={handlePassword}   type="password" placeholder="Password"/>

                        </div>
                    </div>
                </div>
                </div>

                <button onClick={signUpButton}  class="btncus" >Get a Quotes</button>
                {/* {message?.msg && (
                <Alert
                    variant={message?.error ? "danger" : "success"}
                    dismissible
                    onClose={() => setMessage("")}
                >
                    {message?.msg}
                </Alert>
                )} */}

            </div> {/* Form tab End */}

        </div> {/* col-md-8 End */}

        <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="chklst">
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
                    <img src={wallet}alt=""/>
                    <p>Single monthly payments</p>
                </li>

                <li>
                    <img src={calendar2} alt=""/>
                    <p>Fixed terms—3 or 5 years*</p>
                </li>

            </ul>
            </div>
        </div>
            <div class="clear"></div>
            <div class="chl-txt">
                <p>The following documents contain important information, including your agreement to do business with<br/> <span>LendMe</span> electronically. <span>By clicking the box below, you confirm that you agree by electronic signature to:</span></p>
            </div>

            <label class="checke">the Credit Report Authorization, Terms of Use and Electronic Consent, Data Terms of Use & Prosper privacy policies.

  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>


</div> {/* container End */}

 {/* Success Modal */}
 <SuccessModal isOpen={showSuccessModal} message={modalMessage} onClose={() => setShowSuccessModal(false)} />

{/* Error Modal */}
<ErrorModal isOpen={showErrorModal} message={modalMessage} onClose={() => setShowErrorModal(false)} />

</section>
{/* {% include 'pages/partials/header.html' %} */}
<Footer />
</>
  )
}

export default Borrower