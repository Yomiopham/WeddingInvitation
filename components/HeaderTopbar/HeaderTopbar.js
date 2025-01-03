import React from 'react'
import Link from 'next/link'


const HeaderTopbar = (props) => {

    return (
        <section className="topbar">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-7 col-md-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-phone-call"></i> (307) 555-0133</li>
                                <li><i className="fi flaticon-email"></i>demo.Habibi@gmail.com</li>
                                <li><i className="fi flaticon-maps-and-flags"></i> 244 Royal Ln. Mesa, New Jersey 463</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link href="/"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                                <li><Link href="/"><i className="fi flaticon-twitter"></i></Link></li>
                                <li><Link href="/"><i className="fi flaticon-linkedin"></i></Link></li>
                                <li><Link href="/"><i className="fi flaticon-instagram-1"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTopbar;