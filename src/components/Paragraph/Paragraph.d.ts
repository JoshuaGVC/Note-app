import { ReactNode } from 'react';
export interface IParagraph {
  children: ReactNode;
  onBlur: (data: string) => void;
}
