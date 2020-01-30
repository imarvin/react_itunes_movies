import React, { useContext, useEffect } from 'react';
import MovieItem from './MovieItem';
import { FavContext } from './../contexts/FavContext';
import { SearchContext } from '../contexts/SearchContext';
import CloseIcon from '@material-ui/icons/Close';
import Modal from "react-modal";

export const MODAL_ID = "React_MODAL";

const Favs = () => {
  const { favs, setFavs, isModalOpen, setModalOpen } = useContext(FavContext);
  const { results, setResults } = useContext(SearchContext);
  
  // function for removing movies from favorites
  const buttonFunction = (e, index) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    const newFavs = favs.filter(obj => obj.trackId.toString() !== id);
    setFavs([ ...newFavs ]);
  };

  // make sure movies in search results corresponds with updated favorites
  useEffect(() => {
      setResults([...results]);
  }, []);

  // modal close function
  const closeModal = () => {
    setModalOpen(false);
  }

  // modal css styles
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.16)",
      zIndex: 10000
    },
    content: {
      backgroundColor: "#292929",
      border: "0",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      minHeight: "75%",
      minWidth: "75%",
      maxHeight: "75%",
      maxWidth: "75%",
      transform: "translate(-50%, -50%)",
      transition: "all 0.7s"
    }
  };

  return (
    <>      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldFocusAfterRender
        contentLabel="Favorite Movies"
      >
        
        <button className="modal__button-close svg-wrapper" onClick={closeModal}>
          <CloseIcon className="modal__button-svg"></CloseIcon>
        </button>
        <div className="search__list favs">
          <h2>Favorites:</h2>
          <ul>
            {favs &&
              favs.map(movie => {
                return (
                  <MovieItem key={movie.trackId} fav={true} movie={movie} buttonFunction={buttonFunction}></MovieItem>
                )
              })
            }
          </ul>
        </div>

      </Modal>
      <div id={MODAL_ID} />
    </>
  )
}

export default Favs;
