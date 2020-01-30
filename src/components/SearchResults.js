import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import { FavContext } from './../contexts/FavContext';
import { SearchContext } from './../contexts/SearchContext';

const SearchResults = () => {
    const { results } = useContext(SearchContext);
    const { favs, setFavs } = useContext(FavContext);

    // function for fav icon in search results
    // will either add or remove from favorites
    const buttonFunction = (e) => {
        e.preventDefault();
        const { fav, index, id } = e.target.dataset;
        
        if (fav === "false") {
            //add to favs
            setFavs([ ...favs, {...results[index]} ]);
            e.target.dataset.fav = true;
        } else {
            // remove from favs
            const newFavs = favs.filter(obj => obj.trackId.toString() !== id);
            setFavs([ ...newFavs ]);
            e.target.dataset.fav = false;
        }
    }

    return (
        <div className="search__list results">
            { results.length < 0 &&
                <h2>Welcome.  Please use the search tool above.</h2>
            }
            <ul>
            {results &&
                results.map((movie, i) => {
                    // see if search result is a favorite
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
