import { reqHandler } from './http-helper'
import config from '../configs/config'

const { url: apiAddress, apiPrefix } = config

export const getMany = async ({ ...reqProps }) => {
  const { apiEndpoint, query, token, csrfToken } = reqProps
  const resp = await reqHandler({
    url: `${apiAddress}/${apiPrefix}/${apiEndpoint}` + (query ? `${query}` : ''),
    token: token || { 'X-CSRF-TOKEN': csrfToken },
    ...reqProps,
  })
  return resp
}

export const getSingle = async ({ ...reqProps }) => {
  const { apiEndpoint, query, id, token, csrfToken } = reqProps
  const resp = await reqHandler({
    url: `${apiAddress}/${apiPrefix}/${apiEndpoint}/${id}` + (query ? `${query}` : ''),
    token: token || { 'X-CSRF-TOKEN': csrfToken },
    ...reqProps,
  })
  return resp
}

export const post = async ({ ...reqProps }) => {
  const { apiEndpoint, query, data, token, csrfToken } = reqProps
  const resp = await reqHandler({
    url: `${apiAddress}/${apiPrefix}/${apiEndpoint}` + (query ? `${query}` : ''),
    token: token || { 'X-CSRF-TOKEN': csrfToken },
    method: 'POST',
    body: data,
    ...reqProps,
  })
  return resp
}

export const putSingle = async ({ ...reqProps }) => {
  const { apiEndpoint, query, id, data, token, csrfToken } = reqProps
  const resp = await reqHandler({
    url: `${apiAddress}/${apiPrefix}/${apiEndpoint}/${id}` + (query ? `${query}` : ''),
    token: token || { 'X-CSRF-TOKEN': csrfToken },
    method: 'PUT',
    body: data,
    ...reqProps,
  })
  return resp
}

export const deleteSingle = async ({ ...reqProps }) => {
  const { apiEndpoint, query, id, token, csrfToken } = reqProps
  const resp = await reqHandler({
    url: `${apiAddress}/${apiPrefix}/${apiEndpoint}/${id}` + (query ? `${query}` : ''),
    token: token || { 'X-CSRF-TOKEN': csrfToken },
    method: 'DELETE',
    ...reqProps,
  })
  return resp
}

// export const crudRequest = async ({ ...reqProps }) => {
//   let url

//   if (method === 'GET' || (method === 'POST' && data)) {
//     // GET MANY or POST
//     url = `${apiAddress}/${apiPrefix}/${apiEndpoint}` + (query ? `${query}` : '')
//   } else if (data && id && method === 'PUT') {
//     // PUT
//     url = `${apiAddress}/${apiPrefix}/${apiEndpoint}/${id}` + (query ? `${query}` : '')
//   } else if (id && (method === 'GET' || method === 'PUT' || method === 'DELETE')) {
//     // GET SINGLE or DELETE
//     url = `${apiAddress}/${apiPrefix}/${apiEndpoint}/${id}` + (query ? `${query}` : '')
//   }

//   const resp = await reqHandler({
//     url: `${url}/${apiPrefix}/${apiEndpoint}/${id}` + (query ? `${query}` : ''),
//     ...reqProps,
//   })
//   return resp
// }
