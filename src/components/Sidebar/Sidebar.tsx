import { FC } from 'react'
import { ISidebar } from './Sidebar.d'
import { Wrapper } from './Sidebar.styled'

const Sidebar: FC<ISidebar> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Sidebar