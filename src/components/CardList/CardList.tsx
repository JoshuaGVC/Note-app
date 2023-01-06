import { FC } from 'react';
import { ICardList } from './CardList.d';
import Card, { ICard } from '../Card';

const CardList: FC<ICardList> = ({ items, actionNote }) => {
  return (
    <ul>
      {items.map(({ title, paragraph, date, selected, id }: ICard, index) => (
        <Card
          id={id}
          key={`item-${index}`}
          title={title}
          paragraph={paragraph}
          date={date}
          selected={selected}
          onClick={actionNote}
        />
      ))}
    </ul>
  );
};

export default CardList;
