import React from 'react';

import '../css/catalog.css';

class Catalog extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="catalog">
                <div className="catalog_header">
                    <div className="catalog_filters">
                        <div className="catalog_filter_name">Best Sellers</div>
                        <div className="catalog_filter_option">
                            <button className="catalog_filter_option_btn"></button>
                        </div>
                    </div>
                    <div className="catalog_nav">
                        <button className="catalog_nav_btn_next"></button>
                        <button className="catalog_nav_btn_prev"></button>
                    </div>
                </div>
                <div className="catalog_products">
                    <ul className="catalog_products_list">
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask</div>
                                <div className="product_description">Grape Fruit</div>
                                <div className="product_price">
                                    <div className="product_price_value">$15.50</div>
                                    <button className="product_cart_btn">+</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Catalog;