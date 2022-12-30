import { ICard } from "../Card";

export interface ICardList{
    items: ICard[];
    actionNote: (index: number)=> void;
}