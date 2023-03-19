import api from "./api"
import {
  FsListResp,
  LoginResp,
  MdResp,
  RegisterResp,
  ResourceResp,
  Resp,
  SupportFormatFilesResp,
} from "@/types/Resp"
const { get, post } = api
const baseUrl = "http://127.0.0.1:5174/api"

export const getFolder = async (
  url: string,
  recur: boolean = true
): Promise<FsListResp> => {
  return await get(`${baseUrl}/stat`, {
    params: {
      pathname: url,
      recur: recur ? 1 : 0,
    },
  }).then((response) => response.json())
}

export const getResource = async (url: string): Promise<ResourceResp> => {
  return await get(`${baseUrl}/resource`, {
    params: {
      url,
    },
  }).then((response) => response.json())
}

export const login = async ({
  user,
  pwd,
}: {
  user: string
  pwd: string
}): Promise<LoginResp> => {
  return await post(`${baseUrl}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ user, pwd }),
  }).then((response) => response.json())
}

export const logout = async () => {
  return await post(`${baseUrl}/logout`)
}
export const register = async ({
  user,
  pwd,
}: {
  user: string
  pwd: string
}): Promise<RegisterResp> => {
  return await post(`${baseUrl}/register`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ user, pwd }),
  }).then((response) => response.json())
}

// TODO
export const getMe = async (user: string) => {
  return await get(`${baseUrl}/me/${user}`)
}

export const getMD = async (url: string): Promise<MdResp> => {
  return await get(url).then(async (response) => ({
    status: response.status,
    data: {
      mdText: await response.text(),
    },
  }))
}

export const deleteFile = async (url: string, token: string): Promise<Resp> => {
  return await post(`${baseUrl}/delete`, {
    headers: {
      authentication: token,
    },
    body: JSON.stringify({ url }),
  }).then((response) => response.json())
}
export const renameFile = async (url: string, token: string): Promise<Resp> => {
  return await post(`${baseUrl}/rename`, {
    headers: {
      authentication: token,
    },
    body: JSON.stringify({ url }),
  }).then((response) => response.json())
}

export const getSupportFiles = async (
  dir: string,
  formatExtName: string[]
): Promise<SupportFormatFilesResp> => {
  return await post(`${baseUrl}/supportfiles`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formatExtName, dir }),
  }).then((response) => response.json())
}

// export const getFolderImagesList = async (
//   dir: string,
//   formatExtName: string[]
// ): Promise<FolderImageListResp> => {
//   return await post(`${baseUrl}/folderimageslist`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ formatExtName, dir }),
//   }).then((response) => response.json())
// }
