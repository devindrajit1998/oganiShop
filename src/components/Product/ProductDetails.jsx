import React from 'react'

import Layout from '../common/Layout';
import Head from '../common/Head';
import Details from './Details';

export default function ProductDetails() {



    return (
        <>
            <Layout />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Head title="Vegetable’s Package" home="Home" category="category" />
                        </div>
                        <div className="col-md-12 my-5">
                            <Details />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
