import React from 'react'
import Navbar from '../common/Navbar'
import Search from '../common/Search'


export default function Layout() {
  return (
    <>
<div className="header">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <Navbar />
            <Search />
            </div>
        </div>
    </div>
</div>
    </>
  )
}
