import React from 'react'
import useRoutes from './useRoutes'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import useStyles from './styles'


function ButtonAppBar() {
  const { routes } = useRoutes()
  const classes = useStyles()

  return (
    <div>
      <AppBar
        className={classes.appBar}
        position="static"
      >
        <TextField
          className={classes.input}
          label="Rutas"
          select
        >
          {routes.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </AppBar>
    </div>
  );
}

export default function RouteSearch() {
  return (
    <>
      <ButtonAppBar />
      <div>route search placeholder</div>
      <div>
      </div>
    </>
  )
}
