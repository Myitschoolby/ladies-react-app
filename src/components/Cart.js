import React from 'react';

class Cart extends React.Component {
    render() {
        return (
            <div className="header_widget_cart">
                <div className="header_widget_cart_count">0</div>
                <button className="header_widget_cart_btn"></button>
            </div>
        );
    }
}

export default Cart;