import React, { useState } from 'react';
import Link from 'next/link'


const ShopProduct = ({ products, addToCartProduct, addToWishListProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [number, setCount] = useState(8);
  const [buttonActive, setButtonState] = useState(false);

  return (
    <section className="wpo-product-section section-padding">
      <div className="container">
        <div className="wpo-product-wrap">
          <div className="row">
            {products.length > 0 &&
              products.slice(0, number).map((product, pitem) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-12" key={pitem}>
                  <div className="wpo-product-item">
                    <div className="wpo-product-img">
                      <img src={product.proImg} alt="" />
                      <ul>
                        <li>
                          <button
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Add to Wishlist"
                            onClick={() => addToWishListProduct(product)}
                          >
                            <i className="fi flaticon-heart"></i>
                          </button>
                        </li>
                        <li>
                          <button
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Add to Cart"
                            onClick={() => addToCartProduct(product)}
                          >
                            Add To Cart
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="wpo-product-text">
                      <h3><Link onClick={ClickHandler} href={'/product-single/[slug]'} as={`/product-single/${product.slug}`}>{product.title}</Link></h3>
                      <ul>
                        <li>${product.delPrice}</li>
                        <li>${product.price}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className={`load-btn ${buttonActive ? "d-none" : ""}`}>
            <span onClick={() => setButtonState(!buttonActive)}>
              <button className="loadmore-btn theme-btn" onClick={() => setCount(number + number)}>Load More</button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProduct;
