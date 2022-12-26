import { FC } from 'react'
import { IRigthColumn } from './RigthColumn.d'
import { Wrapper } from './RigthColumn.styled'

export const RigthColumn:FC <IRigthColumn> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

