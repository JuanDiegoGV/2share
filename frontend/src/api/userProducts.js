import endpoints from '../config/api'
import axios from 'axios'

export const Gets = async (options = {}) => {

  let params = {}

  Object.keys(options).forEach(key => {
    if (options[key] !== null && options[key] !== '' && options[key] !== undefined) params[key] = options[key]
  })

  const data = await axios.request({
    url: endpoints.userProducts,
    params,
    headers: { Accept: '*/*', 'Content-Type': 'application/json', Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` }
  }).then(res => res.data).catch(err => {
    return Promise.reject(err)
  })

  return data
}

export const Get = async (id) => await axios.request({
  url: endpoints.userProducts + '/' + id,
  headers: { Accept: '*/*', 'Content-Type': 'application/json', Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` }
}).then(res => res.data).catch(err => {
  return Promise.reject(err)
})


export const Post = async (data) => await axios.request({
  method: 'POST',
  url: endpoints.userProducts,
  headers: { Accept: '*/*', 'Content-Type': 'application/json', Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` },
  data
}).then(res => res.data).catch(err => {
  return Promise.reject(err)
})

export const Put = async (id, data) => await axios.request({
  method: 'PUT',
  url: endpoints.userProducts + '/' + id,
  headers: { Accept: '*/*', 'Content-Type': 'application/json', Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` },
  data
}).then(res => res.data).catch(err => {
  return Promise.reject(err)
})

export const Delete = async (id) => await axios.request({
  method: 'DELETE',
  url: endpoints.userProducts + '/' + id,
  headers: { Accept: '*/*', 'Content-Type': 'application/json', Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` }
}).then(res => res.data).catch(err => {
  return Promise.reject(err)
})
