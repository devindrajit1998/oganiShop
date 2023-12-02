import React from "react";
import Layout from "../common/Layout";
import Sale from "./Sale";
import ProductGrid from "./ProductGrid";


export default function Shop() {


  return (
    <>
      <Layout />
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <h2 className="mb-3">Today's Sale</h2>
              <Sale />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <h2 className="mb-3 mt-5">Our Products</h2>
              <div className="row">
                <ProductGrid />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
