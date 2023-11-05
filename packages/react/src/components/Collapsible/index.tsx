import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons'
import {
  BtnTrigger,
  CollapsibleContent,
  CollapsibleHead,
  CollapsibleRoot,
  CollapsibleTrigger,
} from './styles'
import { Text } from '../Text'
import { ReactNode } from 'react'

export interface CollapsibleProps {
  initOpen: boolean
  label: string
  setOpen: (open: boolean) => void
  children: ReactNode
}

export function Collapsible({
  initOpen,
  label,
  children,
  setOpen,
}: CollapsibleProps) {
  return (
    <CollapsibleRoot open={initOpen} onOpenChange={setOpen}>
      <CollapsibleHead>
        <Text>{label}</Text>
        <CollapsibleTrigger asChild>
          <BtnTrigger>
            {initOpen ? <Cross2Icon /> : <RowSpacingIcon />}
          </BtnTrigger>
        </CollapsibleTrigger>
      </CollapsibleHead>

      <CollapsibleContent>{children}</CollapsibleContent>
    </CollapsibleRoot>
  )
}

Collapsible.displayName = 'Collapsible'
