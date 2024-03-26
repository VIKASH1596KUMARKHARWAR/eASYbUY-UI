import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OurStore from "./Pages/OurStore";
import Blog from "./Pages/Blog";
import CompareProduct from "./Pages/CompareProduct";
import Wishlist from "./Pages/wishlist";
import Login from "./Pages/Login";
import Forgotpassword from "./Pages/ForgotPassword";

import SignUP from "./Pages/SignUP";
import Resetpassword from "./Pages/Resetpassword";
import SingleBlog from "./Pages/SingleBlog";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermAndConditions from "./Pages/TermAndCondition";
import ShippingPolicy from "./Pages/ShippingPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import SingleProduct from "./Pages/Singleproduct";
import Cart from "./Pages/Cart";
import Checkoutpage from "./Pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* The Home component will be rendered inside the Layout component */}
            <Route index element={<Home />} />
            {/* jis section ko  change  krna h usko index elemen t se trigger krte h  */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product_store" element={<OurStore />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="compare-products" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-the-password" element={<Forgotpassword />} />
            <Route path="signups" element={<SignUP />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            <Route path="term-and-conditions" element={<TermAndConditions />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="product_store/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkoutpage />} />

            {/* here we are givig the ourFile.js name JISS naam se EXPORT kra hain to which path we have to move */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
