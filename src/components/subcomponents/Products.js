import React from "react"
import group_5 from './../../assets/images/group-5.png'
import infraon_SecuRA_Monochrome from './../../assets/images/infraon_SecuRA_Monochrome_txt.svg'
import group_6 from './../../assets/images/group-6.png'


const Products = () => {
    return (
            <section id="features-wrap" class="features_wrap mt-5 p-t-80">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 section-header mb-5">
                            <h2 class="Rectangle">Products</h2>
                            <h2 class="font-weight-bold text-42">The Infraon Suite – hike efficiency <br />and business success</h2>
                            <h5 class="text-p">Products that bolster your IT Infra, Networks and Service Delivery</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div data-aos="fade-right" class="col-md-6 col-sm-12 mb-lg-0 mb-md-0 mb-4">
                            <div id="secura" class="card text-left o-hidden card-height ">
                                <div class="row card_right_content p-3 cur-pointer">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                                                <a href="https://www.infraon.io/best-remote-desktop-software-secura.html"><img src={group_5} class="img-responsive Group-5" alt="" /></a>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                                                <a href="https://www.infraon.io/best-remote-desktop-software-secura.html">
                                                    <img src={infraon_SecuRA_Monochrome} class="img-responsive LogoJustText" alt="" />
                                                    <h3 class="Standard">[On-premise]</h3></a>
                                                <p style={{ marginTop: "30px" }} class="A-Remote-Access-Aut">Zero Trust Remote Access Platform </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-lg-12 pt-2">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 text-left">
                                                <p class="mb-0"> <span class="dollar">$</span> <span class="num">20</span><span class="decimal">.00/</span><span class="mo">mo</span></p>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7  pt-2 mb-2 text-center mb-2">
                                                <a href="https://www.infraon.io/best-remote-desktop-software-secura.html" class="btn half-button btn-warning float-right"><span class="link-log">Get Free Version</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" class="col-md-6 col-sm-12 mb-lg-0 mb-md-0 mb-0">
                            <div id="assets" class="card text-left o-hidden card-height">

                                <div class="row card_right_content p-3 cur-pointer">
                                    <div class="col-md-12 col-lg-12 pt-0 pb-0">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                                                <a href="https://www.infraon.io/asset-management-software.html"><img src={group_6} class="img-responsive Group-5" alt="" /></a>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                                                <a href="https://www.infraon.io/asset-management-software.html"><img src={infraon_SecuRA_Monochrome} class="img-responsive LogoJustText" alt="" />
                                                    <h3 class="Standard">[On-premise]</h3></a>
                                                <p style={{ marginTop: "30px" }} class="A-Remote-Access-Aut">Take charge of the Asset Lifecycle and Expense</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-lg-12 pt-2 pb-0">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 text-left">
                                                <p class="mb-0"> <span class="dollar">$</span> <span class="num">19</span><span class="decimal">.00/</span><span class="mo">mo</span></p>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7  pt-2 mb-2 text-center mb-2">
                                                <a href="https://www.infraon.io/asset-management-software.html" class="btn half-button btn-warning float-right"><span class="link-log">Coming Soon</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    )
}


export default Products