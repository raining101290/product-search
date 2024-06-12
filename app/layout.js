import { Inter } from "next/font/google"
import "./globals.css"
import { AppContextProvider } from "./context"

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
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  )
}
