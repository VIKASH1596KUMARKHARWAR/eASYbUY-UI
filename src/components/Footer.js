import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data  d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsLetter" />
                <h2 className="mb-0 text-white"> sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group  mb-1">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email address"
                  aria-label="Your Email address"
                  aria-describedby="basic-addon2"
                ></input>
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 277 Leitan, <br />
                  NIT Mizoram Boy's Hostel <br /> Aizwal, Mizoram <br />
                  PinCode:765019
                </address>
                <a
                  href="tel:+91 9936738846"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +91 9936738846
                </a>
                <a
                  href="mailto:vikashfsd68@gmail.com"
                  className="mt-4 d-block mb-2 text-white"
                >
                  vikashfsd68@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Infromation</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link to="shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="term-and-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Shipping Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">AboutUs</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links </h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()};Powered by Vikash the fds
                LEARNER
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
