import { useState, useEffect } from 'react'

function useRoutes() {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    // placeholder for fetching routes
    setRoutes([])
  }, [])

  return {
    routes,
  }
}

export default useRoutes
