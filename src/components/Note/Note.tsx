import { FC } from 'react';
import Paragraph from '../Paragraph';
import TitleEdit from '../Title';
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
      <TitleEdit textTitle={title} onBlur={onBlurTitle} />
      <Paragraph textPragraph={paragraph} onBlur={onBlurParagraph} />
    </>
  );
};

export default RenderNote;
