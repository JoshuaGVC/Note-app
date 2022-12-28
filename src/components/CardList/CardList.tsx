import { FC } from 'react'
import { Card, Date, Paragraph, Title } from './CardNote.styled'
import { ICardList, ICardNote } from './CardList.d';

const CardNote: FC<ICardList> = ({ items, actionNote }) => {
  return (
    <>
    {
      items.map((item: ICardNote, index:number) => (
        <Card
          key={`item-${index}`}
          selected={item.selected}
          onClick={item.onClick}>
          <Title>{item.title}</Title>
          <Paragraph as="p">{item.description.substring(0, 63)}...</Paragraph>
          <Date>{item.date}</Date>
        </Card>
        
      ))
        
    }
    </>
  )
}

export default CardNote