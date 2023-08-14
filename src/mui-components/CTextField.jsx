import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

const CTextField = () => {
  const [name, setName] = useState('Cat in hat')

  return (
    <div>
      <div>
        <TextField label="Outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="standard" variant="standard" />
      </div>
      <div style={{ marginTop: '20px' }}>
        <TextField label="Required" required defaultValue="Hello world" />
        <TextField label="Disabled" disabled defaultValue="Hello world" />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          label="Read Only"
          defaultValue="Hello World"
          inputProps={{ readOnly: true }}
        />
        <TextField
          label="Number"
          type="number"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          label="Error"
          defaultValue="Hello World"
          error
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label="Multiline"
          multiline
          placeholder="placeholder"
          maxRows={4}
        />
      </div>
      <div>
        <TextField select label="Select" defaultValue={'USD'} fullWidth>
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField label={'margin="none"'} id="margin-none" />
        <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
        <TextField
          label={'margin="normal"'}
          id="margin-normal"
          margin="normal"
        />
      </div>

      <div>
        <TextField
          label="Controlled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField label="Uncontrolled" defaultValue="foo" />
      </div>

      <div>
        <TextField label="Outlined secondary" color="secondary" focused />
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
        />
      </div>
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />

      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
    </div>
  )
}

export default CTextField
