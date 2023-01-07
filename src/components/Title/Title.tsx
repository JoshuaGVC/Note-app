import { FC, FormEvent, useEffect, useState } from 'react';
import { ITitle } from './Title.d';
import { Title as TitleStyled } from './Title.styled';

const Title: FC<ITitle> = ({ textTitle, onBlur }) => {
  const defaultText = 'Una simple nota';
  const [content, setContent] = useState(textTitle);
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
    setContent(textTitle);
    setTextColor(defaultText === textTitle);
  }, [textTitle]);

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
