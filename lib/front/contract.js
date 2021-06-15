
import { providerContract } from '@config/provider'

export const testContract = async ({ auth, data }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const contract = providerContract()

      contract.methods.greet() // call your contract's functions
        .send({ from: data.address })
        .on('error', function (error) { reject(error) })
        .on('transactionHash', function (transactionHash) {
          resolve({ success: true, hash: transactionHash })
        })
        // .on('receipt', function (receipt) { })
        // .on('confirmation', function (confirmationNumber, receipt) { })
        // .then(function (data) { })
    } catch (err) {
      reject(err)
    }
  })
}
