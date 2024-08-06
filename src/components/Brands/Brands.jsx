import React from "react";
import "./Brands.css";
// import brand data
import { brandsData } from "../../data/data";

export default function Brands() {
  return (
    <div className="brands">
      <div className="container brands-container">
        {brandsData.map(({ img }, index) => {
          return (
            <div key={index} className="brand">
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
