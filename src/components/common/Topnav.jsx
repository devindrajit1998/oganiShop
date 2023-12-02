import React from 'react'

export default function Topnav() {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li>
                                        <i className="fa fa-envelope" /> hello@colorlib.com
                                    </li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="!#">
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                    <a href="!#">
                                        <i className="fa-brands fa-twitter" />
                                    </a>
                                </div>

                                <div className="header__top__right__auth">
                                    <a href="!#">
                                        <i className="fa fa-user" /> Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
