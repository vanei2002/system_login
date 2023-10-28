// axios-config.js
import axios from 'axios'

const connectService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER, // Substitua pela URL da sua API
  headers: {
    'Content-Type': 'application/json',
    // Outros cabeçalhos de autenticação, se necessário
  },
})

export default connectService
