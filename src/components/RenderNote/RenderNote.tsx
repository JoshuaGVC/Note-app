import { FC } from "react";
import Paragraph from "../Paragraph";
import TitleEdit from "../TitleEdit";
import { IRender } from "./RenderNote.d";

const RenderNote: FC<IRender> = ({ title, paragraph, handlerOnBlur }) => {
  return (
    <>
      <TitleEdit textTitle={title} onBlur={handlerOnBlur} />
      <Paragraph textPragraph={paragraph} onBlur={handlerOnBlur} />
    </>
  );
};

export default RenderNote;
