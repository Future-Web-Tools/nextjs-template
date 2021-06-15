
// WARNING: use for both frontend and backend

export const NODE_ENV = process.env.NODE_ENV

export const DEV_ENV = NODE_ENV === 'development'

export const CONTRACT_ADDRESS = DEV_ENV ? '' : ''

export const CONTRACT_DEPLOYER = DEV_ENV ? '' : ''

export const SUPPORTED_NETWORK_CHAIN_IDS = [1337, 1, 3, 4, 5, 56, 97, 321, 322]

export const ABSOLUTE_API_PATH = DEV_ENV ? 'http://localhost:3000' : ''
