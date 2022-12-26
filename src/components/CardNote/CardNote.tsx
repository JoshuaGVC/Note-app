import { FC } from 'react'
import { Card, Date, Paragraph, Title } from './CardNote.styled'
import { ICardNote } from './CardNote.d';

const CardNote: FC<ICardNote> = ({ selected, title, description, date, onClick }) => {
  return (
    <Card selected={selected} onClick={onClick}>
      <Title>{title}</Title>
      <Paragraph as="p">{description.substring(0, 63)}...</Paragraph>
      <Date>{date}</Date>
    </Card>
  )
}

export default CardNote