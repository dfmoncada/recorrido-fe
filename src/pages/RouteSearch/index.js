import React, {useState} from 'react'
import DateFnsUtils from '@date-io/date-fns';

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import onChangeAdapter from 'utils/onChangeAdapter'
import SearchResult from './components/SearchResults'

import useRoutes from './useRoutes'
import useStyles from './styles'

const emptyOption = {
  id: 0,
  name: 'Elija una opcion'
}
const initialParams = {
  date: new Date(Date.now() - 86400000),
  routeId: 0,
  plate: null,
}

export default function RouteSearch() {
  const classes = useStyles()
  const [filters, setFilters] = useState(initialParams)
  const onChange = ({target: {name, value}}) => {
    setFilters(state => ({...state, [name]: value}))
  }

  return (
    <>
      <ButtonAppBar filters={filters} onChange={onChange}/>
      <div className={classes.container}>
        <SearchResult filters={filters} />
      </div>
    </>
  )
}
function ButtonAppBar({filters, onChange}) {
  const { routes } = useRoutes()
  const classes = useStyles()

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <AppBar
          className={classes.appBar}
          position="static"
        >
          <Grid container className={classes.container}>
            <Grid item xs={4}>
              <TextField
                className={classes.input}
                label="Ruta"
                name='routeId'
                value={filters.routeId}
                onChange={onChange}
                select
              >
                {[emptyOption, ...routes].map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <KeyboardDatePicker
                className={classes.input}
                variant="inline"
                label="Fecha"
                name="date"
                value={filters.date}
                onChange={onChangeAdapter(onChange, 'date')}
              />
            </Grid>
            <Grid>
              <TextField
                label="Patente"
                name="plate"
                value={filters.plate || ""}
                onChange={onChange}
              />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    </MuiPickersUtilsProvider>
  )
}
