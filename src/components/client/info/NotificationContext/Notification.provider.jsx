'use client'

import * as React from 'react'
import { NotificationContext } from "./Notification.context";
import { Toast } from '@/design-system/info';
import { Text } from '@/design-system/atoms';

/**
 * @param {import('./Notification.types').INotificationProviderProps} props
 */
export function NotificationProvider({ children }) {
  const [messages, setMessages] = React.useState(/** @type {import('./Notification.types').INotification[]} */ ([]))

  /**
   * @param {import('./Notification.types').INotification} notification
   */
  function notify(notification) {
    if (messages.find(msg => msg.message === notification.message)) return
    setMessages(prev => [...prev, { message: notification.message, type: notification.type }])
    setTimeout(() => setMessages(prev => prev.slice(0, messages.length - 1)), 3000)
  }

  return (
    <NotificationContext.Provider value={{ messages, notify }}>
      {children}
      <div>{messages.map(renderNotification)}</div>
    </NotificationContext.Provider>
  )

  /**
   * @param {import('./Notification.types').INotification} notification
   * @param {number} index
   */
  function renderNotification({ message, type }, index) {
    return (
      <Toast key={`toast-${index}`} type={type} state={type}>
        <Text size='md'>{message}</Text>
      </Toast>
    )
  }
}
