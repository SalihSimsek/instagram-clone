import React from 'react'
import '../styles/Header.css'

import SearchIcon from '@material-ui/icons/Search'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import {Avatar} from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <header className="container">
                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
                <div className="input_field">
                    <input type="text" placeholder="Ara"/>
                    <SearchIcon className="input_field_search_icon" />
                </div>
                <div className="icons">
                    <HomeOutlinedIcon className="icon"/>
                    <SendOutlinedIcon className="icon"/>
                    <ExploreOutlinedIcon className="icon"/>
                    <FavoriteBorderOutlinedIcon className="icon"/>
                    <Avatar />
                </div>
            </header>
        </div>
    )
}

export default Header
