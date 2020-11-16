import React from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';

import './css/style.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            statusData: false
        };

        this.getData();
    }

    getData = async function() {
        if (this.storage()) return;

        await fetch('https://fakestoreapi.com/products/')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({
                statusData: true
            });

            this.storage(result);
        });
    }

    storage(data) {
        data = data || '';

        if (data.length > 0) {
            localStorage.setItem('data', JSON.stringify(data));
            
            return true;
        } else {
            const storageData = localStorage.getItem('data') || '';

            if (storageData.length > 0) return JSON.parse(storageData);
        }

        return false;
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