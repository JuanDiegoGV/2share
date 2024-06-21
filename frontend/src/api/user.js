import endpoints from '../config/api'
import axios from 'axios'

export const Post = async (data) => await axios.request({
  method: 'POST',
  url: endpoints.user,
  headers: { Accept: '*/*', 'Content-Type': 'application/json'},
  data
}).then(res => res.data).catch(err => {
  return Promise.reject(err)
})
