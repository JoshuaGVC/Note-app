import { FC } from 'react'
import { Card, Date, Paragraph, Title } from './CardNote.styled'
import { ICardList, ICardNote } from './CardList.d';

const CardList: FC<ICardList> = ({ items, actionNote }) => {
  
  return (
    <ul>
      {
        items.map((item: ICardNote, index:number) => (
          <Card
            key={`item-${index}`}
            selected={item.selected}
            onClick={item.onClick}
            >
            <Title>{item.title}{index}</Title>
            <Paragraph as="p">{item.description.substring(0, 63)}...</Paragraph>
            <Date>{item.date}</Date>
          </Card>          
        ))         
      }
    </ul>
  )
}

export default CardList