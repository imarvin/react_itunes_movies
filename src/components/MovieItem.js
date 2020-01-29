import React from 'react'

const MovieItem = (props) => {
    const { fav, movie, index, buttonFunction } = props;

    return (
        <li className="search__item" data-id={movie.trackId}>
            {movie.trackName}
            {fav ? (
                <button className="button" onClick={e => buttonFunction(index)} data-fav={true}>UnFav</button>
            ) : (
                <button className="button" onClick={e => buttonFunction(e, movie)} data-fav={false}>Fav</button>
            )}
        </li>
    )
}

export default MovieItem;
