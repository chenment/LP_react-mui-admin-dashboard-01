import { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ViewListIcon from '@mui/icons-material/ViewList'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'
import LaptopIcon from '@mui/icons-material/Laptop'
import TvIcon from '@mui/icons-material/Tv'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

const CToggleButton = () => {
  const [alignment, setAlignment] = useState('')
  const handleAlignment = (e, newVal) => setAlignment(newVal)

  const [formats, setFormats] = useState(['bold', 'italic'])
  const handleFormat = (e, newVal) => setFormats(newVal)

  const [platform, setPlatform] = useState('web')
  const handlePlatform = (e, newVal) => setPlatform(newVal)

  const [view, setView] = useState('web')
  const handleView = (e, newVal) => setView(newVal)

  const [alignment1, setAlignment1] = useState('left')
  const handleAlignment1 = (e, newVal) => {
    if (newVal !== null) setAlignment1(newVal)
  }

  const [devices, setDevices] = useState(['phone'])
  const handleDevices = (e, newVal) => {
    if (newVal.length) setDevices(newVal)
  }

  return (
    <div>
      <div>
        <ToggleButtonGroup
          exclusive
          value={alignment}
          onChange={handleAlignment}
        >
          <ToggleButton value="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup
          color="warning"
          value={platform}
          exclusive
          onChange={handlePlatform}
          aria-label="Platform"
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div>
        <ToggleButtonGroup
          orientation="vertical"
          exclusive
          value={view}
          onChange={handleView}
        >
          <ToggleButton value="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="quilt">
            <ViewQuiltIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <h2>Enforce value set</h2>
        <ToggleButtonGroup
          value={alignment1}
          exclusive
          onChange={handleAlignment1}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          value={devices}
          onChange={handleDevices}
          aria-label="device"
        >
          <ToggleButton value="laptop" aria-label="laptop">
            <LaptopIcon />
          </ToggleButton>
          <ToggleButton value="tv" aria-label="tv">
            <TvIcon />
          </ToggleButton>
          <ToggleButton value="phone" aria-label="phone">
            <PhoneAndroidIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  )
}

export default CToggleButton
