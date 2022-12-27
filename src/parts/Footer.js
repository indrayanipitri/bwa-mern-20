import React from "react";
import IconText from "./IconText";
import Button from "elements/Buttons";

export default function Footer() {
    return(
       <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto  column-brand" >
                        <IconText />
                        <p className="brand-tagline">
                            We keboon your beaty holiday instantly and memorable
                        </p>
                    </div>
                    <div className="col-lg-2  col-md-2  col-sm-12 mr-5">
                        <h6 className="mt-2">
                            For Beinners
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-2 col-md-2 col-sm-12 mr-5">
                        <h6 className="mt-2">
                            Explore Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/career">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-12">
                        <h6 className="mt-2">
                            Connect Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:indrayanipitri@gmail.com">
                                    indrayani
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="+622122081996">
                                    021 - 0401 - 1995
                                </Button>
                            </li >
                        </ul>
                    </div>
                </div>
                <div className="row">
                <span className=" col text-center copyrights">
                                Coppyrights 2022 * All rights reserved * Staycation
                </span>
                </div>
                
            </div>
       </footer>
    )
}