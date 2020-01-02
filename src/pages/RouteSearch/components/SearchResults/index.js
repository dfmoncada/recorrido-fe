import React, {useState} from 'react'
import { getTrips } from 'services/api'
import {Button} from '@material-ui/core'
import useStyles from './styles'

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

function SearchResult({filters}) {
  const {trips, handleUpdate} = useSearchResults(filters)
  const classes = useStyles()

  return (
    <>
      <Button
        onClick={handleUpdate}
        className={classes.button}
      >
        Actualizar
      </Button>
      {(trips.length !== 0) ? (
        <>
          {trips.map(t => `${t.time}: ${t.status}`).join(', ')}
        </>
      ) : (
        <div>Haga una busqueda</div>
      )}
    </>
  )
}

export default SearchResult
