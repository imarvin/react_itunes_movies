import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import { FavContext } from './../contexts/FavContext';
import { SearchContext } from './../contexts/SearchContext';


const SearchResults = () => {
    const { results } = useContext(SearchContext);
    const { favs, setFavs } = useContext(FavContext);

    //console.log(">> results:", results);

    const buttonFunction = (e, movie) => {
        if (e.target.dataset.fav === "false") {
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
                {results &&
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

export default SearchResults;
