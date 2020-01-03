import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import { getTrips } from 'services/api'
import TripDialog from './components/TripModal'
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
function useSelectTrip() {
  const [trip, setTrip] = useState(null)

  const handleClick = trip =>
    setTrip(trip)

  const handleUnclick = () =>
    setTrip(null)

  return {
    trip,
    handleClick,
    handleUnclick,
  }
}

function SearchResult({filters}) {
  const {trips, handleUpdate} = useSearchResults(filters)
  const {trip, handleClick, handleUnclick} = useSelectTrip(trips)
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
              <TripRow
                key={t.id}
                trip={t}
                onClick={handleClick}
              />
            ))}
          </TableBody>
        </Table>
      ) : (
        <div>Haga una busqueda</div>
      )}
      { trip &&
        <TripDialog
          onClose={handleUnclick}
          trip={trip}
        />
      }
    </>
  )
}

function TripRow({trip, onClick}) {
  return (
    <TableRow onClick={() => onClick(trip)}>
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
