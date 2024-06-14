import PropTypes from "prop-types"
import React from "react"
import styles from "../../page.module.css"
import { Box, Link, Paper, Typography } from "@mui/material"

import Image from "next/image"
import { getSingleProduct } from "@/app/axios/api"
import NoData from "@/app/components/atoms/NoData"
import Header from "@/app/components/atoms/Header"

export async function generateMetadata({ params }) {
  const { id } = params
  const product = await getSingleProduct(id)

  return {
    title: product.data.title,
    description: product.data.description
  }
}

const ProductDetails = async ({ params }) => {
  const { id } = params
  const product = await getSingleProduct(id)

  return (
    <>
      <Box className={styles.pageContainer}>
        <Header />
        {product.data ? (
          <Paper elevation={1} className={styles.singlePage}>
            <Image
              src={product.data.image ? product.data.image : ""}
              alt={product.data.name ? product.data.name : ""}
              width={200}
              height={300}
              priority={true}
            />
            <Typography variant="h4" component="h1" gutterBottom>
              {product.data.title}
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              ${product.data.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.data.description}
            </Typography>
          </Paper>
        ) : (
          <Paper elevation={1} className={styles.singlePage}>
            <NoData message={"No data found"} />
            <Box
              style={{ display: "flex", justifyContent: "center", padding: 16 }}
            >
              <Link href="/products">Go Back</Link>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  )
}

ProductDetails.propTypes = {
  params: PropTypes.object,
  searchParams: PropTypes.any,
  parent: PropTypes.any
}

export default ProductDetails
