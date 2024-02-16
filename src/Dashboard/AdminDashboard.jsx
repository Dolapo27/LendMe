import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Menu, MenuItem } from '@material-ui/core';
import borrowerServices from '../services/borrower.services';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Header from '../components/Header/header'
import {auth} from "../config/firebase"
import {signOut} from "firebase/auth"
import {  useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
 const [borrowers, setBorrowers] = useState([])
 const [loanId, setLoanId] = useState("")
 const [status, setStatus] = useState("")

 const navigate = useNavigate()







  const getBorrower = async () => {
  const data = await borrowerServices.getAllBorrowers()
  const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id }) )
  //console.log(filteredData)
  setBorrowers(filteredData)
  } 

  useEffect(() => {
    getBorrower()
}, []) 

const handleVerify = async (loanId) => {
  setLoanId(borrowers.id);

  const updateStatus = {
    status: "Approved",
  };
  try {
    // Update the borrower's status in Firestore
    await borrowerServices.updateBorrower(loanId, updateStatus);

    // Update the React state with the new status
    setBorrowers((prevBorrowers) =>
      prevBorrowers.map((borrower) =>
        borrower.id === loanId ? { ...borrower, ...updateStatus } : borrower
      )
    );

    console.log("Status changed");
    console.log(borrowers);
  } catch (err) {
    console.error(err.message);
  }
};

const handleReject = async (loanId) => {
  setLoanId(borrowers.id);

  const updateStatus = {
    status: "Rejected",
  };
  try {
    // Update the borrower's status in Firestore
    await borrowerServices.updateBorrower(loanId, updateStatus);

    // Update the React state with the new status
    setBorrowers((prevBorrowers) =>
      prevBorrowers.map((borrower) =>
        borrower.id === loanId ? { ...borrower, ...updateStatus } : borrower
      )
    );

    console.log("Status changed");
    console.log(borrowers);
  } catch (err) {
    console.error(err.message);
  }
};


const handleLogOut = async () => {
  await signOut(auth)
  navigate("/")

}



  return (
    <>
    <Header />
      <div style={{ marginTop : "100px", }} >

      <button style={{ marginLeft: "1200px"}} className='sign-out-button' onClick={handleLogOut}>Sign Out</button>
      <h2 style={{ textAlign: "center"}}>Admin Dashboard</h2>
     
        <table className='admin-dashboard'>
        <thead>
            <tr>
                <th  style={{ textAlign: "center"}}>Loan Purpose</th>
                <th  style={{ textAlign: "center"}}>Loan Rating</th>
                <th style={{ textAlign: "center"}}>First Name</th>
                <th style={{ textAlign: "center"}}>Last Name</th>
                <th style={{ textAlign: "center"}}>Amount</th>
                <th style={{ textAlign: "center"}}>State</th>
                <th style={{ textAlign: "center"}}>Status</th>
                <th style={{ textAlign: "center"}}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {borrowers.map((borrower) => (
            <tr key={borrower.id}>
                <td>{borrower.loanPurpose}</td>
                <td>A</td>
                <td>{borrower.firstName}</td>
                <td>{borrower.lastName}</td>
                <td>{borrower.amount}</td>
                <td>{borrower.city}</td>
                <td>{borrower.status}</td>
                
                <td>
            
                    <button className='btn btn-verify' onClick={() => handleVerify(borrower.id)}>Verify Loan</button>
                    <button className='btn btn-reject' onClick={() => handleReject( borrower.id)}>Deny Loan</button>
                    
                   
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </>
   
  );
};

export default AdminDashboard;
