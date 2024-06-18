import React, { Suspense } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppContextProvider } from "./context"
import PropTypes from "prop-types"
import { Box } from "@mui/material"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "E-Shop | Home",
  description: "E-Shop is a largest shopers platform"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="E-Shop online platform" />
        <meta
          property="og:description"
          content="E-Shop is a largest shoppers platform"
        />
        <meta property="og:image" content="/logo.webp" />
        <meta
          property="og:url"
          content="https://product-search-weld.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Shop online platform" />
        <meta
          name="twitter:description"
          content="E-Shop is a largest shoppers platform"
        />
        <meta name="twitter:image" content="/logo.webp" />
      </Head>
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
