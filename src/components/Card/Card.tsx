import { FC, useRef } from 'react';
import type {ICard} from './Card.d';
import { Card as CardStyled, Title, Paragraph, Date } from './Card.styled';



const Card:FC<ICard> = ({ id, title, paragraph, date, selected, onClick }) => {
  
  
  return (
    <CardStyled
      selected={selected}
      onClick={()=>{onClick(id, "seleccionar")}}
      onDoubleClick={()=>{onClick(id, "borrar")}}
    >
      <Title>{title}</Title>
      <Paragraph as="p">{paragraph.substring(63,0)}...</Paragraph>
      <Date>{date}</Date>
    </CardStyled>  
  )
}

export default Card