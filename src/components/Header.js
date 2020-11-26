import React from 'react';

import Search from './Search.js';
import Cart from './Cart.js';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header_logo"><a href="/">Ladies</a></div>
                <div className="header_widgets">
                    <Search />
                    <Cart />
                </div>
            </header>
        );
    }
}

export default Header;