import { FC } from 'react'
import { IWrapperGeneral } from './WrapperGeneral.d';
import { Wrapper } from './WrapperGeneral.styled';


const WrapperGeneral: FC <IWrapperGeneral>= ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default WrapperGeneral