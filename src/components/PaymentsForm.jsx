import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment } from "../feature/checkout-slice";

export default function PaymentsForm() {
  const payment = useSelector((state) => state.checkout.payment);
  const dispatch = useDispatch();
  function handleChange(event) {
    const { name, value } = event.target ?? {};
    dispatch(updatePayment({ [name]: value }));
  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>

      <Box component="form" onChange={handleChange}>
        <Grid container spacing={3}>
          <Grid item sx={12} md={6}>
            <TextField
              variant="standard"
              required
              label="Name on Card"
              fullWidth
              autoComplete="cc-name"
              name="name"
              id="name"
              defaultValue={payment?.name ?? ""}
            ></TextField>
          </Grid>
          <Grid item sx={12} md={6}>
            <TextField
              variant="standard"
              required
              label="Card Number"
              fullWidth
              autoComplete="cc-name"
              name="cardNumber"
              id="cardNumber"
              defaultValue={payment?.cardNumber ?? ""}

            ></TextField>
          </Grid>
          <Grid item sx={12} md={6}>
            <TextField
              variant="standard"
              required
              label="Expiry Date"
              fullWidth
              autoComplete="cc-exp"
              name="expDate"
              id="expDate"
              defaultValue={payment?.expDate ?? ""}

            ></TextField>
          </Grid>
          <Grid item sx={12} md={6}>
            <TextField
              variant="standard"
              required
              label="CVV"
              fullWidth
              type="password"
              autoComplete="cc-csc"
              name="cvv"
              id="cvv"
              defaultValue={payment?.cvv ?? ""}

            ></TextField>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
