import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (

        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home-2">Habibi</Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link href="/home-2">Home</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/home">Wedding Home 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-2">Wedding Home 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-3">Announcement Home 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-4">Announcement Home 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-5">Muslim Wedding Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-6">Asian Wedding Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-rtl">Muslim Wedding Home(RTL)</Link></li>
                                                <li><Link onClick={ClickHandler} href="/invitation-1">Wedding Invitation 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/invitation-2">Wedding Invitation 2</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Event Planner Homes</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/home-7">Wedding Planner 1</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/home-8">Wedding Planner 2</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/home-9">Wedding Planner 3</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Wedding Shop Homes</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/shop-home">Bridal Shop</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/shop-home-2">Wedding Bouquet Shop</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/shop-home-video-bg">Bouquet Shop Video Bg</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/shop-home-3">Wedding Cake Shop</Link></li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </li>

                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/portfolio-masonary-s2">Our Story</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/invitation-1">Invitation</Link>
                                        </li>                                       
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/blog">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/Top-10-wedding">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Top-10-wedding">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Top-10-wedding">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { removeFromCart })(Header);