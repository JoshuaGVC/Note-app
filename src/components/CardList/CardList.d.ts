export interface ICardNote {
    selected?: boolean;
    title: string;
    description: string;
    date: string;
    onClick?: () => void;
}

export interface ICardList{
    items: ICardNote[];
    actionNote: (index: number)=> void;
}