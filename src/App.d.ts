import { ICard } from './components/Card/Card.d';
export interface ICardApp extends Omit<ICard, 'onClick'> {}
