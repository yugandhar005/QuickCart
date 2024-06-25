import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper, Step, StepLabel, Stepper, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/Auth";
import { useState } from "react";
import AddressForm from "../components/AddressForm";
import PaymentsForm from "../components/PaymentsForm";
import ReviewFrom from "../components/ReviewFrom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../feature/cart-slice";
import { clearCheckoutInformation } from "../feature/checkout-slice";
import { Link } from "react-router-dom";

const steps = ["Shipping Address" , "Payment Details" , "Review Order"];

function getStepContent(activeStep){
  switch(activeStep){
    case 0:
      return <AddressForm></AddressForm>
    case 1:
      return <PaymentsForm/>
    case 2:
      return <ReviewFrom></ReviewFrom>
    default:
      throw new Error("invalid step")
  }


}


export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if(activeStep === steps.length){
      dispatch(clearCart());
      dispatch(clearCheckoutInformation());

    }
  
    
  }, [activeStep])
  

  function handleNext(){
    setActiveStep(activeStep + 1);

  }
  function handleBack(){
    setActiveStep(activeStep - 1);

  }

  return (
    <Container component='section' maxWidth='lg' sx={{
      mb:4
    }}>

      <Paper variant='outlined' sx={{
        my: {xs: 3 , md: 6},
        p: { xs: 2 , md: 3}
      }}>
        <Typography component='h1' variant="h4" align="center" >
          CheckOut
        </Typography>
        <Stepper activeStep={activeStep} sx={{
          pt: 3 , 
          pb: 5
        }}>
          {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step> ))}
        </Stepper>
        {activeStep === steps.length ? <>
          <Typography variant="h5" gutterBottom>
            Thank you for your order. A confirmation email will be sent to the provided address shortly.
          </Typography>
          <Typography>
            Your Order number is #18223
          </Typography>
          <Link to='/'>Shop More</Link>
        </> : <>
            {getStepContent(activeStep)}
            <Box sx={{
              display:'flex',justifyContent:'flex-end'
            }}>

              {activeStep !== 0 && (<Button sx={{
                mt: 3,
                ml: 1
              }} onClick={handleBack} variant='contained'>Back</Button>)}
              <Button sx={{
                mt: 3,
                ml: 1
              }}onClick={handleNext} variant='contained'>{activeStep === steps.length-1 ? "Place Order" : "Next" }</Button>


            </Box>
            <Button></Button>
        
        
        </>}

      </Paper>


    </Container>
  )
}
