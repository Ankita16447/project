import React from "react";

import NextArrow from "../components/carousel/nextArrow";
import PrevArrow from "../components/carousel/prevArrow";
import Slider from "react-slick";
import { useState } from "react";
import Products from "../components/Products";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./shop.css";
const shop_items = [
  {
    id: 1,
    cover:
      "https://assets.ajio.com/cms/AJIO/WEB/03072023-mhp-d-main-p5-gas-gap-upto50.jpg",
  },
  {
    id: 2,
    cover:
      "https://assets.ajio.com/cms/AJIO/WEB/03072023-mhp-d-top-p1-superdry-gant-upto50.jpg",
  },
  {
    id: 3,
    cover:
      "https://assets.ajio.com/cms/AJIO/WEB/05072023-UHP-D-MAIN-P2-Axsuperdry-upto50.jpg",
  },
];
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const Shop = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="top-brands  max-width">
      <div className="collection-title"> Top brands for you</div>
      <Slider {...settings}>
        {shop_items.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover ">
                <img src={brand.cover} className="top-brands-image" />
                <Products products={products} />
              </div>
              
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Shop;
