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
  const { routeId: route_id, ...restParams } = params
  const routeParams = route_id ? { route_id } : {} //should clean nulls instead
  const date = params.date && params.date
    .toISOString()
    .substring(0,10)
  const result = await fetch('/trips', {...restParams, ...routeParams, date})

  return result
}

export {
  getRoutes,
  getTrips,
}
