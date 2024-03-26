import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog1404" />
        </div>
        <div className="blog-content">
          <p className="date">1 JAN, 2024</p>
          <h5 className="title">A beautiful morning renaissance</h5>
          <p className="desc">
            The app features an intuitive and user-friendly interface designed
            to provide a seamless shopping experience.
          </p>
          <Link to="" className="button">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
