import React, { useState, useContext, useEffect } from 'react';

import {Context} from '../App.js';

function Products() {
    const {dataStatus, cart, setCart, filter, setFilter} = useContext(Context);

    const [productsHtml, setProductsHtml] = useState('');

    let data = localStorage.getItem('data') || '';
    if (data.length > 0) data = JSON.parse(data);

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

    function filterProducts() {
        let filterData = data.filter(function(product) {
            let reg = new RegExp(filter.value,"gmi");

            return reg.test(product.title) ? product : false;
        });

        if (filterData.length > 0) return filterData;
        return false;
    }

    function sortProducts() {
        let priceData = [];

        // priceData = data.map(function(product) {
        //     return product.price;
        // });

        // data.forEach((product, index) => {
        //     priceData['id' + index] = product.price;
        // });

        // priceData.sort(function(a, b) {
        //     if (a > b) return 1;
        //     return -1;
        // });

        // console.log(priceData);

        // if (filter.value === 'asc') {

        // } else {

        // }

        return false;
    }

    function show() {
        let dataProducts = data || [];

        if (filter.type === 'search' && filter.value.length > 0) {
            let filterData = filterProducts();

            if (filterData !== false && filterData.length > 0) dataProducts = filterData;
            else dataProducts = data;
        }

        if (filter.type === 'sort') {
            let sortData = sortProducts();

            if (sortData !== false && sortData.length > 0) dataProducts = sortData;
            else dataProducts = data;
        }

        let html = dataProducts.map(function (product, index) {
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
    }, [dataStatus, filter]);

    return (
    <div className="catalog_products">
        {productsHtml}
    </div>
    );
}

export default Products;