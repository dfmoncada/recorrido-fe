import { useState, useEffect } from 'react'
import {getRoutes} from 'services/api'

function useRoutes() {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    const fetchRoutes = async () => {
      const response = await getRoutes()

      setRoutes(response.data)
    }

    fetchRoutes()
  }, [])

  return {
    routes,
  }
}

export default useRoutes
