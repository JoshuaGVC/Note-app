import { FC } from "react";
import { ICardList } from "./CardList.d";
import Card, { ICard } from "../Card";

const CardList: FC<ICardList> = ({ items, actionNote }) => {
  return (
    <ul>
      {items.map(
        (
          { title, paragraph, date, selected, onClick }: ICard,
          index) => (
          <Card
            key={`item-${index}`}
            title={title}
            paragraph={paragraph}
            date={date}
            selected={selected !== undefined ? selected : false}
            onClick={onClick !== undefined ? onClick : () => {}}
          />
        )
      )}
    </ul>
  );
};

export default CardList;
