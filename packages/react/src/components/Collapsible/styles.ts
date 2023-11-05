import * as Collapsible from '@radix-ui/react-collapsible'
import { styled } from '../../styles'

export const CollapsibleRoot = styled(Collapsible.Root, {})

export const CollapsibleContent = styled(Collapsible.Content, {
  border: '1px solid $gray100',
  padding: '$2',
  borderTop: 0,
})

export const CollapsibleTrigger = styled(Collapsible.Trigger, {})

export const CollapsibleHead = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: '$gray100',
  border: '1px solid $gray100',

  minWidth: '300px',
  height: '$10',
  padding: '0 $2',
})

export const BtnTrigger = styled('div', {
  background: '$white',
  border: 0,
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$8',
  height: '$8',

  borderRadius: '$full',

  svg: {
    width: '14px',
  },
})
