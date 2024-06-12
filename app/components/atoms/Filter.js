import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from "../../context"
import { TextField, MenuItem, Button, Grid, Typography, Slider } from '@mui/material'

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]

const Filter = () => {
  const { search, setSearch, filterProducts } = useContext(AppContext)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [isResetDisabled, setIsResetDisabled] = useState(true);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue)
  }

  //enable or disable reset button
  useEffect(() => {
    if (selectedCategory || search || (priceRange[0] !== 0 || priceRange[1] !== 1000)) {
      setIsResetDisabled(false);
    } else {
      setIsResetDisabled(true);
    }
    //eslint-disable-next-line
  }, [selectedCategory, search, priceRange]);


  useEffect(()=>{
    filterProducts({ category: selectedCategory, priceRange:priceRange })
    //eslint-disable-next-line
  }, [selectedCategory, priceRange])

  const handleReset = () => {
    setSelectedCategory('');
    setSearch('');
    setPriceRange([0, 1000]);
    filterProducts({ category: '', searchTerm: '', priceRange: [0, 1000] });
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography gutterBottom>Filter</Typography>
      </Grid>
      <Grid item xs={12} mb={2}>
        <TextField
          fullWidth
          select
          label="Select Category"
          value={selectedCategory}
          size='small'
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
  )
}

export default Filter
