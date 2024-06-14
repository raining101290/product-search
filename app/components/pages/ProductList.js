"use client"
import React, { useContext } from "react"
import { AppContext } from "../../context"
import ProductCard from "../atoms/ProductCard"
import { Grid, Skeleton } from "@mui/material"
import PaginationComponent from "../atoms/Pagination"
import NoData from "../atoms/NoData"
import CountBar from "../atoms/CountBar"
import Link from "next/link"

const ProductList = () => {
  const { filteredProducts, status, error, currentPage, productsPerPage } =
    useContext(AppContext)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )
  //generate the skeleton
  const generateSkeletons = (number) => {
    const skeletons = []
    for (let i = 0; i < number; i++) {
      skeletons.push(
        <Grid key={i} item xs={6} md={3}>
          <Skeleton variant="rounded" width="100%" height={200} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Grid>
      )
    }
    return skeletons
  }

  const renderContent = () => {
    if (status === "loading") {
      return generateSkeletons(8)
    } else if (status === "succeeded") {
      return currentProducts.length > 0 ? (
        currentProducts.map((product, index) => (
          <Grid item key={product.id} xs={6} sm={4} md={3}>
            <Link href={`/products/${product.id}`}>
              <ProductCard key={index} product={product} />
            </Link>
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
    <Grid item xs={12} sm={8} md={8}>
      <Grid container spacing={2}>
        <CountBar count={filteredProducts.length} />
        {renderContent()}
      </Grid>
      {status === "succeeded" && currentProducts.length > 0 && (
        <PaginationComponent />
      )}
    </Grid>
  )
}

export default ProductList
