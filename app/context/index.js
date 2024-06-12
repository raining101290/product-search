"use client"
import React, { createContext, useCallback, useMemo, useState } from "react"
import PropTypes from "prop-types"
import useProducts from "../customHooks/useProducts"

export const AppContext = createContext()
export const AppContextProvider = ({ children }) => {
  //custom hook to get products
  const {
    products,
    filteredProducts,
    status,
    error,
    setFilteredProducts,
    setError
  } = useProducts()

  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)

  //Function to filter products from the api result
  const filterProducts = useCallback(
    (filters) => {
      let filtered = products
      if (filters.category) {
        filtered = filtered.filter(
          (product) => product.category === filters.category
        )
      }
      if (filters.searchTerm) {
        filtered = filtered.filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(filters.searchTerm.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(filters.searchTerm.toLowerCase())
        )
      }
      if (filters.priceRange) {
        filtered = filtered.filter(
          (product) =>
            product.price >= filters.priceRange[0] &&
            product.price <= filters.priceRange[1]
        )
      }
      setFilteredProducts(filtered)
    },
    [products, setFilteredProducts]
  )

  const contextValue = useMemo(
    () => ({
      products,
      filteredProducts,
      search,
      setSearch,
      status,
      error,
      setError,
      currentPage,
      productsPerPage,
      setCurrentPage,
      filterProducts
    }),
    //eslint-disable-next-line
    [
      products,
      filteredProducts,
      search,
      status,
      error,
      currentPage,
      productsPerPage,
      filterProducts
    ]
  )

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
