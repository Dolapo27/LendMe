import React, {useState} from 'react'
import {auth} from "../../config/firebase"
import {createUserWithEmailAndPassword,  onAuthStateChanged} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/logo.svg'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [userType, setUserType] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
      };

    
    
    
    const handleSignUp = (userType) => {
        // Perform Firebase sign-up using email and password
        // Here, you'd typically use Firebase Authentication to create the user
    
        // After successful sign-up, determine user's choice (borrower or lender)
        if (userType === 'borrower') {
          // Redirect to borrower dashboard
          //console.log("borrower")
          navigate('/borrower');
        } else if (userType === 'lender') {
          //// Redirect to lender dashboard
          //console.log("lender")
          navigate('/investor');
        }
    };

   

    
  
    const signUpButton = async(event) => {
        event.preventDefault()
      try{
        await createUserWithEmailAndPassword(auth, email, password)
        handleSignUp(userType)
        //console.log()
       
        
    } catch (err){
        console.error(err.message)
        alert("Please fill all fields!")
      }


    }  



  return ( 
    <>
<Header />
{/* <header className="header chkout">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="logo"><img src={logo} alt=""/></div>
                </div>
            </div>
        </div>
    </header> */}


    <div className="clear"></div>

<section className="main-chkout">
    <div className="container">

       <div className="container">
    {/* <div className="stepwizard">
        <div className="stepwizard-row setup-panel">
            <div className="stepwizard-step col-xs-3">
                <a href="#step-1" type="button" className="btn btn-success btn-circle">1</a>
                <p><small>Setup Account</small></p>
            </div>
            <div className="stepwizard-step col-xs-3">
                <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
                <p><small>Personal Details</small></p>
            </div>
            <div className="stepwizard-step col-xs-3">
                <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
                <p><small>Fund Account</small></p>
            </div>

        </div>
    </div> */}

    <form role="form" onSubmit={handleSubmit}>
        <div className="panel panel-primary setup-content" id="step-1">

            <div className="frm-bx">
                <h2>Setup your account</h2>
                <div className="dmo-main">
                 <button className='dmo-btn' onClick={() => setUserType('borrower')}>Sign Up as Borrower</button>
                 <button className='dmo-btn' onClick={() => setUserType('lender')}>Sign Up as Lender</button>
                </div>
                <div className="frm-gap">
                    <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="inp-sty1">
                            <label for="">Location</label>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-12">
                        <div className="inp-sty">
                            <input type="text" placeholder="Where do you live?"/>

                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="inp-sty1">
                            <label for="">Email Address</label>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-12">
                        <div className="inp-sty">
                            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email Address"/>

                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="inp-sty1">
                            <label for="">Create Password</label>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-12">
                        <div className="inp-sty">
                            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="Password" placeholder="Password"/>

                        </div>

                    </div>
                </div>
                </div>

                 

            </div>
            <label className="checke">I have read and agree to LendMe's terms of service and privacy policy
                  <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                <button  onClick ={signUpButton} className="btncus xt-style" >Create your account</button>
        </div>

        {/* <div className="panel panel-primary setup-content" id="step-2">
            <div className="panel-heading">
                 <h3 className="panel-title">Destination</h3>
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label className="control-label">Company Name</label>
                    <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Name" />
                </div>
                <div className="form-group">
                    <label className="control-label">Company Address</label>
                    <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Address" />
                </div>
                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
            </div>
        </div>

        <div className="panel panel-primary setup-content" id="step-3">
            <div className="panel-heading">
                 <h3 className="panel-title">Schedule</h3>
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label className="control-label">Company Name</label>
                    <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Name" />
                </div>
                <div className="form-group">
                    <label className="control-label">Company Address</label>
                    <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Address" />
                </div>
                <button className="btn btn-success pull-right" type="submit">Finish!</button>
            </div>
        </div> */}

 
    </form>
</div>

    </div> {/*container End */}

</section>
<Footer />
{/* {% include 'pages/partials/footer.html' %} */}
    </>
  )
}

export default SignUp