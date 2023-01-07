import { FC } from 'react';
import Paragraph from '../Paragraph';
import Title from '../Title';
import { INote } from './Note.d';

const RenderNote: FC<INote> = ({ title, paragraph, onBlur }) => {
  const onBlurTitle = (data: string) => {
    onBlur(data, 'title');
  };

  const onBlurParagraph = (data: string) => {
    onBlur(data, 'paragraph');
  };

  return (
    <>
      <Title onBlur={onBlurTitle}>{title}</Title>
      <Paragraph onBlur={onBlurParagraph}>{paragraph}</Paragraph>
    </>
  );
};

export default RenderNote;
