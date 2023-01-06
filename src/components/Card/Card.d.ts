type TAction = 'seleccionar' | 'borrar';

export interface ICard {
  id: string;
  title: string;
  paragraph: string;
  date: number | string | Date;
  selected: boolean;
  onClick: (id: string, action: TAction) => void;
}
