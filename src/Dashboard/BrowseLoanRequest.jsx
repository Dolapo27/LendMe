import React, { useState, useEffect, useNavigate } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Menu, MenuItem } from '@material-ui/core';
import borrowerServices from '../services/borrower.services';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Header from '../components/Header/header'
import { Link } from 'react-router-dom';

const BrowseLoanRequest = () => {
 
 const [approvedBorrowers, setApprovedBorrowers] = useState([])

//  const navigate = useNavigate

//   const handleAction = (borrowerId) => {
//     navigate("/LenderDashboard")
//   };

 
    useEffect(() => {
        const fetchApprovedBorrower = async () => {
        try{    
            const approvedBorrowersData = await borrowerServices.getApprovedBorrowers()
            setApprovedBorrowers(approvedBorrowersData)
            console.log(approvedBorrowers)
        } catch (err) {
            console.error(err.message)
        }
      }

      fetchApprovedBorrower()


    }, []) 
  


  return (
    <>
    <Header />
      <div style={{ marginTop : "100px"}} >
      <h2 style={{ textAlign: "center"}}>Browse Loan Request</h2>
        <table className='admin-dashboard'>
        <thead>
            <tr>
                <th  style={{ textAlign: "center"}}>Loan Purpose</th>
                <th  style={{ textAlign: "center"}}>Loan Rating</th>
                <th style={{ textAlign: "center"}}>First Name</th>
                <th style={{ textAlign: "center"}}>Last Name</th>
                <th style={{ textAlign: "center"}}>Amount</th>
                <th style={{ textAlign: "center"}}>Yield</th>
                <th style={{ textAlign: "center"}}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {approvedBorrowers.map((borrower) => (
            <tr key={borrower.id}>
                <td>{borrower.loanPurpose}</td>
                <td>A</td>
                <td>{borrower.firstName}</td>
                <td>{borrower.lastName}</td>
                <td>${borrower.amount}</td>
                <td>2.50%</td>
                
                <td>
            
                    <Link to={`/lender-dashboard/${borrower.id}`}>
                        <button className='btn btn-verify' > Fund </button>
                    </Link>
                    
                    
                   
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </>
   
  );
};

export default BrowseLoanRequest;
