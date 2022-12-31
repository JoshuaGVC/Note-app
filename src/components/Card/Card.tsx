import { FC, useRef } from 'react';
import type {ICard} from './Card.d';
import { Card as CardStyled, Title, Paragraph, Date } from './Card.styled';
import useDoubleClick from 'use-double-click';


const Card:FC<ICard> = ({id, title, paragraph, date, selected, onClick }) => {
  const buttonRef = useRef(null)
  const deleteNote = () =>{

  }
  
  return (
    <CardStyled
      selected={selected}
      onClick={()=>{onClick(id)}}
      ref={buttonRef}
    >
      <Title>{title}</Title>
      <Paragraph as="p">{paragraph.substring(63,0)}...</Paragraph>
      <Date>{date}</Date>
    </CardStyled>  
  )
}

export default Card