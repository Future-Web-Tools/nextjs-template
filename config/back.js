
// WARNING: backend-access only!!!!

export const API_BASE = '/api'
export const NONCE_TEMPLATE = 'My one time nonce is: _'

export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_EXPIRATION_HOURS = parseInt(process.env.JWT_EXPIRATION_HOURS)

export const NETWORK_ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:8545' : ''
