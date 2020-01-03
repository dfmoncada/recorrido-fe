import React, {useState} from 'react'
import { getTrips } from 'services/api'
import {Button} from '@material-ui/core'
import useStyles from './styles'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'


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
        <Table>
          <TableHeaders />
          <TableBody>
            {trips.map(t => (
              <TripRow key={t.id} trip={t}/>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div>Haga una busqueda</div>
      )}
    </>
  )
}

function TripRow({trip}) {
  return (
    <TableRow>
      <TableCell>{trip.bus.plate}</TableCell>
      <TableCell>{trip.start_time}</TableCell>
      <TableCell>{trip.end_time}</TableCell>
      <TableCell>{trip.status}</TableCell>
    </TableRow>
  )
}

function TableHeaders() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Patente</TableCell>
        <TableCell>Hora de Salida</TableCell>
        <TableCell>Hora de Llegada</TableCell>
        <TableCell>Estado</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default SearchResult
