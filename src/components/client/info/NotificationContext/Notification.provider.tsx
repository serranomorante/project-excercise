'use client'

import * as React from 'react'
import { NotificationContext } from "./Notification.context";
import { Toast } from '@/design-system/info';
import { INotification, INotificationProviderProps } from './Notification.types';
import { Text } from '@/design-system/atoms';

export function NotificationProvider({ children }: INotificationProviderProps) {
  const [messages, setMessages] = React.useState<INotification[]>([])

  function notify(notification: INotification) {
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

  function renderNotification({ message, type }: INotification, index: number) {
    return (
      <Toast key={`toast-${index}`} type={type} state={type}>
        <Text size='md'>{message}</Text>
      </Toast>
    )
  }
}
