
import {
  ecrecover,
  pubToAddress,
  hashPersonalMessage,
  toBuffer,
  fromRpcSig,
  addHexPrefix,
  bufferToHex
} from 'ethereumjs-util'

const verify = async ({ message, address, signature }) => {
  const buf = toBuffer(addHexPrefix(Buffer.from(message).toString('hex')))
  const msgHash = hashPersonalMessage(buf)
  const sigParams = fromRpcSig(signature)
  const publicKey = ecrecover(msgHash, sigParams.v, sigParams.r, sigParams.s)
  const recoveredAddress = bufferToHex(pubToAddress(publicKey))

  return recoveredAddress.toUpperCase() === address.toUpperCase()
}

export default verify
