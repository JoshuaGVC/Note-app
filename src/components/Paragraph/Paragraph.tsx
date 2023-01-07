import { FC, FormEvent, useEffect, useState } from 'react';
import { Wrapper } from './Paragraph.styled';
import { IParagraph } from './Paragraph.d';

const Paragraph: FC<IParagraph> = ({ children, onBlur }) => {
  const textDefault =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores';
  const [noteContent, setNoteContent] = useState(children);
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

    onBlur(html as string);
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
    }
  }, []);

  useEffect(() => {
    setColorText(children === textDefault);
    setNoteContent(children);
  }, [children]);

  return (
    <Wrapper
      defaulTextColor={colorText}
      onInput={() => setColorText(false)}
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      dangerouslySetInnerHTML={{ __html: noteContent as string }}
      suppressContentEditableWarning={true}
      contentEditable
    ></Wrapper>
  );
};

export default Paragraph;
