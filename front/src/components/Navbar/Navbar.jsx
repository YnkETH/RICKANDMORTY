import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <div className={style.container}>
            
            <Link className={style.buttonClass} to='/about'>About</Link>
            <Link className={style.buttonClass} to='/home'>Home</Link>
            <Link className={style.buttonClass} to='/favorites'>Favorites</Link>
            <button className={style.buttonClass1} onClick={props.unLogin} >Salir</button>
            <SearchBar onSearch={props.onSearch} onSearchB={props.onSearchB}    />
           
        </div>
    )
}