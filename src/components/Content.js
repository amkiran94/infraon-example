import React from "react"
import illustrator from '../assets/images/illustrator-15.png'
import Products from './subcomponents/Products';
import Cards_Cust from './subcomponents/Cards_Cust';
import Key_Cust from './subcomponents/Key_Cust';

const Content = () => {
    return (
        <div class="main-content-wrap">
            <section id="intro-wrap" class="intro1Wrap cust-padding-inf text-left">
                <div class="container">
                    <div class="row banner-vh">
                        <div class="col-md-6 intro1LeftSection h-100 d-flex justify-content-center flex-column top-padding">
                            <h1 class="font-weight-bold text-42 mb-3">Powerful products to <br />accelerate efficiency and <br />productivity
                            </h1>
                            <p class="text-20 mb-4">Both tools are “On-Premise” offerings, ensuring that you can be confident to local ownership of your data which can be run on machines in your facility, with no third-party access. </p>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7  pt-2 mb-2 text-left pl-0 mb-2">
                                <a href="best-remote-desktop-software-secura.html" class="btn half-button btn-warning float-left"><span class="link-log">Get Infraon SecuRa Free Version</span></a>
                            </div>
                        </div>
                        <div class="col-md-6 intro1RightSection d-flex align-items-center">
                            <div class="intro1ProductImage">
                                <img src={illustrator} class="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Products />
            <Cards_Cust />
            <Key_Cust />
        </div>
    )
}


export default Content