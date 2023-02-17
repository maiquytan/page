import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_END_POINT || '',
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})
