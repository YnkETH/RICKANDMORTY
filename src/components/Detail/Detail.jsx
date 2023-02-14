import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./Detail.module.css"

export default function Detail(){

    const [character, setCharacter] = useState({})

    const { detailId } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                console.log(char)
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
      
    return(
        <div className={styles.container}>
          <div className={styles.personcontainer}>
            <Link to='/home' ><button className={styles.cit}>To Home</button></Link>
            <div className={styles.info}>
            <a>Name:</a> <h1>{character.name}</h1>
            <a>Gender:</a> <h2>{character.gender}</h2> 
            <a>Origin:</a> <h2>{character.origin?.name}</h2>
              {/*<h2>{character.location?.name}</h2> */} 
             <a>Id:</a> <h2>{character.id} </h2> 
              <img src={character.image} className={styles.imgStyle} alt='not found'/>
            </div>
          </div>
        </div>
    )
}
