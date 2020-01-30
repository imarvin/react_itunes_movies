import React from 'react';
import FavContextProvider from './contexts/FavContext';
import SearchContextProvider from './contexts/SearchContext';
import Header from './components/Header';
import Favs from './components/Favs';
import SearchResults from './components/SearchResults';
import './App.scss';

function App() {
  return (
    <div className="search">
      <SearchContextProvider>
        <FavContextProvider>
          <Header />
          <main>
            <SearchResults />
            <Favs />
          </main>
        </FavContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;
