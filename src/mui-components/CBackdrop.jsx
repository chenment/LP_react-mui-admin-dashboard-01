import Backdrop from '@mui/material/Backdrop'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'

const CBackdrop = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default CBackdrop
