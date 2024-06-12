import axiosInstance from "./axiosInterceptor"
export async function fetchData(url, params, rest) {
  const response = await axiosInstance.get(url, {
    params,
    ...rest
  })
  return response
}
