import { apiendpoint } from "../config";
import { fetchData } from "./commonAxiosFunctions";

export const getProducts = (params, id) => {
    const url = `${apiendpoint}/products`
    return fetchData(url, params)
}