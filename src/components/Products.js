import React, { useState, useContext, useEffect } from 'react';

import {Context} from '../App.js';

function Products() {
    const {dataStatus, cart, setCart} = useContext(Context);

    const [productsHtml, setProductsHtml] = useState('');

    function addDel(event) {
        const action = event.target.dataset.action;
        const id = event.target.dataset.productId;
        const list = cart.list;

        if (action === "add" && list.indexOf(id) === -1) {
            list.push(id);

            event.target.innerHTML = '-';
            event.target.dataset.action = 'del';
        }

        if (action === "del" && list.indexOf(id) !== -1) {
            list.splice(list.indexOf(id), 1);

            event.target.innerHTML = '+';
            event.target.dataset.action = 'add';
        }

        setCart({
            count: list.length,
            list: list
        });
    };

    function show() {
        let data = localStorage.getItem('data') || '';
        if (data.length > 0) data = JSON.parse(data);

        if (!data) return;

        let html = data.map(function (product, index) {
            let btnName = cart.list.indexOf(String(index)) !== -1 ? '-' : '+';

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
                        <button data-action={btnName === "+" ? "add" : "del"} data-product-id={index} onClick={addDel} className="product_cart_btn">{btnName}</button>
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