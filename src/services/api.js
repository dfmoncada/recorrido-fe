import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

async function fetch(route, params = {}) {
  return await axios.get(`${BASE_URL}${route}`, {params})
}

async function getRoutes() {
  const result = await fetch('/routes')

  return result
}

async function getTrips(params) {
  const result = await fetch('/trips', params)

  return result
}

export {
  getRoutes,
  getTrips,
}
