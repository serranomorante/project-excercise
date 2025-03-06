'use client'

/**
 * @import { INotificationContext } from './Notification.types'
 */
import * as React from 'react'

export const NotificationContext = React.createContext(
  /** @type {INotificationContext | undefined} */ (undefined)
)
