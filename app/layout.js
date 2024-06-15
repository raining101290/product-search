import React, { Suspense } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppContextProvider } from "./context"
import PropTypes from "prop-types"
import { Box } from "@mui/material"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "E-Commerce | Search Product",
  description:
    "Search and place your order quickly and securely. Everything on stock, fast delivery ✔ Official dealer of all offered brands"
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
