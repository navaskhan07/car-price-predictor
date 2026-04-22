import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function predictPrice(data) {
  const res = await axios.post(`${API_URL}/predict`, data)
  return res.data
}