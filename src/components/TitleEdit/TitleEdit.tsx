import { FormEvent, useState } from "react";

import { Title } from "./Title.styled";


const TitleEdit = () => {
  const defaultText = "Titulo de la nota...";
  const [content, setContent] = useState(defaultText);
  const [textColor, setTextColor] = useState(true)

  const handlerOnBlur = (event: FormEvent<HTMLHeadingElement>) => {
    const text = (event.target as HTMLHeadingElement).textContent;
    if (!text) {
      setTextColor(true)
      setContent(defaultText);
      return;
    }
    setContent(text as string);
  };

  const handlerOnFocus = () => {
    if (content === "Titulo de la nota...") {
      setContent("");
    }
  };

  return (
    <Title
      onInput={()=>setTextColor(false)}
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      suppressContentEditableWarning={true}
      defalutText={textColor}
      contentEditable
    >
      {content}
    </Title>
  );
};

export default TitleEdit;
