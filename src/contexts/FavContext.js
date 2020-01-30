import React, { createContext, useState } from 'react';

export const FavContext = createContext();

const FavContextProvider = (props) => {
  const [favs, setFavs] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <FavContext.Provider value={{ favs, setFavs, isModalOpen, setModalOpen }}>
      {props.children}
    </FavContext.Provider>
  )
}

export default FavContextProvider;