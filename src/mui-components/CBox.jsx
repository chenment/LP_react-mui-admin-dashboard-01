import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const CBox = () => {
  return (
    <div>
      <div>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',

            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7]
            }
          }}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <Box
          component="span"
          sx={{ p: 2, border: '1px dashed grey', backgroundColor: '#f0f0f0' }}
        >
          <Button variant="outlined" color="primary">
            Save
          </Button>
        </Box>
      </div>
      <div style={{ marginTop: 20 }}>
        <Button sx={{ border: '1px dashed grey' }}>Save</Button>
        <Box component="button" mt={4} sx={{ border: '1px dashed grey' }}>
          Save
        </Box>
      </div>
    </div>
  )
}

export default CBox
