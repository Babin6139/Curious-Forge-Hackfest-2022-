import React, { useState } from 'react'
import {Button, FormControl, FormHelperText, OutlinedInput, Stack, Typography, useFormControl} from '@mui/material'
import { Box } from '@mui/system';

function MyFormHelperText() {
    const { focused } = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      if (focused) {
        return 'This field is being focused';
      }
  
      return 'Helper text';
    }, [focused]);
  
    return <FormHelperText sx={{color: '#5526E9'}}>{helperText}</FormHelperText>;
  }

const Transfer = () => {

    const [msg, setMsg] = useState('')
    const [walletId, setWalletId] = useState('')
    const [btnState, setBtnState] = useState('')
    const [token, setToken] = useState('')


    const handleOnClick = (event) => {
        event.preventDefault()
        if(!walletId.length || !token.length) {
            return window.alert("All the fields are required")
        }
        setBtnState('Transferring....')
        setTimeout(() => {
        setBtnState('')
        setMsg("Successfully Transferred!!!!")

        }, 3000)

    }
  return (
    <Box>

{msg && <Typography variant="h4" sx={{color: 'green', mt: 4, mx: 4}}>NFT successfully Transfered to Desired Wallet Address</Typography>}

    <Stack direction="row" spacing={4} sx={{
        p: 8
    }}>
        <FormControl sx={{ width: '400px', }}>
        <OutlinedInput placeholder="Please enter the NFT token"
            sx={{backgroundColor: "#fff"}} 
            value={token}
            onChange={e => setToken(e.currentTarget.value)}
            />
            

        </FormControl>
        <FormControl sx={{width: '400px'}}>
        <OutlinedInput placeholder="Please enter the wallet address"
            sx={{backgroundColor: "#fff"}} 
            value={walletId}
            onChange={e => setWalletId(e.currentTarget.value)}
            />
            <MyFormHelperText />
            </FormControl>
        <Button color="primary" variant="contained" sx={{height: 60}} onClick={handleOnClick}>{ btnState ? btnState:"Transfer"}</Button>

    </Stack>
    </Box>

  )
}

export default Transfer