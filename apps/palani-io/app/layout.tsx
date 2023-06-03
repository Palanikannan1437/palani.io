import { ThemeProvider } from '@/components/theme-provider'
import '@/app/globals.css'
import { Navbar } from '@/components/ui/navbar'

export const metadata = {
  title: "M. Palanikannan",
  description: "Palanikannan's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className='mx-48'>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html >
  )
}
