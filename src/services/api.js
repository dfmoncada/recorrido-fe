import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

async function fetch(route, params) {
  const string_params = params || "" //setup params translate

  return await axios.get(`${BASE_URL}${route}?${string_params}`)
}

async function getRoutes() {
  const result = await fetch('/routes')

  return result
}

export {
  getRoutes,
}
