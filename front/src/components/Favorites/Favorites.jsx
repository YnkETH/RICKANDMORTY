import { connect } from "react-redux"
import styles from './Favorites.module.css';
import { orderCards , filterCards, getFavorites } from '../../redux/action/action'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import  Favorite  from "../Favorite/Favorite";

export function Favorites ({ myFavorites }){
    //el dispatch nos permite usar las funciones de actions
    const dispatch = useDispatch(); 

    useEffect(()=>{
        console.log("useEffect")
        dispatch(getFavorites())
    },[])

    const handleDispatch = (e) => {
        const { name, value } = e.target;
        //si el nombre es order y retorno el dispatch con el actiopn del valor
        if ( name === 'order'){
            return dispatch(orderCards(value))
        }
        if ( name === 'filter'){
            return dispatch(filterCards(value))
        }
    }

    return(
        <div>
            <div>
                <select name='order' onClick={handleDispatch}>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>   
                <select name='filter' onClick={handleDispatch}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
                
            </div>

            <div className={styles.box}>
            {myFavorites.length?myFavorites.map(fav => 
                <Favorite
                name={fav.name}
                key={fav.id}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin}
                status={fav.status}
                image={fav.image}
                id={fav.id}
                />
            ):<h1></h1>}
            </div>
        </div>
    )
}


export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)