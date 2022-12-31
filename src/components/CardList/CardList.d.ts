import { ICard } from '../Card/Card';

export interface ICardList{
    items: ICard[];
    actionNote: (id: string)=> void;
}