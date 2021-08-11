import React from "react"
import icon_node from './../../assets/images/icon-node.svg'
import icon_remote from './../../assets/images/icon-remote.svg'
import icon_user from './../../assets/images/icon-user.svg'
import icon_client from './../../assets/images/icon-client.svg'


const Cards_Cust = () => {
    return (
        <section id="services-wrap" class="services-wrap services-wrap mt-5 p-t-80">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 section-header text-center mb-5">
                        <h2 class="font-weight-bold text-42">
                            Customers across the world trust us with <br /> their most crucial IT needs and outcomes
                        </h2>
                    </div>
                    <div data-aos="fade-up" class="service-wrap col-xs-12 col-sm-6 col-md-6 col-lg-3 col-sm-12">
                        <div class="card base o-hidden pt-0 pb-0 mb-3 Illustrator-03">
                            <div class="card-body px-0">
                                <img src={icon_node} class="img-responsive pos" alt="" />
                                <h3 class="font-weight-bold clients">500k+</h3>
                                <h4 class="clients-text pl-2">Node</h4>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" class="service-wrap col-xs-12 col-sm-6 col-md-6 col-lg-3 col-sm-12">
                        <div class="card base o-hidden pt-0 pb-0 mb-3 Illustrator-03">
                            <div class="card-body px-0">
                                <img src={icon_remote} class="img-responsive pos" alt="" />
                                <h3 class="font-weight-bold clients">30k+</h3>
                                <h4 class="clients-text pl-2">Users</h4>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" class="service-wrap col-xs-12 col-sm-6 col-md-6 col-lg-3 col-sm-12">
                        <div class="card base o-hidden pt-0 pb-0 mb-3 Illustrator-03">
                            <div class="card-body px-0">
                                <img src={icon_user} class="img-responsive pos" alt="" />
                                <h3 class="font-weight-bold clients">10k+</h3>
                                <h4 class="clients-text pl-2">Node</h4>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" class="service-wrap col-xs-12 col-sm-6 col-md-6 col-lg-3 col-sm-12">
                        <div class="card base o-hidden pt-0 pb-0 mb-3 Illustrator-03">
                            <div class="card-body px-0">
                                <img src={icon_client} class="img-responsive pos" alt="" />
                                <h3 class="font-weight-bold clients">150+</h3>
                                <h4 class="clients-text pl-2">Clients</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Cards_Cust