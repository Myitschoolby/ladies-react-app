import React, { useState } from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';

import './css/style.css';

export const Context = React.createContext();

function App() {
    const [dataStatus, setDataStatus] = useState(false);

    const getData = async function() {
        if (dataStatus) return;

        await fetch('https://fakestoreapi.com/products/')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            storage(result);

            setDataStatus(true);
        });

        return false;
    };

    function storage(data) {
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

    getData();

    return (
        <div className="ladies" data-status={dataStatus}>
        <Context.Provider value={dataStatus}>
            <Header />
            <Main />
        </Context.Provider>
        </div>
    );
}

export default App;