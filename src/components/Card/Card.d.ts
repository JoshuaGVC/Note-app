export interface ICard {
    title: string;
    paragraph: string;
    date: string;
    selected: boolean;
    onClick: () => void;
}