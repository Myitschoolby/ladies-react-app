import React, { useContext } from 'react';

import {Context} from '../App.js';

function Search() {
    const {setFilter} = useContext(Context);

    function find(event) {
        if (event.target.value.length >= 3) {
            setFilter({
                type: 'search',
                value: event.target.value
            });
        } else {
            setFilter({
                type: '',
                value: ''
            });
        }
    }

    return (
        <div className="header_widget_search">
            <input onKeyUp={find} className="header_widget_search_query" name="search_query" placeholder="Search" />
        </div>
    );
}

export default Search;