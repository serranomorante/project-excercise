import { NotificationProvider } from "@/components/client/info/NotificationContext"

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  )
}
