import React, { useState } from 'react';
import { auth } from './firebase'; // Import the auth object from your Firebase setup

const Phonesignin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  console.log(auth,"auth");

  const handleSendCode = () => {
    // Use Firebase's auth object to send a verification code to the provided phone number
    auth
      .signInWithPhoneNumber(phoneNumber)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
      })
      .catch((error) => {
        console.error('Error sending verification code:', error);
      });
  };

  const handleVerifyCode = () => {
    // Use the confirmation result and verification code to sign in
    confirmationResult
      .confirm(verificationCode)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Successfully signed in:', user);
        // You can perform actions after successful sign-in here
      })
      .catch((error) => {
        console.error('Error verifying code and signing in:', error);
      });
  };

  return (
    <div>
      <h2>Phone Number Sign-In</h2>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSendCode}>Send Verification Code</button>
      <input
        type="text"
        placeholder="Enter verification code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleVerifyCode}>Verify Code</button>
    </div>
  );
};

export default Phonesignin;
