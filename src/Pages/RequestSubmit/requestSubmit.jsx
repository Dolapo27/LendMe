import React from 'react';
import {Link}  from 'react-router-dom'

const RequestSubmitPage = () => {
  return (
    <section className='main-chkout brow-3' style={{ textAlign: "center"}}>
        <div className='container'>
          <div className='borrower-dashboard-header' >
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div className="frm-bx">
            <h2>Request submitted</h2> 
            <div style={{ padding: "10px 30px", }} >
              <p>Your loan request has been successfully completed</p>
              <p>and will be listed for investors within 24 hours after successful vetting</p>
            </div> 
            <Link to="/borrower-dashboard">
            <button className="btn-loan ofr">Go to your Account</button>
            </Link>
      
        </div>
      </div>  
        <hr />
       
      </div>
    </div>
    </section>
   
    
  );
};

export default RequestSubmitPage;
