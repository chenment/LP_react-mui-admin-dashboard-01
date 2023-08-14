import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'

const CAlert = () => {
  return (
    <div>
      <div>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </div>

      <div>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </div>

      <div>
        <Alert onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert action={<Button color="inherit">UNDO</Button>}>
          This is a success alert — check it out!
        </Alert>
      </div>

      <div>
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="success">
          This is a success alert — check it out!
        </Alert>
      </div>

      <div>
        <Alert variant="filled" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="filled" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
      </div>
    </div>
  )
}

export default CAlert
