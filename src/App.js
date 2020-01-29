import React, { createContext, useContext, useState, useEffect } from 'react';
import './App.scss';


// CONTEXTS

// search context
const SearchContext = createContext();
const SearchContextProvider = (props) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  
  // itunes docs: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
  const GET_URL = `https://itunes.apple.com/search?entity=movie&attribute=movieTerm&limit=10&term=${term}`;

  // useEffect to fetch when GET_URL updates based on new search string(term)
  useEffect(() => {
    console.log('\nSearching...')
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

// favorite context
const FavMovie = createContext();
const FavMovieProvider = (props) => {
  const [favs, setFavs] = useState([]);

  return (
    <FavMovie.Provider value={{ favs, setFavs }}>
      {props.children}
    </FavMovie.Provider>
  )
}



// COMPONENTS

// header
const Header = () => {
  return (
    <header className="search__header">
      <h1>iTunes Movie Search</h1>
      <nav></nav>
      <SearchForm />
    </header>
  )
}

// movie item
const MovieItem = (props) => {
  const { fav, movie, index, buttonFunction } = props;

  return (
      <li className="search__item" data-id={movie.trackId}>
        {movie.trackName}
        { fav ? (
          <button onClick={e => buttonFunction(index)} data-fav={true}>UnFav</button>
        ) : (
          <button onClick={e => buttonFunction(e, movie)} data-fav={false}>Fav</button>
        )}
      </li>
  )
}


// search form
const SearchForm = () => {
  const { setTerm, setResults } = useContext(SearchContext);
  const [ search, setSearch ] = useState('');

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
      <button type="submit">Search</button>
    </form>
  )
}

// search results
const SearchResults = () => {
  const { results } = useContext(SearchContext);
  const { favs, setFavs } = useContext(FavMovie);

  console.log(">> results:", results);

  const buttonFunction = (e, movie) => {
    console.log('button Fav:', e.target.dataset.fav);
    if(e.target.dataset.fav === "false") {
      setFavs([
        ...favs,
        {
          trackId: movie.trackId,
          trackName: movie.trackName
        }
      ]);
      e.target.dataset.fav = true;
    }
  }

  return (
    <div className="search__list results">
      <h2>Search results:</h2>
      <ul>
        { results &&
            results.map((movie, i) => {
              let fav = favs.find(f => f.trackId === movie.trackId) ? true : false;
              return (
                <MovieItem key={movie.trackId} fav={fav} index={i} movie={movie} buttonFunction={buttonFunction}></MovieItem>
              )
            })
        }
      </ul>
    </div>
  )
}

// favorites
const Favs = () => {
  const { favs, setFavs } = useContext(FavMovie);
  console.log('favs:', favs);

  const buttonFunction = index => {
    const copyFavs = favs;
    copyFavs.splice(index, 1); // remove from favs
    setFavs([...copyFavs]);
  };

  return (
    <div className="search__list favs">
      <h2>Favs:</h2>
      <ul>
        { favs &&
            favs.map(movie => {
              return (
                <MovieItem key={movie.trackId} fav={true} movie={movie} buttonFunction={buttonFunction}></MovieItem>
              )
            })
        }
      </ul>
    </div>
  )
}


function App() {
  return (
    <div className="search">
      <SearchContextProvider>
        <Header />
        <FavMovieProvider>
          <main>
            <SearchResults />
            <Favs />
          </main>
        </FavMovieProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;
