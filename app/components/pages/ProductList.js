import React, { useContext } from "react"
import { AppContext } from "../../context"
import ProductCard from "../atoms/ProductCard"
import { Grid, Skeleton } from "@mui/material"
import PaginationComponent from "../atoms/Pagination"
import NoData from "../atoms/NoData"
import CountBar from "../atoms/CountBar"

const ProductList = () => {
  const { filteredProducts, status, error, currentPage, productsPerPage } =
    useContext(AppContext)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )
  console.log(
    "filteredProducts",
    filteredProducts,
    indexOfFirstProduct,
    indexOfLastProduct
  )
  //generate the skeleton
  const generateSkeletons = (number) => {
    const skeletons = []
    for (let i = 0; i < number; i++) {
      skeletons.push(
        <Grid key={i} item xs={6} sm={4} md={3}>
          <Skeleton variant="rounded" width="100%" height={200} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="rounded" width="100%" height={40} />
        </Grid>
      )
    }
    return skeletons
  }

  const renderContent = () => {
    if (status === "loading") {
      return generateSkeletons(4)
    } else if (status === "succeeded") {
      return currentProducts.length > 0 ? (
        currentProducts.map((product, index) => (
          <Grid item key={product.id} xs={6} sm={4} md={3}>
            <ProductCard key={index} product={product} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <NoData message="No Product Found" />
        </Grid>
      )
    } else if (status === "failed") {
      return <div>{error}</div>
    }
  }

  return (
    <>
      <Grid container spacing={2}>
        <CountBar count={filteredProducts.length} />
        {renderContent()}
      </Grid>
      {status === "succeeded" && currentProducts.length > 0 && (
        <PaginationComponent />
      )}
    </>
  )
}

export default ProductList
