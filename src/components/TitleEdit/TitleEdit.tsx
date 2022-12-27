import { FormEvent, useState } from "react";

import { Title } from "./Title.styled";

const TitleEdit = () => {
  const [phantonContent, setPhantonContent] = useState("")
  const [content, setContent] = useState("Una simple nota");

  const handlerOnBlur = (event: FormEvent<HTMLHeadingElement>) => {
    if(content === ""){
      setContent("Una simple nota")
    }else{
      const value = (event.target as HTMLHeadingElement).textContent;
      console.log(value)
      setContent(value as string);
    }
  };

  const handlerOnFocus = () => {
    if(content === "Una simple nota"){
      setContent("");
    }
  };

  

  return (
    <Title
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      suppressContentEditableWarning={true}
      contentEditable
    >
      {content}
    </Title>
  );
};

export default TitleEdit;
