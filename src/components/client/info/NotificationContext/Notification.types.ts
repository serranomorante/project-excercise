export interface INotification {
  message: string
  type: 'error' | 'success' | 'info' | 'default'
}

export interface INotificationContext {
  messages: INotification[]
  notify: (notification: INotification) => void
}

export interface INotificationProviderProps {
  children: React.JSX.Element | React.ReactNode | React.ReactNode[]
}
