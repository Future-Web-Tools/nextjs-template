
import { stringify, parse } from '@lib/shared/json'

export const set = (key, value) => {
  stringify({ value })
    .then((data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            window.localStorage.setItem(key, data)
            resolve(true)
          } catch (err) {
            reject(err)
          }
        })
      })
    })
}

export const get = (key) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = window.localStorage.getItem(key)

        if (data && data !== 'undefined') {
          parse(data)
            .then(value => {
              resolve(value.value)
            })
            .catch(err => reject(err))
        } else {
          resolve('')
        }
      } catch (err) {
        reject(err)
      }
    })
  })
}

export const remove = (key) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        window.localStorage.removeItem(key)
        resolve(true)
      } catch (err) {
        reject(err)
      }
    })
  })
}

export const clear = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        window.localStorage.clear()
        resolve(true)
      } catch (err) {
        reject(err)
      }
    })
  })
}

export default { get, set, remove, clear }
