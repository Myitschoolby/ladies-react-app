import React from 'react';

class Products extends React.Component {
    storage() {
        const storageData = localStorage.getItem('data') || '';

        if (storageData.length > 0) return JSON.parse(storageData);

        return false;
    }

    show() {
        const data = this.storage();

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

        return html ? <ul className="catalog_products_list">{html}</ul> : '';
    }

    render() {
        return (
        <div className="catalog_products">
            {this.show()}
        </div>
        );
    }
}

export default Products;