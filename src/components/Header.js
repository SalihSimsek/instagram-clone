import React, { useState } from "react";
import "../styles/Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Avatar } from "@material-ui/core";

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <header className="container">
        <Link to='/'>
          <img
            className="logo"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo"
          /></Link>
        <div className="input_field">
          <input type="text" placeholder="Ara" />
          <SearchIcon className="input_field_search_icon" />
        </div>
        <div className="icons">
          <Link to='/'>
            <div className="icon">
              <HomeOutlinedIcon />
            </div>
          </Link>
          <div className="icon">
            <SendOutlinedIcon />
          </div>
          <div className="icon">
            <ExploreOutlinedIcon />
          </div>
          <div className="icon">
            <FavoriteBorderOutlinedIcon />
          </div>
          <Link to='/profile'>
            <div className="icon">
              <Avatar />
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
