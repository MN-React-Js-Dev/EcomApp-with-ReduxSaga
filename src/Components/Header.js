import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

// const cartIteamsData = JSON.parse(localStorage.getItem("cartItems"));
const Header = ({ handleAllProductsButton, handleFeatureProductsButton }) => {
  const cartIteams = useSelector((state) => state?.data?.cartItems);
  return (
    <>
      <div className="cst-navbar-img">
        <nav class="navbar navbar-expand-lg sticky-lg-top">
          <div class="container-fluid">
            <a class="navbar-brand cst-navbar-brand" href="#">
              <span>RIGHT</span><span className="text-white">FIT.COM</span>
            </a>
            <button
              class="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
              <div class="d-flex" role="search">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li class="nav-item">
                    <a
                      class="nav-link active all-product"
                      aria-current="page"
                      href="#"
                      onClick={handleAllProductsButton}
                    >
                      All Products
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link feature-products" href="#" onClick={handleFeatureProductsButton}>
                      Feature Products
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link feature-products" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
                      <AiOutlineShoppingCart />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link feature-products" href="#">
                      {cartIteams !== undefined ? cartIteams.length : ""}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="container pt-5 pb-5">
          <h1 className="text-white latest-style">Latest Styles</h1>
          <h3 className="text-white yesrday-price">At Yesterday’s Prices</h3>
          <button className="browse-all-style p-2">BROWSE ALL STYLES</button>
        </div>
      </div>
    </>
  );
};

export default Header;
