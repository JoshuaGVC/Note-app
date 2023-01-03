import { FC, FormEvent, useState } from "react";
import { Wrapper } from "./Paragraph.styled";
import { IParagraph } from "./Paragraph.d";

const Paragraph: FC<IParagraph> = ({ textPragraph }) => {
  const textDefault =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores";
  const [defaultText, setDefaultText] = useState(textPragraph);
  const [colorText, setColorText] = useState(true);

  const handlerOnBlur = (event: FormEvent<HTMLParagraphElement>) => {
    const html = (event.target as HTMLParagraphElement).innerHTML;
    const contenido = (event.target as HTMLParagraphElement).textContent;

    if (!html || contenido === "") {
      setColorText(true);
      setDefaultText(textDefault);
      return;
    }
    setDefaultText(html as string);
  };

  const handlerOnFocus = () => {
    if (defaultText === textDefault) {
      setDefaultText("");
    }
  };

  return (
    <Wrapper
      defaulTextColor={colorText}
      onInput={() => setColorText(false)}
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      dangerouslySetInnerHTML={{ __html: defaultText }}
      suppressContentEditableWarning={true}
      contentEditable
    ></Wrapper>
  );
};

export default Paragraph;
