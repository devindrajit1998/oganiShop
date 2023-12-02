import React from 'react'
import Layout from '../common/Layout'
import Banner from './Banner'
import HomeSlider from './HomeSlider'
import Feature from './Feature'

export default function Home() {
    return (
        <>
            <Layout />
           <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <Banner/>
                    </div>
                    <div className="col-md-12 my-5">
                    <HomeSlider/>
                    </div>
                    <Feature/>
                </div>
            </div>
           </div>
        </>
    )
}
