import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import { FavContext } from './../contexts/FavContext';

const Favs = () => {
  const { favs, setFavs } = useContext(FavContext);
  //console.log('favs:', favs);

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

export default Favs;
