import { ICard } from '../Card/Card';

export interface ICardList{
    items: ICard[];
    actionNote: ICard.onClick;
}