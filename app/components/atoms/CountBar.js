import React from "react"
import styles from "../../page.module.css"
import { Grid, Paper, Typography } from "@mui/material"
import PropTypes from "prop-types"

const CountBar = ({ count }) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={1} className={styles.countBar}>
        <Typography>Result Found: {count} </Typography>
      </Paper>
    </Grid>
  )
}
CountBar.propTypes = {
  count: PropTypes.number
}
export default CountBar
