type TAction = "seleccionar" | "borrar";


export interface ICard {
    id:string;
    title: string;
    paragraph: string;
    date: string;
    selected: boolean;
    onClick: (id: string, action:TAction) => void;
}