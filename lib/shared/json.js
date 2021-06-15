
export const parse = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = JSON.parse(data)
        resolve(result)
      } catch (err) {
        reject(err)
      }
    })
  })
}

export const stringify = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = JSON.stringify(data)
        resolve(result)
      } catch (err) {
        reject(err)
      }
    })
  })
}

export default { parse, stringify }
