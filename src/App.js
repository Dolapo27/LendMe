import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom"
import './App.css'

// import './Assets/css/os-lib.css'
// import './Assets/css/__style.css'
import './Assets/css/animate.css'
import './Assets/css/style.css'
import Signup from './components/Sign up/signup'
import {db} from "./config/firebase";
import {getDocs, collection} from "firebase/firestore"
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Routesss from "./Pages/routes"
import {InvestorRoutes} from './Pages/Investor/routes';
import Investor from "./Pages/Investor/Investor"
import Home from "./Pages/Home/home"
import Borrower from "./Pages/Borrower/borrower"
import Borrow2 from "./Pages/Borrow2/borrow2"
import Borrow3 from "./Pages/Borrow3/borrow3"
import Invest from "./Pages/Invest/invest"
import Loan from "./Pages/Loan/loan"
import About from "./Pages/AboutUs/about"
import SignIn from "./Pages/SignIn/signIn"
import SignUp from "./Pages/SignUp/signUp"
import RequestSubmit from './Pages/RequestSubmit/requestSubmit'
import BorrowerDashboard from './Dashboard/BorrowerDashboard'
import AdminDashboard from './Dashboard/AdminDashboard'
import LenderDashboard from './Dashboard/LenderDashboard'
import BrowseLoanRequest from './Dashboard/BrowseLoanRequest'
import RequestSubmitPage from './Pages/RequestSubmit/requestSubmit'
import Investor2 from './Pages/Investor2/investor2'
import AdminSignIn from './Pages/Admin/adminsignin'


const App = () => {
  
  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/investor" element = {<Investor />}/>
      <Route path = "/investor2" element = {<Investor2 />}/>
      <Route path = "/borrower" element = {<Borrower />}/>
      <Route path = "/borrow2" element = {<Borrow2 />}/>
      <Route path = "/borrow3" element = {<Borrow3 />}/>
      <Route path = "/loan" element = {<Loan />}/>
      <Route path = "/invest" element = {<Invest />}/>
      <Route path = "/about-us" element = {<About />}/>
      <Route path = "/sign-in" element = {<SignIn />}/>
      <Route path = "/sign-up" element = {<SignUp />}/>
      <Route path = "/request-submit" element = {<RequestSubmit />}/>
      <Route path = "/borrower-dashboard" element = {<BorrowerDashboard />}/>
      <Route path = "/admin-dashboard" element = {<AdminDashboard />}/>
      <Route path = "/lender-dashboard/:borrowerId" element = {<LenderDashboard />}/>
      <Route path = "/browse-loan-request" element = {<BrowseLoanRequest />}/>
      <Route path = "/request-submit-page" element = {<RequestSubmitPage />}/>
      <Route path = "/admin-sign-in" element = {<AdminSignIn />}/>

      
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
