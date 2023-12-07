import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import {
  ArrowDown,
  ArrowUp,
  CaretDown,
  Check,
  CheckCircle,
} from 'phosphor-react'
import {
  SelectContainer,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItemContainer,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './styles'
import { SelectItemIndicator } from '@radix-ui/react-select'

interface Option {
  label: string
  value: string
}
export interface SelectProps extends ComponentProps<typeof SelectContainer> {
  placeholder: string
  options: Option[]
  default: Option
}

export function Select(props: SelectProps) {
  const { placeholder } = props

  return (
    <SelectContainer {...props} open={true}>
      <SelectTrigger className="SelectTrigger" aria-label="Food">
        <SelectValue placeholder={placeholder} />
        <SelectIcon className="SelectIcon">
          <CaretDown />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent className="SelectContent" position="popper">
          <SelectScrollUpButton className="SelectScrollButton">
            <ArrowUp />
          </SelectScrollUpButton>
          <SelectViewport className="SelectViewport">
            <SelectGroup>
              <SelectLabel className="SelectLabel">Fruits</SelectLabel>
              <SelectItem value="beef">Beef</SelectItem>
              <SelectItem value="chicken">Chicken</SelectItem>
              <SelectItem value="lamb">Lamb</SelectItem>
              <SelectItem value="pork">Pork</SelectItem>
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton className="SelectScrollButton">
            <ArrowDown />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectContainer>
  )
}

export type SelectItemProps = ComponentProps<typeof SelectItemContainer>

const SelectItem = forwardRef<
  ElementRef<typeof SelectItemContainer>,
  SelectItemProps
>(({ children, ...props }: SelectItemProps, forwardedRef) => {
  return (
    <SelectItemContainer {...props} ref={forwardedRef}>
      <SelectItemText>{children}</SelectItemText>
      <SelectItemIndicator>
        <CheckCircle />
      </SelectItemIndicator>
    </SelectItemContainer>
  )
})

SelectItem.displayName = 'SelectItem'
Select.displayName = 'Select'
