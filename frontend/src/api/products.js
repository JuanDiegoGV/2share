import endpoints from '../config/api'
import axios from 'axios'

export const Gets = async (options = {}) => {

  let params = {}

  Object.keys(options).forEach(key => {
    if (options[key] !== null && options[key] !== '' && options[key] !== undefined) params[key] = options[key]
  })

  const data = await axios.request({
    url: endpoints.products,
    params,
    headers: { Accept: '*/*', 'Content-Type': 'application/json', Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` }
  }).then(res => res.data).catch(err => {
    return Promise.reject(err)
  })

  return data
}
