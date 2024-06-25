import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../feature/checkout-slice";

export default function AddressForm() {
  const address = useSelector((state) => state.checkout?.address);
  const dispatch = useDispatch();
  function handleChange(event) {
    console.dir(event.target);
    const { name, value } = event.target ?? {};
    console.log(name, value);
    dispatch(updateAddress({ [name]: value }));
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Box component="form" onChange={handleChange}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              defaultValue={address.firstName ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              defaultValue={address.lastName ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address Line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              defaultValue={address.address1 ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address2"
              name="address2"
              label="Address Line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              defaultValue={address.address2 ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              defaultValue={address.city ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="zipCode"
              name="zipCode"
              label="Pin Code/Postal Code"
              fullWidth
              variant="standard"
              defaultValue={address.zipCode ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              variant="standard"
              defaultValue={address.country ?? ""}
            ></TextField>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
