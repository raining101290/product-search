import React, { useContext } from "react"
import styles from "../../page.module.css"
import { Pagination, Paper } from "@mui/material"
import { AppContext } from "@/app/context"

const PaginationComponent = () => {
  const { filteredProducts, currentPage, productsPerPage, setCurrentPage } =
    useContext(AppContext)

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage)

  const handleChange = (event, value) => {
    setCurrentPage(value)
  }
  return (
    <>
      {filteredProducts.length > 0 && (
        <Paper elevation={1} className={styles.pagination}>
          <Pagination
            color="primary"
            variant="outlined"
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
          />
        </Paper>
      )}
    </>
  )
}

export default PaginationComponent
