
const client = async (url, options = {}) => {
  try {
    const request = { method: options.method || 'GET' }

    if (options.headers) {
      request.headers = options.headers
    } else {
      request.headers = {}
    }

    if (options.auth) {
      request.headers = {
        ...request.headers,
        authorization: options.auth
      }
    }

    if (request.method !== 'GET' && options.body) {
      request.body = options.raw ? options.body : JSON.stringify(options.body)
    }

    if (request.method === 'GET' && options.params) {
      const query = Object.keys(options.params)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(options.params[key]))
        .join('&')

      url = url + '?' + query
    }

    const response = await fetch(url, request)
    const { status } = response
    let result

    try {
      result = await response.json()
    } catch (err) {
    }

    if (!result) {
      try {
        result = await response.text()
        result = { message: result }
      } catch (err) {
      }
    }

    if (!result) {
      try {
        result = await response.blob()
        result = { blob: result }
      } catch (err) {
      }
    }

    return { success: response.ok, status, data: result }
  } catch (err) {
    console.error(err)
    return { message: 'Request failed' }
  }
}

export default client
