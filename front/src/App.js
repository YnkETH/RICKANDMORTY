import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

import { Routes, Route } from 'react-router-dom';

// import styled from 'styled-components'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from "./components/Form/Form.jsx"
import Favorites  from './components/Favorites/Favorites';

function App () {
  const location = useLocation();
  const navigate = useNavigate();

  const username = 'yanko@mail.com';
  const password = 'yanko123';

  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([]);

  /* const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }; */

 function login(userData){
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
 }
 function unlogin(){
  setAccess(false);
  navigate('/')

}


const onSearch = (character) => {

  if(characters.length<1){ 
  fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)     // peticion fetch
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
        fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)     // peticion fetch
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

   if(characters.length<1){ fetch(`http://localhost:3001/rickandmorty/onsearch/${numeroRandom}`)     // peticion fetch
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
         fetch(`http://localhost:3001/rickandmorty/onsearch/${numeroRandom}`)     // peticion fetch
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

  useEffect(() => {
      !access && navigate('/');
    }, [access]);

  return (
    <div className='container'>
      {location.pathname !== '/' &&  <Navbar onSearch={onSearch}  onSearchB={onSearchB} unLogin={unlogin}/>}  
      <Routes>
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
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
