import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext';
import Wish from '../common/Wish';
import AddCart from '../common/addCart';

export default function Details() {
    const { id } = useParams();
    // console.log('Product ID:', id);
    const { totalData} = useProductContext();

    const selectedProduct = totalData.find((product) => product.id === id);

    if (!selectedProduct) {
        return <div>Product not found</div>;
    }
    const { name, price, img, description, availability, shipping, weight } = selectedProduct;

    return (
        <>
            <section className="product-details spad">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__item">
                                    <img
                                        className="product__details__pic__item--large"
                                        src={`/img/featured/${img}`}

                                        alt=""
                                    />
                                </div>
                                {/* <div className="product__details__pic__slider owl-carousel">
            <img
              data-imgbigurl="img/product/details/product-details-2.jpg"
              src="img/product/details/thumb-1.jpg"
              alt=""
            />
            <img
              data-imgbigurl="img/product/details/product-details-3.jpg"
              src="img/product/details/thumb-2.jpg"
              alt=""
            />
            <img
              data-imgbigurl="img/product/details/product-details-5.jpg"
              src="img/product/details/thumb-3.jpg"
              alt=""
            />
            <img
              data-imgbigurl="img/product/details/product-details-4.jpg"
              src="img/product/details/thumb-4.jpg"
              alt=""
            />
          </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="product__details__text">
                                <h3>{name}</h3>
                                {/* <div className="product__details__rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-o" />
            <span>(18 reviews)</span>
          </div> */}
                                <div className="product__details__price">{price}</div>
                                <p>
                                {description}
                                </p>
                                <div className="product__details__quantity">
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <input type="text" defaultValue={1} />
                                        </div>
                                    </div>
                                </div>
                                <AddCart/>
                                {/* wishlist button  */}
                                <Wish/>
                                <ul>
                                    <li>
                                        <b>Availability</b> <span>{availability}</span>
                                    </li>
                                    <li>
                                        <b>Shipping</b>{" "}
                                        <span>
                                           {shipping}
                                        </span>
                                    </li>
                                    <li>
                                        <b>Weight</b> <span>{weight}</span>
                                    </li>
                                    {/* <li>
              <b>Share on</b>
              <div className="share">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest" />
                </a>
              </div>
            </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-toggle="tab"
                                            href="#tabs-1"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            Description
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#tabs-2"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Information
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#tabs-3"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Reviews <span>(1)</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div className="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>
                                               {description}
                                            </p>

                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <div className="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>
                                            {description}
                                            </p>

                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <div className="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>
                                            {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
