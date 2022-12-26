export interface ICardNote {
    selected?: boolean;
    title: string;
    description: string;
    date: string;
    onClick?: () => void;
}