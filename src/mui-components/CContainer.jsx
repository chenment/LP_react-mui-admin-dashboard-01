import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const CContainer = () => {
  return (
    <div>
      <div>
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: '#cfe8fc', height: '100px' }}></Box>
        </Container>
      </div>

      <div style={{ marginTop: 10 }}>
        <Container fixed>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </div>
    </div>
  )
}

export default CContainer
