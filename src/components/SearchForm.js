import React, { useContext, useState } from 'react';
import { SearchContext } from './../contexts/SearchContext';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = () => {
    const {setTerm, setResults} = useContext(SearchContext);
    const [searchString, setSearchString] = useState('');

    // keep track of search string
    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearchString(e.target.value);
    }

    // submit search string on submit
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setResults([]);
        setTerm(searchString);
    }

    return (
        <form className="header__form col" onSubmit={onSubmitHandler}>
            <label className="header__form-wrapper">
                <SearchIcon className="header__svg-search"></SearchIcon>
                <input className="header__input" type="text" value={searchString} onChange={onChangeHandler} placeholder="Search for movies" />
                <button className="header__button" type="submit">Search</button>
            </label>
        </form>
    )
}

export default SearchForm;
