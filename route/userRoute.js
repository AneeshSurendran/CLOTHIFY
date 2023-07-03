const express = require("express");
const user_route = express();
const session = require("express-session");
const config = require("../config/config");
const cartController=require("../controller/cartController");
const userController = require("../controller/userController");
const auth = require("../middleware/auth");
const wishlistController = require("../controller/wishlistController");
const errorHandler = require('../middleware/errorHandler');


require('dotenv').config();

user_route.use(
    session({
      secret: process.env.SESSIONKEY,
      resave: false,
      saveUninitialized: true,
    })
  );



user_route.set("views", "views/users");

user_route.get("/",userController.loadHome)

user_route.get("/loadShop",userController.loadShop);

user_route.get("/login",auth.isLogout,userController.loginLoad);

user_route.get("/register",userController.loadRegister);

user_route.post("/register", userController.loadOtp);

user_route.get("/loadCart",cartController.loadCart);

user_route.get("/addToCart",cartController.addToCart);

user_route.get("/viewDetails",userController.loadDetails);

user_route.post("/login", userController.verifyLogin);

user_route.post("/otpPage", userController.verifyOtp);

user_route.use(auth.isLogin);

user_route.get("/logout",userController.userLogout);

user_route.get("/userProfile",userController.loadUserProfile);

user_route.get('/deleteCart',cartController.deleteCart);

user_route.post("/updateCart",cartController.updateCart);

user_route.get("/loadCheckout",userController.loadCheckout);

user_route.get("/loadWishlist",wishlistController.loadWishlist);

user_route.get("/loadCheckout",userController.loadCheckout);

user_route.post("/applyCoupon",userController.applyCoupon);

user_route.post("/addAddress",userController.addNewAddress);

user_route.get("/deleteAddress",userController.deleteAddress);

user_route.get("/deleteAddressCart",userController.deleteAddressCart);

user_route.get("/editUser",userController.editUser);

user_route.post("/editUser",userController.editUserUpdate);

user_route.get("/editAddress",userController.editAddress);

user_route.post("/editAddress",userController.editUpdateAddress);

user_route.get("/editcheckoutAddress",userController.editCheckoutAddress);

user_route.post("/editcheckoutAddress",userController.editUpdateCheckoutAddress);

user_route.post("/orderSuccess",userController.placeOrder);

user_route.get("/cancelOrder",userController.cancelOrder);

user_route.get("/vieworder",userController.viewOrderDetails);

user_route.get("/onlinePayment",userController.loadOrderSuccess);

user_route.get("/addWishlist",wishlistController.addWishlist);

user_route.get("/addCartremoveWishlist",wishlistController.addToCartremovefromwishlist);

user_route.get("/deleteWishlist",wishlistController.deleteWishlist);

user_route.get("/returnOrder",userController.retunOrder);

user_route.get("/cancelReturnorder",userController.cancelReturnOrder);

user_route.use(errorHandler);



module.exports = user_route;