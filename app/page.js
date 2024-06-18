import React from "react"
import styles from "./page.module.css"
import { Paper } from "@mui/material"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Paper elevation={1} className={styles.menulink}>
          <Link prefetch={true} href="/products">
            <code className={styles.code}>Go to Products page</code>
          </Link>
        </Paper>
      </div>
    </main>
  )
}
