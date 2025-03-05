'use client'

import * as React from 'react'
import { NotificationContext } from './Notification.context'

export function useNotificationContext() {
  const context = React.useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotificationContext must be used within a NotificationProvider')
  }
  return context
}
