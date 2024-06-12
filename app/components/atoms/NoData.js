import React from "react"
import styles from "../../page.module.css"
import { Paper, Typography } from "@mui/material"
import PropTypes from "prop-types"

const NoData = ({ message }) => {
  return (
    <Paper elevation={1} className={styles.nodata}>
      <Typography>{message}</Typography>
    </Paper>
  )
}

NoData.propTypes = {
  message: PropTypes.number
}
export default NoData
