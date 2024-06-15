import React, { Suspense } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppContextProvider } from "./context"
import PropTypes from "prop-types"
import { Box } from "@mui/material"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "E-Shop | Home",
  description: "E-Shop is a largest shopers platform"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box>
          <Suspense>
            <AppContextProvider>{children}</AppContextProvider>
          </Suspense>
        </Box>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.any
}
