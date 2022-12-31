export interface ICard {
    id:string;
    title: string;
    paragraph: string;
    date: string;
    selected: boolean;
    onClick: (id: string) => void;
}