import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className="header">
                <div className="header_logo"><a href="/">Ladies</a></div>
                <div className="header_widgets">
                    <div className="header_widget_search">
                        <input className="header_widget_search_query" name="search_query" placeholder="Search" />
                    </div>
                    <div className="header_widget_cart">
                        <button className="header_widget_cart_btn"></button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;