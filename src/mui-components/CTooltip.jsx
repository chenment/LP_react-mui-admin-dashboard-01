import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'

const CTooltip = () => {
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    console.log('onClose')
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    console.log('onOpen')
    setOpen(true)
  }

  return (
    <div>
      <div>
        <Tooltip title="delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" arrow>
          <Button>Arrow</Button>
        </Tooltip>
      </div>

      <div>
        <Tooltip disableFocusListener title="Add">
          <Button>Hover or touch</Button>
        </Tooltip>

        <Tooltip disableHoverListener title="Add">
          <Button>Focus or touch</Button>
        </Tooltip>

        <Tooltip disableFocusListener disableTouchListener title="Add">
          <Button>Hover</Button>
        </Tooltip>

        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            PopperProps={{
              disablePortal: true
            }}
            open={open}
            onClose={handleTooltipClose}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Add"
          >
            <Button onClick={handleTooltipOpen}>Click</Button>
          </Tooltip>
        </ClickAwayListener>
      </div>
      <div>
        <Tooltip
          open={open}
          onClose={handleTooltipClose}
          onOpen={handleTooltipOpen}
          title="Add"
        >
          <Button>Controlled</Button>
        </Tooltip>
      </div>

      <div>
        <Tooltip title="Add" disableInteractive>
          <Button>Not interactive</Button>
        </Tooltip>
      </div>

      <div>
        <Tooltip title="You don't have permission to do this">
          <Button disabled>A Disabled Button</Button>
        </Tooltip>

        <Tooltip title="You don't have permission to do this">
          <span>
            <Button disabled>A Disabled Button</Button>
          </span>
        </Tooltip>
      </div>

      <div>
        <Tooltip title="You don't have permission to do this">
          {/* <span> */}
          <button disabled style={{ pointerEvents: 'none' }}>
            A disabled button
          </button>
          {/* </span> */}
        </Tooltip>
      </div>
    </div>
  )
}

export default CTooltip
