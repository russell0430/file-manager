import api from "./api"

const { get, post } = api
const baseUrl = "http://localhost:5174"

export const getFolder = async (url: string) => {
  return await get(`${baseUrl}/folder`, { params: { folder: url } })
}

export const getInfo = async (url: string) => {
  return await get(`${baseUrl}/info`, {
    params: {
      url,
    },
  })
}

export const getResource = async (url: string) => {
  return await get(`${baseUrl}/resource`, {
    params: {
      resource: url,
    },
  })
}

export const getTotalFolder = async (url: string, recur: boolean = true) => {
  // baseUrl/totalfolder?folder=..
  return await get(`${baseUrl}/totalfolder`, {
    params: {
      folder: url,
      recur,
    },
  })
}
