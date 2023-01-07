import { FC, FormEvent, useEffect, useState } from 'react';
import { ITitle } from './Title.d';
import { Title as TitleStyled } from './Title.styled';

const Title: FC<ITitle> = ({ children, onBlur }) => {
  const defaultText = 'Una simple nota';
  const [content, setContent] = useState(children);
  const [textColor, setTextColor] = useState(true);

  const handlerOnBlur = (event: FormEvent<HTMLHeadingElement>) => {
    const text = (event.target as HTMLHeadingElement).textContent;
    if (defaultText !== text) {
      setTextColor(false);
    }

    if (!text) {
      setTextColor(true);
      setContent(defaultText);
      onBlur(defaultText);
      return;
    }
    onBlur(text);
    setContent(text as string);
  };

  const handlerOnFocus = () => {
    if (content === defaultText) {
      setContent('');
    }
  };

  useEffect(() => {
    setContent(children);
    setTextColor(defaultText === children);
  }, [children]);

  return (
    <TitleStyled
      defalutText={textColor}
      onInput={() => setTextColor(false)}
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      suppressContentEditableWarning={true}
      contentEditable
    >
      {content}
    </TitleStyled>
  );
};

export default Title;
