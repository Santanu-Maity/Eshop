import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Main(props) {
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-between">
            <Navbar />
            {props.component}
            <Footer />
        </div>
    )
}
