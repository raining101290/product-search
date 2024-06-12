'use client'
import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getProducts } from '../axios/api'
export const AppContext = createContext()
export const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)
  const limit=20

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus('loading')
      try {
        getProducts({limit}).then((response)=>{
          setProducts(response.data)
          setFilteredProducts(response.data)
          setStatus('succeeded')
        }).catch(()=>{
          setError(error.message)
          setStatus('failed')
        })
      } catch (error) {
        setError(error.message)
        setStatus('failed')
      }
    }

    fetchProducts()
    //eslint-disable-next-line
  }, [])

  const filterProducts = (filters) => {
    let filtered = products
    //filter according category
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category)
    }

    //filter according search
    if (filters.searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )
    }

    //filter according price range
    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      )
    }
    setFilteredProducts(filtered)
  }

  return (
    <AppContext.Provider
      value={{
        products,
        filteredProducts,
        search,
        setSearch,
        status,
        error,
        currentPage,
        productsPerPage,
        setCurrentPage,
        filterProducts
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
