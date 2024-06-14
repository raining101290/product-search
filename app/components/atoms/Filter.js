"use client"
import React, { useState, useContext, useEffect } from "react"
import { AppContext } from "../../context"
import styles from "../../page.module.css"
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
  Slider,
  Paper,
  Box
} from "@mui/material"
import { useRouter } from "next/navigation"

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]

const Filter = () => {
  const { status, search, setSearch, filterProducts } = useContext(AppContext)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [isResetDisabled, setIsResetDisabled] = useState(true)
  const router = useRouter()
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue)
  }

  //enable or disable reset button
  useEffect(() => {
    if (
      selectedCategory ||
      search ||
      priceRange[0] !== 0 ||
      priceRange[1] !== 1000
    ) {
      setIsResetDisabled(false)
    } else {
      setIsResetDisabled(true)
    }
    //eslint-disable-next-line
  }, [selectedCategory, search, priceRange])

  useEffect(() => {
    filterProducts({ category: selectedCategory, priceRange: priceRange })
    //eslint-disable-next-line
  }, [selectedCategory, priceRange])

  const handleReset = () => {
    setSelectedCategory("")
    setSearch("")
    setPriceRange([0, 1000])
    router.push("/products")
    filterProducts({ category: "", searchTerm: "", priceRange: [0, 1000] })
  }

  useEffect(() => {
    if (search && status === "succeeded") {
      filterProducts({ searchTerm: search })
    }
    //eslint-disable-next-line
  }, [search, status])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    router.push("/products?search=" + e.target.value)
  }

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Paper elevation={1} className={styles.filterCont}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography gutterBottom>Filter</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom>Search</Typography>
            <TextField
              label="Search Product"
              value={search}
              onChange={handleSearch}
              fullWidth={true}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} mb={2}>
            <Typography gutterBottom>Category</Typography>
            <TextField
              fullWidth
              select
              label="Select Category"
              value={selectedCategory}
              size="small"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={isResetDisabled}
              variant="text"
              onClick={handleReset}
              fullWidth={true}
            >
              Reset Filter
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Filter
