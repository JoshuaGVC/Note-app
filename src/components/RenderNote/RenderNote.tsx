import { FC } from "react";
import Paragraph from "../Paragraph";
import TitleEdit from "../TitleEdit";
import { IRender } from "./RenderNote.d";

const RenderNote: FC<IRender> = ({ render }) => {
  const title = render.title;
  const parrafo = render.paragraph;
  return (
    <>
      <TitleEdit textTitle={title} />
      <Paragraph textPragraph={parrafo} />
    </>
  );
};

export default RenderNote;
