import React from "react"
import blackbox_1 from './../../assets/images/blackbox-1.png'
import one_1 from './../../assets/images/1.png'
import fedbank from './../../assets/images/fedbank.png'
import irtc from './../../assets/images/irtc.png'
import paytm from './../../assets/images/paytm.png'
import Udaan from './../../assets/images/Udaan.png'
import Maxis from './../../assets/images/Maxis.png'
import uob from './../../assets/images/uob.png'
import eight_8 from './../../assets/images/8.png'
import four_4 from './../../assets/images/4.png'

const Key_Cust = () => {
    return (
        <section id="works-wrap" class="work-carousel-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 section-header text-center mb-5">
                        <h2 class="font-weight-bold text-42"> Key Customers</h2>
                    </div>
                </div>
                <div class="row equal-space">
                    <div class="col-md-2 mb-4">
                        <div class="intro1ProductImage text-center">
                            <img src={blackbox_1} class="img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 mb-4">
                        <div class="intro1ProductImage text-center">
                            <img src={one_1} class="img-responsive" alt="" />
                        </div>
                    </div>

                    <div class="col-md-2 mb-4">
                        <div class="intro1ProductImage text-center">
                            <img src={fedbank} class="img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 mb-4">
                        <div class="intro1ProductImage text-center">
                            <img src={irtc} class="img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 mb-4">
                        <div class="intro1ProductImage text-center">
                            <img src={paytm} class="img-responsive" alt="" />
                        </div>
                    </div>
                </div>
                <div class="row pt-4 mb-4 equal-space">
                    <div class="col-md-2 mb-4">
                        <div class="intro1ProductImage text-center">
                            <img src={Udaan} class="img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 mb-4 pt-3">
                        <div class="intro1ProductImage text-center">
                            <img src={Maxis} class="img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 mb-4 pt-2">
                        <div class="intro1ProductImage text-center">
                            <img src={uob} class="img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 mb-4">
                        <div class="intro1ProductImage text-center">
                            <img src={eight_8} class="img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 mb-4">
                        <div class="intro1ProductImage text-center">
                            <img src={four_4} class="img-responsive" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Key_Cust