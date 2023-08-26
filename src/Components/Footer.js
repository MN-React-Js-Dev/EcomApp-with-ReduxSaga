import React from 'react'
import FooterLogo from '../Images/footerlogo.png'
import PayemntImg from '../Images/payment.png'
const Footer = () => {
    return (
        <>
            <div class="mt-5 pt-5 pb-5 footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-xs-12 about-company">
                            <a class="navbar-brand cst-navbar-brand" href="#">
                                <span>RIGHT</span><span className="text-white">FIT.COM</span>
                            </a>
                            <ul class="mt-4 p-0">
                                <li><p><a href='#' className='text-white'>Home</a></p></li>
                                <li><p><a href='#' className='text-white'>All Product</a></p></li>
                                <li><p><a href='#' className='text-white'>Featured Products</a></p></li>
                                <li><p><a href='#' className='text-white'>Contact</a></p></li>
                                <li><p><a href='#' className='text-white'>About Us</a></p></li>
                            </ul>
                        </div>
                        <div class="col-lg-6 col-xs-12 links">
                            <p class="pr-5 mt-5 text-white">We are a registered E-Commerce seller and we support a variety of Local and International payment modes</p>
                            <p><img src={PayemntImg} className='img-fluid' /></p>

                        </div>
                        <div class="col-lg-3 col-xs-12 location">
                            <p className='mt-5'>Website protected by</p>
                            <p><img src={FooterLogo} className='img-fluid' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer