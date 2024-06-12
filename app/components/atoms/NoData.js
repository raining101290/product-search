import React from 'react'
import styles from '../../page.module.css'
import { Paper, Typography } from '@mui/material'
const NoData = ({ message }) => {
  return (
    <Paper elevation={0} className={styles.nodata}>
        <Typography>{message}</Typography>
    </Paper>
  )
}

export default NoData
