import React from 'react'
import { Slide } from "react-awesome-reveal";
import Link from 'next/link'
import shape1 from '/public/images/footer-shape-1.svg'
import shape2 from '/public/images/footer-shape-2.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className={`wpo-site-footer ${props.footerClass}`}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Links</h3>
                                </div>
                                <div className="link-wrap">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} href="/service">Services</Link></li>
                                        <li><Link onClick={ClickHandler} href="/rsvp">RSVP</Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                                        <li><Link onClick={ClickHandler} href="/">Get Quote</Link></li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className='logo' onClick={ClickHandler} href="/">Habibi</Link>
                                </div>
                                <p>We can’t wait to see all of our beloved friends
                                    and relative s at our wedding.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <p>Habibi@wpoceans.com</p>
                                    <p>4517 Washington Ave. Manchester,
                                        Kentucky 39495</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; Copyright 2023 | <Link onClick={ClickHandler} href="/">Habibi</Link> | All right
                                reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft-shape-1">
                <Slide direction="left" duration="1000" triggerOnce="true">
                    <Image src={shape1} alt="" />
                </Slide>
            </div>
            <div className="ft-shape-2">
            <Slide direction="right" duration="1200" triggerOnce="true">
                    <Image src={shape2} alt="" />
                </Slide>
            </div>
        </footer>
    )
}

export default Footer;