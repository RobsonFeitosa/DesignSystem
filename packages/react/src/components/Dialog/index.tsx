import { ReactNode } from 'react'
import { X } from 'phosphor-react'

import {
  CloseButton,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from './styles'

export interface DialogProps {
  children: ReactNode
  title: string
  borderRadius?: number
  container?: HTMLElement | undefined | null
  offClosed?: boolean
  mode?: 'ligth' | 'dark'
}

export function Dialog({
  children,
  title,
  container,
  borderRadius,
  offClosed = false,
  mode,
}: DialogProps) {
  return (
    <DialogPortal container={container}>
      <DialogOverlay />
      <DialogContent mode={mode ?? 'ligth'} style={{ borderRadius }}>
        <DialogTitle>{title}</DialogTitle>

        {!offClosed && (
          <CloseButton asChild>
            <X />
          </CloseButton>
        )}

        {children}
      </DialogContent>
    </DialogPortal>
  )
}

Dialog.displayName = 'Dialog'
