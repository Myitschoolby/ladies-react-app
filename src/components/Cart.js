import React, {useContext} from 'react';

import {Context} from '../App.js';

const Cart = function() {
    const {cart} = useContext(Context);

    return (
        <div className="header_widget_cart">
            <div className="header_widget_cart_count">{cart.count}</div>
            <button className="header_widget_cart_btn"></button>
        </div>
    );
};

export default Cart;