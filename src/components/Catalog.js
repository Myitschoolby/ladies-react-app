import React from 'react';

import '../css/catalog.css';

import Products from './Products.js';

class Catalog extends React.Component {
    constructor() {
        super();

        this.slideNextPrev = this.slideNextPrev.bind(this);
    }

    slideNextPrev(event) {
        const btn = event.target === 'SPAN' ? event.target.closest('button') : event.target;
        const dir = !btn.dataset.dir ? 'next' : btn.dataset.dir;

        const products_container = document.querySelectorAll('.catalog_products_list')[0];

        if (!products_container) return;

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

        if (product_first_ml < (stopPoint + product_first_width)) ml = product_first_ml + product_first_width * (dir === 'prev' ? -1 : 1);

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
                <Products />
            </div>
        );
    }
}

export default Catalog;