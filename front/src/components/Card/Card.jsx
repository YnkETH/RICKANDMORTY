   import styled from "styled-components";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { connect } from "react-redux";

const Img = styled.img`
width: 350px;

border-top-left-radius: 5px;
border-top-right-radius: 5px
`;

const Title = styled.h1`
color: beige;
font-weight: bold;
font-size: 18px;
position: absolute;
top: 320px;
right: 80px;
width: 250px;
background: rgba(120, 130 , 140, 0.5);
border: 1px solid #333333; border-radius: 3px 3px 3px 3px; box-shadow: 0 0 1px #93291b inset; color: #f5f5f5; padding: 5px;
text-align: center;
`;

const Text = styled.h2`
top: 50px;
color: black;
font-size: 15px;
font-weight: 400;
background: rgba(250, 250 , 250, 1);
text­align: center;
position: sticky;
color: black;
`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
color: white;
border 1px solid white;
border-radius: 5px
`;

export function Card(props) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else {
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
   props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}
            <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
         </div>
         <Img  src={props.image} alt="img not found" />
         <Link to={`/detail/${props.id}`} style={{textDecoration: 'none'}}><Title>{props.name}</Title></Link>
        
         <div className={styles.textContainer}>
         <a>Species:</a> <Text className={styles.textEvery1}> {props.species}</Text>
         <a>Gender:</a>  <Text className={styles.textEvery1}> {props.gender}</Text>
         <a>Origin:</a>  <Text className={styles.textEvery1}> {props.origin}</Text>
         <a>Status:</a>  <Text className={styles.textEvery1}> {props.status}</Text>
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },

      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);