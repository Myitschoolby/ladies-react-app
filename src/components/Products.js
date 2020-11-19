import React, { useState, useContext, useEffect } from 'react';

import {Context} from '../App.js';

function Products() {
    const dataStatus = useContext(Context);

    const [productsHtml, setProductsHtml] = useState('');

    function show() {
        let data = localStorage.getItem('data') || '';
        if (data.length > 0) data = JSON.parse(data);

        if (!data) return;

        let html = data.map(function (product, index) {
            return (
            <li key={index} className="product">
                <div className="product_image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product_caption">
                    <div className="product_name">{product.title}</div>
                    <div className="product_description">{product.category}</div>
                    <div className="product_price">
                        <div className="product_price_value">{product.price}</div>
                        <button className="product_cart_btn">+</button>
                    </div>
                </div>
            </li>
            );
        });

        if (html) setProductsHtml(<ul className="catalog_products_list">{html}</ul>);
    }

    useEffect(_ => {
        if (dataStatus) show();
    }, [dataStatus]);

    return (
    <div className="catalog_products">
        {productsHtml}
    </div>
    );
}

export default Products;