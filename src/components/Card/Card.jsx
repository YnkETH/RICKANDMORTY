import styled from "styled-components";

import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Img = styled.img`
   width: 350px;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px
`;

const Title = styled.h1`
   color: beige;
   font-weight: bold;
   font-size: 18px;
   position: relative;
   top: -100px; left: 15px;
   width: 250px;
   background: rgba(120, 130 , 140, 0.5);
   border: 1px solid #333333; border-radius: 3px 3px 3px 3px; box-shadow: 0 0 1px #93291b inset; color: #f5f5f5; padding: 5px;
   white-space: break-word;
`;

const Text = styled.h2`
   color: black;
   font-size: 15px;
   font-weight: 400;
   background: rgba(250, 250 , 250, 1);
   text­align: justify;
   position: sticky;
   
`;
const Button1 = styled.button` 
   background-color: rgb(200 0 0);
   font-weight:bold;
   position: relative;
   top: -350px; left: 320px;
`; 
export default function Card(props) {
   return (
      <div className={style.container}>
         <Img  src={props.image} alt="img not found" />
         <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
         <Link to={`/detail/${props.id}`}><Title>{props.name}</Title></Link>
         <div className={style.containerText}>
         <Text>Species: {props.species}</Text>
         <Text>Gender: {props.gender}</Text>
         </div>
         
      </div>
   );
}
