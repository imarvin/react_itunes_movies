import React, { useContext, useState } from 'react';
import { SearchContext } from './../contexts/SearchContext';

const SearchForm = () => {
    const {setTerm, setResults} = useContext(SearchContext);
    const [search, setSearch] = useState('');

    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setResults([]);
        setTerm(search);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={search} onChange={onChangeHandler} placeholder="Search for movies" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;
