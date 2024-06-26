import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-star-rating-component";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/R.jpeg";
import watch2 from "../images/watch-01.jpg";
import addtocart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname == "/product_store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to=":id"
          // to={`${
          //   location.pathname == "/"
          //     ? "/product/:id"
          //     : location.pathname == "/product/:id"
          //     ? "/product/:id"
          //     : ":id"
          // }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishist" />
            </button>
          </div>
          <div className="product-image d-flex flex-column">
            <img src={watch} className="img-fluid" alt="product img" />
            <img src={watch2} className="img-fluid" alt="product img" />
          </div>
          <div className="product-details">
            <h6 className="brand"> Havels </h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              perferendis hic natus quae aspernatur sapiente eius labore sunt
              corporis tenetur ea ratione, ipsa ab dolorem voluptatum facilis?
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                {" "}
                <img src={addtocart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname == "/product_store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to=":id"
          // to={`${
          //   location.pathname == "/"
          //     ? "/product/:id"
          //     : location.pathname == "/product/:id"
          //     ? "/product/:id"
          //     : ":id"
          // }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishist" />
            </button>
          </div>
          <div className="product-image d-flex flex-column">
            <img src={watch1} className="img-fluid" alt="product img" />
            <img src={watch} className="img-fluid" alt="product img" />
          </div>
          <div className="product-details">
            <h6 className="brand"> Havels </h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              perferendis hic natus quae aspernatur sapiente eius labore sunt
              corporis tenetur ea ratione, ipsa ab dolorem voluptatum facilis?
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addtocart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
