import React from 'react';

import '../css/catalog.css';

class Catalog extends React.Component {
    constructor() {
        super();

        this.slideNextPrev = this.slideNextPrev.bind(this);
    }

    slideNextPrev(event) {
        const btn = event.target == 'SPAN' ? event.target.closest('button') : event.target;
        const dir = !btn.dataset.dir ? 'next' : btn.dataset.dir;

        const products_container = document.querySelectorAll('.catalog_products_list')[0];
        const products_container_width = products_container.offsetWidth;

        const products_list = products_container.querySelectorAll('li');

        const product_first = products_list[0];
        const product_first_styles = window.getComputedStyle(product_first);

        let product_first_width = product_first.offsetWidth;
        let product_first_ml = product_first_styles.getPropertyValue('margin-left');
        let product_first_mr = product_first_styles.getPropertyValue('margin-right');

        if (product_first_mr) {
            product_first_mr = parseInt(product_first_mr);
            product_first_width = product_first_width + product_first_mr;
        }

        if (product_first_ml) {
            product_first_ml = Math.abs(parseInt(product_first_ml));
        }

        let ml = 0;
        const stopPoint = (products_list.length * product_first_width) - (Math.ceil(products_container_width / product_first_width) * product_first_width);

        if (product_first_ml < (stopPoint + product_first_width)) ml = product_first_ml + product_first_width * (dir == 'prev' ? -1 : 1);

        product_first.style.marginLeft = `-${ml}px`;
    }

    render() {
        return (
            <div className="catalog">
                <div className="catalog_header">
                    <div className="catalog_filters">
                        <div className="catalog_filter_name">Best Sellers</div>
                        <div className="catalog_filter_option">
                            <button className="catalog_filter_option_btn">
                                <span className="ico_filter"></span>
                            </button>
                        </div>
                    </div>
                    <div className="catalog_nav">
                        <button data-dir="prev" onClick={this.slideNextPrev} className="catalog_nav_btn_prev"><span className="ico_arrow"></span></button>
                        <button data-dir="next" onClick={this.slideNextPrev} className="catalog_nav_btn_next"><span className="ico_arrow"></span></button>
                    </div>
                </div>
                <div className="catalog_products">
                    <ul className="catalog_products_list">
                        <li className="product">
                            <div className="product_image">
                                <img src="https://via.placeholder.com/150x200" />
                            </div>
                            <div className="product_caption">
                                <div className="product_name">Face Mask 1</div>
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
                                <div className="product_name">Face Mask 2</div>
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
                                <div className="product_name">Face Mask 3</div>
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
                                <div className="product_name">Face Mask 4</div>
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
                                <div className="product_name">Face Mask 5</div>
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
                                <div className="product_name">Face Mask 6</div>
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
                                <div className="product_name">Face Mask 7</div>
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
                                <div className="product_name">Face Mask 8</div>
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
                                <div className="product_name">Face Mask 9</div>
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