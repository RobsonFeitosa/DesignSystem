import { ComponentProps, ElementRef, forwardRef } from 'react'
import { ArrowDown, ArrowUp, CaretDown, CheckCircle } from 'phosphor-react'
import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItemContainer,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
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
export interface SelectProps extends ComponentProps<typeof SelectRoot> {
  placeholder: string
  options: Option[]
  default: Option
  title: string
  isClean: boolean
}

export function Select(props: SelectProps) {
  const { placeholder } = props

  return (
    <SelectRoot {...props}>
      <SelectTrigger
        className="SelectTrigger"
        onClean={props.isClean}
        aria-label={props.title}
      >
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
              <SelectLabel className="SelectLabel">{props.title}</SelectLabel>
              <SelectItem value="">Selecionar todos</SelectItem>
              {props.options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton className="SelectScrollButton">
            <ArrowDown />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
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
