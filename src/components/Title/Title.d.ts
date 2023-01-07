import { ReactNode } from 'react';
export interface ITitle {
  children: ReactNode;
  onBlur: (data: string) => void;
}
