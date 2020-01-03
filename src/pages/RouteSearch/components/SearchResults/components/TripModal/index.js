import React, {useState} from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core'

function useModal({onClose}) {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return {
    open,
    handleClose,
  }
}

function TripDialog({trip, onClose}) {
  const {open, handleClose} = useModal({onClose})

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <strong>{trip.bus.plate}</strong>:
        {trip.start_time}
      </DialogTitle>
      <DialogContent>
        Content Placeholder
      </DialogContent>
    </Dialog>
  )
}

export default TripDialog
