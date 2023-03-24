import { StyledFormTitle } from './Title.styled'
import { Text } from '@components'
import { LABELS } from './utils/labels'

export const Title = () => {
  return (
    <StyledFormTitle>
      <Text variant={'h4'}>{LABELS.title}</Text>
    </StyledFormTitle>
  )
}
