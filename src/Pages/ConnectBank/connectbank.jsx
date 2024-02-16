import React from 'react';

const ConnectBank = () => {
  // const handleConnectBankAccount = () => {
  //   // Handle the logic to connect the bank account here
  // };

  const handleCompleteApplication = () => {
    // Handle the logic to complete the application here
  };

  return (
    <div>
      <h2>Complete Your Application</h2>
      <hr />
      <p>Click the button to complete your loan</p>

      {/* <button onClick={handleConnectBankAccount}>Connect Bank Account</button> */}

      <div>
        <button>Back</button>
        <button onClick={handleCompleteApplication}>Complete Application</button>
      </div>
    </div>
  );
};

export default ConnectBank;
