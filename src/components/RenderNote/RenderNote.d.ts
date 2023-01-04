import { ICardApp } from "./../../App.d";
type TType = "title" | "paragraph";

export interface IRender extends Pick<ICardApp, "id" | "title" | "paragraph"> {
  onBlur: (data: string, action: TType) => void;
}

// -agregar card al apretar el boton "add" - listo.
// -que los cards se agreguen en orden de actualidad - listo.
// -seleccionar y deseleccionar card - listo.
// -apenas se agregue un card, debera estar seleccionado - listo.
// -al estar seleccionado el card, los datos del card se rendericen en la columna derecha - listo.
// -que los datos del card se rendericen en el lado derecho independientemente su contenido - pediente.
// -al editar un texto, debera reflejar los cambios realizados en el card y guardase en el local storage - pendiente
