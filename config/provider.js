
import Web3 from 'web3'

import abi from '@config/abi'
import { CONTRACT_ADDRESS, SUPPORTED_NETWORK_CHAIN_IDS } from '@config/shared'
let web3

export const providerConnect = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum)

        if (window.ethereum.enable) {
          await window.ethereum.enable()
        } else {
          await window.ethereum.request({ method: 'eth_requestAccounts' })
        }
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider)
      } else {
        const errorMessage = 'Non-Ethereum browser detected. Please install MetaMask plugin'
        window.alert(errorMessage)
        reject(new Error(errorMessage))
      };

      const chainId = await web3.eth.getChainId()

      if (SUPPORTED_NETWORK_CHAIN_IDS.includes(chainId)) {
        const [address] = await web3.eth.getAccounts()
        window.globalProvider = web3

        resolve({ address })
      } else {
        throw new Error('Invalid chain')
      }
    } catch (err) {
      reject(err)
    }
  })
}

export const providerSign = ({ address, data }) => {
  return new Promise((resolve, reject) =>
    window.globalProvider.eth.personal.sign(window.globalProvider.utils.utf8ToHex(data), address, (err, signature) => {
      if (err) return reject(err)
      return resolve({ address, signature })
    })
  )
}

export const providerContract = () => {
  if (window.globalProvider) {
    const contract = new window.globalProvider.eth.Contract(abi, CONTRACT_ADDRESS)
    return contract
  } else {
    return null
  }
}
