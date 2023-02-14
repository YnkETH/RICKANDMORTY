import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <div className={style.container}>
            <Link className={style.link} to='/about'>About</Link>
            <Link className={style.link} to='/home'>Home</Link>
            <Link className={style.link} to='/favorites'>Favorites</Link>
            <SearchBar onSearch={props.onSearch} onSearchB={props.onSearchB}    />
            <button className={style.buttonClass} onClick={props.unLogin} >Salir</button>
        </div>
    )
}