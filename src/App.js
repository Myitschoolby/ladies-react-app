import React from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';

import './css/style.css';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="ladies">
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;