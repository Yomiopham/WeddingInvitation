import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Link from "next/link";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { removeFromWishList, addToCart } from "../../store/actions/action";

const WishlistPage = (props) => {
  const { wishs } = props;


  return (
    <Fragment>
      <Navbar hclass={'wpo-header-style-3'}/>
      <PageTitle pageTitle={"Wishlist"} pagesub={"Wishlist"} />
      <div className="cart-area section-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="images images-b">Image</th>
                          <th className="product-2">Product Name</th>
                          <th className="ptice">Price</th>
                          <th className="pr">Stock Status</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishs &&
                          wishs.length > 0 &&
                          wishs.map((wish, crt) => (
                            <tr key={crt}>
                              <td className="images">
                                <img src={wish.proImg} alt="" />
                              </td>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">{wish.title} </li>
                                  <li>Brand : {wish.brand}</li>
                                  <li>Size : {wish.size}</li>
                                </ul>
                              </td>
                              <td className="ptice">${wish.price}</td>
                              <td className="stock">{wish.stock}</td>
                              <td className="action">
                                <ul>
                                  <li className="c-btn">
                                    <Link href="/cart" className="c-btn">
                                      <i className="fi flaticon-shopping-cart"></i>
                                    </Link>
                                  </li>
                                  <li className="w-btn">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        props.removeFromWishList(wish.id)
                                      }
                                    >
                                      <i className="fi ti-trash"></i>
                                    </button>{" "}
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer footerClass={'wpo-site-footer-s2'}/>
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    wishs: state.wishList.w_list,
  };
};
export default connect(mapStateToProps, { removeFromWishList, addToCart })(
  WishlistPage
);
