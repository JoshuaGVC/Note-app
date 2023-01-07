import { FC } from 'react';
import { ICardList } from './CardList.d';
import Card, { ICard } from '../Card';
import { satinizar } from '../../utils/satinizar';

const CardList: FC<ICardList> = ({ items, actionNote }) => {
  return (
    <ul>
      {items.map(({ title, paragraph, date, selected, id }: ICard, index) => (
        <Card
          id={id}
          key={`item-${index}`}
          title={title}
          paragraph={satinizar(paragraph) as string}
          date={date}
          selected={selected}
          onClick={actionNote}
        />
      ))}
    </ul>
  );
};

export default CardList;
