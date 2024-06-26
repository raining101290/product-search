import React from "react"
import styles from "../../page.module.css"
import { Box, Card, CardContent, Tooltip, Typography } from "@mui/material"
import Image from "next/image"
import PropTypes from "prop-types"

const ProductCard = ({ product }) => {
  return (
    <Box className={styles.cardCont}>
      <Card className={styles.gridItem}>
        <Box className={styles.imageContainer}>
          <Image
            src={product?.image ? product.image : ""}
            alt={product?.name ? product.name : ""}
            width={200}
            height={300}
            layout="responsive"
            priority={true}
          />
        </Box>
        <CardContent className={styles.details}>
          <Tooltip title={product?.title} arrow={true} placement="top">
            <Typography gutterBottom variant="h5" className={styles.wraptext}>
              {product?.title}
            </Typography>
          </Tooltip>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.price}
          >
            ${product?.price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.wraptext}
          >
            {product?.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
ProductCard.propTypes = {
  product: PropTypes.object
}
export default ProductCard
