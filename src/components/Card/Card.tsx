import { FC } from 'react'
import type {ICard} from './Card.d'
import { Card as CardStyled, Title, Paragraph, Date } from './Card.styled';

const Card:FC<ICard> = ({ title, paragraph, date, selected, onClick }) => {
  
  return (
    <CardStyled
      selected={selected}
      onClick={onClick}
    >
      <Title>{title}</Title>
      <Paragraph as="p">{paragraph.substring(63,0)}...</Paragraph>
      <Date>{date}</Date>
    </CardStyled>  
  )
}

export default Card