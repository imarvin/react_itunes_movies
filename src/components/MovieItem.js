import React from 'react'
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const MovieItem = (props) => {
    const { fav, movie, index, buttonFunction } = props;
    
    return (
        <li className="search__item" data-id={movie.trackId}>
            <button className="search__item-button svg-wrapper" onClick={buttonFunction} data-fav={fav} data-index={index} data-id={movie.trackId}>
                <FavoriteIcon className="search__item-button-fav"></FavoriteIcon>
            </button>
            <img className="search__item-thumbnail" src={movie.artworkUrl100} alt={movie.trackCensoredName} />
            <div className="search__item-title">{movie.trackName}</div>
        </li>
    )
}

export default MovieItem;
