import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

export default function Botnav() {
  const {CartBtn, cartNumber, wishNumber} = useProductContext();
  return (
    <>
      <div className="bot_head">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/">
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="">Pages</Link>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to="">Shop Details</Link>
                      </li>
                      <li>
                        <Link to="">Shoping Cart</Link>
                      </li>
                      <li>
                        <Link to="">Check Out</Link>
                      </li>
                      <li>
                        <Link to="">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="">Blog</Link>
                  </li>
                  <li>
                    <Link to="">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <Link to="">
                      <i className="fa fa-heart" /> <span>{wishNumber}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/CartPage" onClick={CartBtn}>
                      <i className="fa fa-shopping-bag" /> <span>{cartNumber}</span>
                    </Link>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </div>
    </>
  )
}
