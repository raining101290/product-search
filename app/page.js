"use client"
import styles from "./page.module.css"
import ProductList from "./components/pages/ProductList"
import { Box, Grid, Paper, TextField } from "@mui/material"
import Filter from "./components/atoms/Filter"
import { useContext, useEffect } from "react"
import { AppContext } from "./context"

export default function Home() {
  const { search, setSearch, filterProducts } = useContext(AppContext)

  useEffect(() => {
    filterProducts({ searchTerm: search })
    //eslint-disable-next-line
  }, [search])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.mainhead}>
        <Box className={styles.search}>
          <TextField
            label="Search Product"
            value={search}
            onChange={handleSearch}
            fullWidth={true}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>
      <Box className={styles.mainBody}>
        <Grid container spacing={4} justifyItems="center">
          <Grid item xs={12} sm={4} md={4}>
            <Paper elevation={1} className={styles.filterCont}>
              <Filter />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <ProductList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
