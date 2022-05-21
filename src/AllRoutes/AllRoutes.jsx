import { Payment } from "@mui/icons-material"
import { Route, Routes } from "react-router-dom"
import { Cart } from "../Components/Home/Cart"
import { Home } from "../Components/Home/Home"
import { Paymenform } from "../Components/Home/Paymentform"
import { ShirtDetails } from "../Components/ProductDetails/Shirt"
import { TshirtDetails } from "../Components/ProductDetails/Tshirt"
import { Shirt } from "../Components/Products/Shirt"
import { Tshirt } from "../Components/Products/Tshirt"
import {PaymentSuccessful} from "../Components/Home/PaymentSuccessful"

export const AllRoutes = () => {
    return (
       <Routes>
       <Route path="/" element = {<Home/>}/>
      <Route path="/tshirt" element = {<Tshirt/>}/>
       <Route path="/shirt" element= {<Shirt/>}/>
      <Route path="/tshirtdetails/:id" element={<TshirtDetails/>}/>
       <Route path="/shirtdetails/:id" element = {<ShirtDetails/>}/>

       <Route path="/cart" element = {<Cart/>}/>
       <Route path="/payment" element= {<Paymenform/>}/>
       <Route path = "/paymentsuccessful" element = {<PaymentSuccessful/>}/>



       
       
       </Routes>
    )
}