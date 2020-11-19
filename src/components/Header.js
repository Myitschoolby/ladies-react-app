import React from 'react';

import Cart from './Cart.js';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header_logo"><a href="/">Ladies</a></div>
                <div className="header_widgets">
                    <div className="header_widget_search">
                        <input className="header_widget_search_query" name="search_query" placeholder="Search" />
                    </div>
                    <Cart />
                </div>
            </header>
        );
    }
}

export default Header;