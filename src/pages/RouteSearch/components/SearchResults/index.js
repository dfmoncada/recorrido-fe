import React, {useState, useEffect} from 'react'
import { getTrips } from 'services/api

function useSearchResults(params) {
  const [trips, setTrips] = useState([])

  const handleUpdate = async () => {
    const result = await getTrips(params)

    setTrips(result.data)
  }

  return {
    trips,
    handleUpdate,
  }
}

export default useSearchResults
