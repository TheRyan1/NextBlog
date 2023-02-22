'use client';
import { ThemeProvider,CssBaseline  } from '@mui/material';
import theme from '../Theme'
import NavBar from '@/components/NavBar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      

      <body>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        {children}
        </ThemeProvider>
        </body>
    
    </html>
  )
}
