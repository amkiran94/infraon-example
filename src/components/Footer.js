import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTwitter , } from '@fortawesome/free-brands-svg-icons'
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons'
import {  faLinkedin , } from '@fortawesome/free-brands-svg-icons'
import goodfirm_review from '../assets/images/goodfirm-review.webp'
import infraon_SecuRA_Monochrome from '../assets/images/infraon_Logo_Monochrome.svg'

const Footer = () => {
    return (
        <div>
            <section class="footer_wrap">
                <h2 style={{ display: "none" }} >footer</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 mb-0" style={{ borderRight: "1px solid #d0d0d0", borderBottom: "1px solid #d0d0d0" }}>
                            <div class="o-hidden text-left">
                                <div class="">
                                    <img src={infraon_SecuRA_Monochrome} class="img-responsive"/>
                                    <p class="footer-add px-0">Infraon suite of products caters to IT, Access, Processes, Services and Compliance.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-2 mb-0 mt-4" style={{ borderBottom: "1px solid #d0d0d0" }}>
                            <div class="o-hidden text-left">
                                <div class="">
                                    <h4 class="card-title font-weight-bold">Products</h4>
                                    <div class="mb-5 lead">
                                        <ul class="list-inline">

                                            <li class="mb-2">
                                                <a href="asset-management-software.html" target="_self">
                                                    Infraon Assets
                                                </a>

                                            </li>
                                            <li class="mb-2">
                                                <a href="best-remote-desktop-software-secura.html" target="_self">
                                                    Infraon SecuRA
                                                </a>
                                            </li>
                                            <li class="mb-2">
                                                <a href="it-service-management.html" target="_self">Infraon Desk</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-2 mb-0 mb-lg-0 mb-md-0 pr-0 mt-4" style={{ borderBottom: "1px solid #d0d0d0" }}>
                            <div class="o-hidden text-left">

                                <div class="">
                                    <h4 class="card-title font-weight-bold">Other Infraon</h4>
                                    <div class="mb-5 lead">
                                        <ul class="list-inline">
                                            <li class="mb-2">
                                                <a href="https://www.everestims.com/infraon-ims" target="_blank">Infraon AIOps</a>
                                            </li>
                                            <li class="mb-2">
                                                <a href="https://www.everestims.com/infraon-nccm" target="_blank">Infraon NCCM</a>
                                            </li>
                                            <li class="mb-2">
                                                <a href=" https://www.everestims.com/infraon-oss-suite" target="_blank"> Infraon UNMS/OSS</a>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-md-2 mb-lg-0 mb-md-0 mt-4" style={{ borderBottom: "1px solid #d0d0d0" }}>
                            <div class="o-hidden text-left">

                                <div class="">
                                    <h4 class="card-title font-weight-bold">Resources</h4>
                                    <div class="address-wrap mb-3">

                                        <ul class="list-group list-unstyled">
                                            <li class="mb-2">

                                                <a href="SuccessStories.html" target="_self">
                                                    Success Stories
                                                </a>
                                            </li>
                                            <li class="mb-2">

                                                <a href="UsecaseVideos.html" target="_self">
                                                    Videos
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 mb-lg-0 mb-md-0 mt-4" style={{ borderBottom: "1px solid #d0d0d0" }}>
                            <div class="o-hidden text-left">

                                <div class="">
                                    <h4 class="card-title font-weight-bold">Support</h4>
                                    <div class="address-wrap mb-3">

                                        <ul class="list-group list-unstyled">
                                            <li class="mb-2">
                                                <a href="help&support.html" target="_self">
                                                    Help & Support
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 class="card-title font-weight-bold">Review Us On</h4>
                                    <div class="address-wrap mb-3">
                                        <ul class="list-group list-unstyled">
                                            <li class="mb-2">
                                                <a href="https://www.goodfirms.co/software/infraon-assets" target="_blank">
                                                    <img src={goodfirm_review} class="img-responsive" alt="" /> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 mb-lg-0 mb-md-0 mt-4" style={{ borderBottom: "1px solid #d0d0d0" }}>
                            <div class="o-hidden text-left">

                                <div class="">
                                    <h4 class="card-title font-weight-bold">Company</h4>
                                    <div class="address-wrap mb-3">

                                        <ul class="list-group list-unstyled">
                                            <li class="mb-2">
                                                <a href="PrivacyPolicy.html" target="_self">
                                                    Privacy Policy
                                                </a>

                                            </li>
                                            <li class="mb-2">
                                                <a href="TermsOfUse.html" target="_self">
                                                    Terms of Use
                                                </a>

                                            </li>
                                            <li class="mb-2 ">
                                                <a href="ContactUs.html" target="_self ">
                                                    Contact Us
                                                </a>

                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="footer_wrap">
                <h2 style={{ display: "none"}}>footer</h2>
                <div class="container">
                    <div class="col-md-12 col-lg-12">
                        <div class="row">
                            <div class="col-md-3 col-lg-3">
                                <div class="col-md-12 col-lg-12">
                                    <div class="row">
                                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3 pl-0">
                                            <a class=" text-20 facebook ml-0 social-link" href="https://twitter.com/everest_ims" target="_blank">
                                            <FontAwesomeIcon icon={faTwitter} /></a>
                                        </div>
                                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3  pl-0">
                                            <a class="text-20 twitter social-link" href="https://www.facebook.com/EverestIMS" target="_blank"> <FontAwesomeIcon icon={faFacebookF} /></a>
                                        </div>
                                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3  pl-0">
                                            <a class=" text-20 google social-link" href=" https://www.linkedin.com/company/everestims" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 col-lg-9">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6">
                                        <p class="copyright-Everes">© Infraon Corp. All rights reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer