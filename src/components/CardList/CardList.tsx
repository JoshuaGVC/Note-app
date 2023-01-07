import { FC } from 'react';
import { ICardList } from './CardList.d';
import Card, { ICard } from '../Card';
import { Satinizar } from '../../utils/Satinizar';
import { ICardApp } from '../../App.d';

const CardList: FC<ICardList> = ({ items, actionNote }) => {
  return (
    <ul>
      {items.map(({ title, paragraph, date, selected, id }: ICard, index) => (
        <Card
          id={id}
          key={`item-${index}`}
          title={title}
          paragraph={Satinizar(paragraph) as string}
          date={date}
          selected={selected}
          onClick={actionNote}
        />
      ))}
    </ul>
  );
};

export default CardList;
