import React from 'react';

import Catalog from './Catalog.js';

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main className="main">
                <Catalog />
            </main>
        );
    }
}

export default Main;