import React, { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  
  // itunes docs: 
  //   https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
  const GET_URL = `https://itunes.apple.com/search?entity=movie&attribute=movieTerm&limit=10&term=${term}`;
  
  useEffect(() => {
    // search itunes api
    fetch(GET_URL)
      .then(res => res.json())
      .then(data => {
        setResults([...data.results]);
        console.log('>> data fetched', data.results);
      })
      .catch(error => {
        console.log('>> get error,', error.message);
      });
  }, [GET_URL])

  return (
    <SearchContext.Provider value={{ term, results, setTerm, setResults }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;