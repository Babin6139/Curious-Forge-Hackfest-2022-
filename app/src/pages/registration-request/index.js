import { TextField, FormControl, Input, Button, Stack, Grid } from '@mui/material';
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
      userDetails.firstName === '' ||
      userDetails.lastName === '' ||
      userDetails.phoneNumber === '' ||
      userDetails.password === '' ||
      userDetails.confirmPassword === '' ||
      userDetails.citizenshipCertificateNumber === '' ||
      userDetails.citizenshipCertificateIssuedDistrict === '' ||
      userDetails.address === ''
    )
      setCanSubmit(false);
    else setCanSubmit(true);
  };

  const handleSubmit = async () => {
    console.log('adf');
    console.log(userDetails);
  };

  return (

    <Grid container>
  <Grid item xs={6}>
  <Stack
      onSubmit={handleSubmit}
      sx={{
        alignItems: 'center',
        py: 4
      }}
      spacing={2}
    >
      <TextField
        className="standard-basic"
        label="First Name"
        required={true}
        onChange={(e) => handleChange(e, 'firstName')}
        value={userDetails.firstName}
      />
      <TextField
        className="standard-basic"
        label="Middle Name"
        value={userDetails.middleName}
        onChange={(e) => handleChange(e, 'middleName')}
      />
      <TextField
        className="standard-basic"
        label="Last Name"
        required={true}
        value={userDetails.lastName}
        onChange={(e) => handleChange(e, 'lastName')}
      />
     
      <TextField
        className="standard-basic"
        label="Citizenship Certificate Issued District"
        required={true}
        onChange={(e) =>
          handleChange(e, 'citizenshipCertificateIssuedDistrict')
        }
        value={userDetails.citizenshipCertificateIssuedDistrict}
      />
      <TextField
        className="standard-basic"
        label="Address"
        required={true}
        onChange={(e) => handleChange(e, 'address')}
        value={userDetails.address}
      />
      
    </Stack>
  </Grid>
  <Grid item xs={6}>
    <Stack  spacing={2}
    sx={{
      alignItems: 'center',
      py: 4
    }}
    >
  <TextField
        className="standard-basic"
        label="Phone Number"
        required={true}
        type="number"
        value={userDetails.phoneNumber}
        onChange={(e) => handleChange(e, 'phoneNumber')}
      />
      <TextField
        className="standard-basic"
        label="Password"
        type="password"
        required={true}
        onChange={(e) => handleChange(e, 'password')}
        value={userDetails.password}
      />
      <TextField
        className="standard-basic"
        label="Confirm Password"
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
             <Button color="primary" variant="contained" sx={{width: 350}}>Register</Button>

      </Stack>
  </Grid>
</Grid>
    
  );
};

export default RegistrationRequestForm;
