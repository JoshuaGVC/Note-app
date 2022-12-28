import { FocusEventHandler, FormEvent, useState } from 'react';
import { Wrapper } from './Paragraph.styled'

const Paragraph = () => {
  const [defaultText, setDefaultText] = useState("escriba su nota aqui...");
  const [colorText, setColorText] = useState(true)  

  const handlerOnBlur = (event: FormEvent<HTMLParagraphElement>) => {
    const text = (event.target as HTMLParagraphElement).textContent;
    if (!text) {
      setColorText(true)
      setDefaultText("escriba su nota aqui...")
      return;
    }

    setDefaultText(text as string)
  };

  const handlerOnFocus = () => {
    if (defaultText === "escriba su nota aqui...") {
      setDefaultText("")
    }
  };


  return (
    <Wrapper defaulTextColor={colorText} onInput={() => setColorText(false)} onFocus={handlerOnFocus} onBlur={handlerOnBlur} contentEditable suppressContentEditableWarning={true}>{defaultText}</Wrapper>
  )
}

export default Paragraph