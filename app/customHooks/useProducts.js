import { useState, useEffect, useRef } from "react"
import { getProducts } from "../axios/api"
import { limit } from "../config"

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [status, setStatus] = useState("loading")
  const [error, setError] = useState(null)
  const hasFetched = useRef(false)

  const fetchProducts = async () => {
    setStatus("loading")
    try {
      const response = await getProducts({ limit })
      setProducts(response.data)
      setFilteredProducts(response.data)
      setStatus("succeeded")
    } catch (error) {
      setError(error.message)
      setStatus("failed")
    }
  }

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true
      fetchProducts()
    }
  }, [])

  return {
    products,
    filteredProducts,
    status,
    error,
    setFilteredProducts,
    setError
  }
}

export default useProducts
