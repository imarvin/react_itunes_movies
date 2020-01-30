import React, { useContext } from 'react';
import SearchForm from './SearchForm';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FavContext } from '../contexts/FavContext';

const Header = props => {
    const { favs, setModalOpen } = useContext(FavContext);
    return (
        <header className="header">
            <div className="header__menu col">
                <MenuIcon className="header__svg-menu"></MenuIcon>
            </div>
            <SearchForm />
            <div className="header__favs col">
                <button className="header__button-fav svg-wrapper" onClick={() => setModalOpen(true)}>
                    <FavoriteIcon className="header__svg-fav"></FavoriteIcon>{favs.length}
                </button>
            </div>
        </header>
    )
}

export default Header;
