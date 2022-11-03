import {
CardElement,
} from "@stripe/react-stripe-js";
import "./Checkout.css"

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {emptyCart} from "../../Redux/cart/action"
import { toast } from "react-toastify";


function CheckOutStripe() {

  const navigate = useNavigate();
   const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems);

 const cartTotal = cartItems.reduce((acc, el) => {
   return acc + el.cart * el.prize;
 }, 0);

  const cartAferDisc = cartTotal - (cartTotal / 100) * 5;

  const toPay = cartAferDisc + 30;

  const notify = () => toast.success(`Payment Successfull..! \nThank You..!`);
  

  const handleSubmit = async (event) => {
   
    event.preventDefault();
    notify()
    dispatch(emptyCart())
   
     setTimeout(()=>{
   navigate("/")
       },5000) 
 
  };
  
  

  return (
    <div>
      <form className="Checkout_card_details">
        <CardElement className="Checkout_cardElement" />
        <Button
          onClick={(e) => handleSubmit(e)}
         
          variant="contained"
          color="success"
          sx={{ margin: "20px", width: "90%", backgroundColor: "#47bf9c" }}
        >
          Submit
        </Button>
      </form>
     
    </div>
  );
}

export default CheckOutStripe;
