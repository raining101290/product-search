import React from 'react'
import styles from '../../page.module.css'
import { Grid, Paper, Typography } from '@mui/material'

const SortingBar = ({ count }) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={0} className={styles.sortbar}>
        <Typography>Result Found: {count} </Typography>
      </Paper>
    </Grid>
  )
}

export default SortingBar
