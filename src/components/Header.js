import React from 'react';
import SearchForm from './SearchForm';

const Header = props => {
    return (
        <header className="search__header">
            <h1>iTunes Movie Search</h1>
            <nav></nav>
            <SearchForm />
        </header>
    )
}

export default Header;
