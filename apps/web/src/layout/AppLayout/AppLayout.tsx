import { FC } from 'react'
import { IAppLayout } from './types'
import { StyledAppWrapper } from './AppLayout.styled'

export const AppLayout: FC<IAppLayout> = ({ children }) => {
  return <StyledAppWrapper>{children}</StyledAppWrapper>
}
