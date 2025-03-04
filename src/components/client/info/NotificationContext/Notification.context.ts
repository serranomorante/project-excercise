'use client'

import * as React from 'react'
import { INotificationContext } from './Notification.types'

export const NotificationContext = React.createContext<INotificationContext | undefined>(undefined)
