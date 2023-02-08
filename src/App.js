import { useState } from 'react';

import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Navbar from './components/NavBar/Navbar.jsx'

import { Routes, Route } from 'react-router-dom';

import styled from 'styled-components'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';

const Estrellas=styled.div`
background-image:url(https://img.freepik.com/vector-gratis/fondo-pantalla-galaxia-acuarela-pintado-mano_52683-63444.jpg?w=2000); backgound-size:100%`;


function App () {

  const [characters, setCharacters] = useState([]);

  /* const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }; */

 const onSearch = (character) => {
   //pregunta si no existe character aun o no esta seteado
   //  if(!characters.length){
    if(characters.length<1){ fetch(`https://rickandmortyapi.com/api/character/${character}`)     // peticion fetch
    .then((response) => response.json())      //ok cuando tengas una respuesta conviertela en json
    .then((data) => {
//   console.log(characters)
        if(data.name){          //si existe el nombre de la informacion entonces vas a configurar la info de caracters
          setCharacters((oldChars) => [...oldChars,data]
          );
        }else{
          window.alert('No hay personajes con ese ID ')
        }
    })
   
  }else{    //hacemos el filter y preguntamos por el id y lo comparamos con el character que llega por parametro y luego hacemos la peticion if
   let a = characters.filter(char => char.id == character)
      if (a.length==0){
        fetch(`https://rickandmortyapi.com/api/character/${character}`)     // peticion fetch
        .then((response) => response.json())      //ok cuando tengas una respuesta conviertela en json
        .then((data) => {
    //   console.log(characters)
            if(data.name){          //si existe el nombre de la informacion entonces vas a configurar la info de caracters
              setCharacters((oldChars) => [...oldChars,data]
              );
            }else{
              window.alert('No hay personajes con ese ID ')
            }
        })
  }
} 
}    

  const onSearchB = () => {
    ///creamos un numero random y lo pasamos como parametro
      let numeroRandom =  Math.floor(Math.random()* 826)

    if(characters.length<1){ fetch(`https://rickandmortyapi.com/api/character/${numeroRandom}`)     // peticion fetch
      .then((response) => response.json())      //ok cuando tengas una respuesta conviertela en json
      .then((data) => {
  //   console.log(characters)
          if(data.name){          //si existe el nombre de la informacion entonces vas a configurar la info de caracters
            setCharacters((oldChars) => [...oldChars,data]
            );
          }else{
            window.alert('No hay personajes con ese ID ')
          }
      })
    
    }else{    //hacemos el filter y preguntamos por el id y lo comparamos con el character que llega por parametro y luego hacemos la peticion if
    let a = characters.filter(char => char.id == numeroRandom)
        if (a.length==0){
          fetch(`https://rickandmortyapi.com/api/character/${numeroRandom}`)     // peticion fetch
          .then((response) => response.json())      //ok cuando tengas una respuesta conviertela en json
          .then((data) => {
      //   console.log(characters)
              if(data.name){          //si existe el nombre de la informacion entonces vas a configurar la info de caracters
                setCharacters((oldChars) => [...oldChars,data]
                );
              }else{
                window.alert('No hay personajes con ese ID ')
              }
          })
    }
    } 
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  } 

  return (
    <div>
      <Estrellas>
      <Navbar onSearch={onSearch}  onSearchB={onSearchB}/>
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </Estrellas>
    </div>
    //   <div>
    // <Estrellas>
    // <div className='App' style={{ padding: '25px' }}>
    //     <Navbar onSearch={onSearch}/>
    //   </div>
    //   <div>
    //     <Cards
    //       characters={characters}
    //       onClose={onClose}
    //     />
    //   </div>
    // </div>
    // </Estrellas>
  )
}

export default App
