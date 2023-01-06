import moment from 'moment';
import { FC, useRef } from 'react';
import type { ICard } from './Card.d';
import { Card as CardStyled, Title, Paragraph, Date as Fecha } from './Card.styled';

const Card: FC<ICard> = ({ id, title, paragraph, date, selected, onClick }) => {
  return (
    <CardStyled
      selected={selected}
      onClick={() => {
        onClick(id, 'seleccionar');
      }}
      onDoubleClick={() => {
        onClick(id, 'borrar');
      }}
    >
      <Title>{title}</Title>
      <Paragraph as="p">{paragraph.substring(55, 0)}...</Paragraph>
      <Fecha>{moment(new Date(date) as Date).format('dddd, Do of MMMM  YYYY, h:mm:ss a')}</Fecha>
    </CardStyled>
  );
};

export default Card;
