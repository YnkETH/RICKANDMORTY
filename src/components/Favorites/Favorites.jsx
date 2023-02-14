import { connect } from "react-redux"
import  Card  from "../Card/Card"
import styles from './Favorites.module.css';

export function Favorites ({ myFavorites }){
    return(


        <div className={styles.box}>
            {myFavorites?.map(fav => (
                <Card className={styles.container}
                name={fav.name}
                key={fav.id}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                id={fav.id}
                />
            ))}
        </div>
    )
}


export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)