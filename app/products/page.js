import React from "react"
import styles from "../page.module.css"
import { Box } from "@mui/material"

import Header from "../components/atoms/Header"
import BodySection from "../components/atoms/BodySection"

export async function generateMetadata() {
  return {
    title: "E-Shop | Search Product",
    description: "Search and place your order quickly and securely."
  }
}

export default function Home() {
  return (
    <Box className={styles.pageContainer}>
      <Header />
      <BodySection />
    </Box>
  )
}
