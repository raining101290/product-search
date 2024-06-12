import React, { useContext } from 'react'
import styles from '../../page.module.css'
import { Box, Pagination } from '@mui/material'
import { AppContext } from '@/app/context'

const PaginationComponent = () => {
  const { 
    filteredProducts, 
    currentPage, 
    productsPerPage, 
    setCurrentPage 
  } = useContext(AppContext)

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage)

  const handleChange = (event, value) => {
    setCurrentPage(value)
  }
  return (
    <>
    {filteredProducts.length > 0 && 
      <Box className={styles.pagination}>
        <Pagination
          color="primary"
          variant='outlined'
          count={pageCount}
          page={currentPage}
          onChange={handleChange}
          hidePrevButton 
          hideNextButton
        />
      </Box>
    }
    </>
  )
}

export default PaginationComponent
