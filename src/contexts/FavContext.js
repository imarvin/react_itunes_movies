import React, { createContext, useState } from 'react';

export const FavContext = createContext();

const FavContextProvider = (props) => {
  const [favs, setFavs] = useState([]);

  return (
    <FavContext.Provider value={{ favs, setFavs }}>
      {props.children}
    </FavContext.Provider>
  )
}

export default FavContextProvider;