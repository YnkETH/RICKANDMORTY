import { connect } from "react-redux"
import  Card  from "../Card/Card"
import styles from './Favorites.module.css';
import { orderCards , filterCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

export function Favorites ({ myFavorites }){
    //el dispatch nos permite usar las funciones de actions
    const dispatch = useDispatch(); 

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

        <div className={styles.box} >
            {myFavorites?.map(fav => (
                <Card className={styles.container}
                name={fav.name}
                key={fav.id}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin}
                status={fav.status}
                image={fav.image}
                id={fav.id}
                />
            ))}
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