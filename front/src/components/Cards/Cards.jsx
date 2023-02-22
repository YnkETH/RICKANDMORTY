import Card from '../Card/Card.jsx';
import React from 'react';
// import styles from "./Cards.module.css";
import styled from 'styled-components' 
import styles from './Cards.module.css'

const StyledCard = styled(Card)`
&:hover {
   transform: scale(1.05);
   transition: transform 0.5s;
   transition-delay: 0.5s;
}
`;

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.container}>
        {characters.map(character => (
          <StyledCard
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            status={character.status}
            origin={character.origin?.name}
            onClose={props.onClose}
          />
        ))}
      </div>
    );
    
}
