import React from "react"
import styles from "../../page.module.css"
import { Box, Grid } from "@mui/material"
import Filter from "./Filter"
import ProductList from "../pages/ProductList"

function BodySection() {
  return (
    <Box className={styles.mainBody}>
      <Grid container spacing={4} justifyItems="center">
        <Filter />
        <ProductList />
      </Grid>
    </Box>
  )
}

export default BodySection
