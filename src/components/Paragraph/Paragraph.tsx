import { FC, FormEvent, useEffect, useState } from 'react';
import { Wrapper } from './Paragraph.styled';
import { IParagraph } from './Paragraph.d';

const Paragraph: FC<IParagraph> = ({ textPragraph, onBlur }) => {
  const textDefault =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores';
  const [noteContent, setNoteContent] = useState(textPragraph);
  const [colorText, setColorText] = useState(true);

  const handlerOnBlur = (event: FormEvent<HTMLParagraphElement>) => {
    const html = (event.target as HTMLParagraphElement).innerHTML;
    const contenido = (event.target as HTMLParagraphElement).textContent;

    if (contenido === '') {
      setColorText(true);
      setNoteContent(textDefault);
      onBlur(textDefault);
      return;
    }
    onBlur(contenido as string);
    setNoteContent(html as string);
  };

  const handlerOnFocus = () => {
    if (noteContent === textDefault) {
      setNoteContent('');
    }
  };

  useEffect(() => {
    if (noteContent !== textDefault) {
      setColorText(false);
      console.log(colorText);
    } else {
      console.log(colorText);
    }
  }, []);

  useEffect(() => {
    setColorText(textPragraph === textDefault);
    setNoteContent(textPragraph);
  }, [textPragraph]);

  return (
    <Wrapper
      defaulTextColor={colorText}
      onInput={() => setColorText(false)}
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      dangerouslySetInnerHTML={{ __html: noteContent }}
      suppressContentEditableWarning={true}
      contentEditable
    ></Wrapper>
  );
};

export default Paragraph;
