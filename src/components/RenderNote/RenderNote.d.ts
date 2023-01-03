import { ICardApp } from "./../../App.d";
export interface IRender extends Pick<ICardApp, "id" | "title" | "paragraph"> {}
