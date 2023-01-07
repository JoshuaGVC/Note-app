import { ICard } from '../Card';
type TType = 'title' | 'paragraph';

export interface INote extends Pick<ICard, 'id' | 'title' | 'paragraph'> {
  onBlur: (data: string, action: TType) => void;
}
