import { ICardApp } from './../../App.d';
type TType = 'title' | 'paragraph';

export interface IRender extends Pick<ICardApp, 'id' | 'title' | 'paragraph'> {
  onBlur: (data: string, action: TType) => void;
}
