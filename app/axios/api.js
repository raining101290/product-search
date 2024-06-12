import { BASE_URL } from "../config"
import { fetchData } from "./commonAxiosFunctions"

export const getProducts = (params) => {
  const url = `${BASE_URL}/products`
  return fetchData(url, params)
}
