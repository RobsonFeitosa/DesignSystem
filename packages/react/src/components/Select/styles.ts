import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectContainer = styled(Select.Root, {
  all: 'unset',
  width: '100%',
  backgroundColor: '$gray900',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',
  '&:[data-state="checked"]': {
    backgroundColor: '$alosix300',
  },
  '&:focus, &:[data-state="checked"]': {
    border: '2px solid $alosix300',
  },
  background: '#f0f',
  height: '$12',
})

export const SelectTrigger = styled(Select.Trigger, {
  width: '100%',
  height: '$12',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 0,
  border: '1px solid $gray200',
  padding: '0 $4',
  background: 'transparent',
  error: {
    true: {
      borderColor: '$alosixR200',
    },
  },
  size: {
    sm: {
      padding: '$2 $3',
      height: '$10',
    },
    md: {
      padding: '$3 $4',
    },
  },
  position: 'relative',
})

export const SelectValue = styled(Select.Value, {})

export const SelectIcon = styled(Select.Icon, {})
export const SelectPortal = styled(Select.Portal, {
  width: '100%',
  // width: '100%',
  // position: 'relative',
  // // top: '100%',
})
export const SelectContent = styled(Select.Content, {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: 'white',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  padding: '$4 0',
})
export const SelectScrollUpButton = styled(Select.ScrollUpButton, {})
export const SelectViewport = styled(Select.Viewport, {})
export const SelectLabel = styled(Select.Label, {})
export const SelectItemContainer = styled(Select.Item, {
  width: '100%',
  fontSize: 13,
  lineHeight: 1,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 30px 0 20px',
  position: 'relative',
  userSelect: 'none',
  '&[data-disabled]': {
    pointerEvents: 'none',
  },
  '&[data-highlighted]': {
    outline: 'none',
  },
})
export const SelectItemText = styled(Select.ItemText, {})
export const SelectGroup = styled(Select.Group, {})
export const SelectScrollDownButton = styled(Select.ScrollDownButton, {})
export const SelectItemIndicator = styled(Select.ItemIndicator, {})
