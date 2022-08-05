import { TextField, FormControl, Input, Button } from '@mui/material';
import React, { useState } from 'react';
import styles from './style.css';
// import Box from '@mui/material/Box';

const RegistrationRequestForm = () => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    citizenshipCertificateNumber: '',
    citizenshipCertificateIssuedDistrict: '',
    address: '',
  });

  const handleChange = (e, fieldName) => {
    setUserDetails({
      ...userDetails,
      [fieldName]: e.target.value,
    });

    if (
      userDetails.firstName == '' ||
      userDetails.lastName == '' ||
      userDetails.phoneNumber == '' ||
      userDetails.password == '' ||
      userDetails.confirmPassword == '' ||
      userDetails.citizenshipCertificateNumber == '' ||
      userDetails.citizenshipCertificateIssuedDistrict == '' ||
      userDetails.address == ''
    )
      setCanSubmit(false);
    else setCanSubmit(true);
  };

  const handleSubmit = async () => {
    console.log('adf');
    console.log(userDetails);
  };

  return (
    <FormControl
      onSubmit={handleSubmit}
      sx={{
        top: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        className="standard-basic"
        label="First Name"
        variant="standard"
        required={true}
        onChange={(e) => handleChange(e, 'firstName')}
        value={userDetails.firstName}
      />
      <TextField
        className="standard-basic"
        label="Middle Name"
        variant="standard"
        value={userDetails.middleName}
        onChange={(e) => handleChange(e, 'middleName')}
      />
      <TextField
        className="standard-basic"
        label="Last Name"
        variant="standard"
        required={true}
        value={userDetails.lastName}
        onChange={(e) => handleChange(e, 'lastName')}
      />
      <TextField
        className="standard-basic"
        label="Phone Number"
        variant="standard"
        required={true}
        type="number"
        value={userDetails.phoneNumber}
        onChange={(e) => handleChange(e, 'phoneNumber')}
      />
      <TextField
        className="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        required={true}
        onChange={(e) => handleChange(e, 'password')}
        value={userDetails.password}
      />
      <TextField
        className="standard-basic"
        label="Confirm Password"
        variant="standard"
        type="password"
        required={true}
        onChange={(e) => handleChange(e, 'confirmPassword')}
        value={userDetails.confirmPassword}
      />
      <TextField
        className="standard-basic"
        label="Citizenship Certificate Number"
        variant="standard"
        type="number"
        required={true}
        onChange={(e) => handleChange(e, 'citizenshipCertificateNumber')}
        value={userDetails.citizenshipCertificateNumber}
      />
      <TextField
        className="standard-basic"
        label="Citizenship Certificate Issued District"
        variant="standard"
        required={true}
        onChange={(e) =>
          handleChange(e, 'citizenshipCertificateIssuedDistrict')
        }
        value={userDetails.citizenshipCertificateIssuedDistrict}
      />
      <TextField
        className="standard-basic"
        label="Address"
        variant="standard"
        required={true}
        onChange={(e) => handleChange(e, 'address')}
        value={userDetails.address}
      />
      <Button variant="outlined" onClick={handleSubmit} disabled={!canSubmit}>
        Request Registration
      </Button>
    </FormControl>
  );
};

export default RegistrationRequestForm;
