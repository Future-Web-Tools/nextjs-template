// http://vancelucas.com/blog/stronger-encryption-and-decryption-in-node-js/

import crypto from 'crypto'
const IV_LENGTH = 16 // For AES, this is always 16

// key must be 256 bytes (32 characters)

function keyer (key) {
  const dummyText = '3tmDQBV%:a<_~fd9f4B^EU`F'
  const realLen = 32
  const len = key.length

  if (len < 8) throw new Error('Len must be atleast 8 charators long.')

  if (len === realLen) return key

  const remLen = realLen - len
  return dummyText.substr(0, remLen) + key
}

export const encrypt = function (text, key) {
  text = typeof text === 'string' ? text : JSON.stringify(text)
  key = keyer(key)

  const iv = crypto.randomBytes(IV_LENGTH)
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
  let encrypted = cipher.update(text)

  encrypted = Buffer.concat([encrypted, cipher.final()])

  return iv.toString('hex') + ':' + encrypted.toString('hex')
}

export const decrypt = function (text, key) {
  key = keyer(key)
  const textParts = text.split(':')
  const iv = Buffer.from(textParts.shift(), 'hex')
  const encryptedText = Buffer.from(textParts.join(':'), 'hex')
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
  let decrypted = decipher.update(encryptedText)

  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}
