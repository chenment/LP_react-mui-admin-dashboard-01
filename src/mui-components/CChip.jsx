import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import FaceIcon from '@mui/icons-material/Face'
import image1 from '../assets/images/1.jpg'

const CChip = () => {
  const handleClick = () => {
    console.log('You clicked the chip.')
  }
  const handleDelete = () => {
    console.log('You clicked the delete icon.')
  }
  return (
    <div>
      <div>
        <Chip label="Chip Filled"></Chip>
        <Chip label="Chip Outlined" variant="outlined"></Chip>
      </div>

      <div>
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </div>

      <div>
        <Chip label="Deletable" onDelete={handleDelete} />
        <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
      </div>

      <div>
        <Chip
          label="Clickable Deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Clickable Deletable"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
        />
      </div>

      <div>
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </div>

      <div>
        <h2>Custom delete icon</h2>
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      </div>

      <div>
        <h2>Avatar chip and icon chip</h2>
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
        <Chip
          avatar={<Avatar alt="Natacha" src={image1} />}
          label="Avatar"
          variant="outlined"
        />

        <Chip icon={<FaceIcon />} label="With Icon" />
        <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
      </div>

      <div>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />

        <Chip label="primary" variant="outlined" color="primary" />
        <Chip label="success" variant="outlined" color="success" />

        <Chip
          label="primary"
          variant="outlined"
          color="primary"
          onDelete={handleDelete}
        />
        <Chip
          label="success"
          variant="outlined"
          color="success"
          avatar={<Avatar alt="Natacha" src={image1} />}
        />

        <Chip label="primary" color="primary" onDelete={handleDelete} />
        <Chip
          label="success"
          color="success"
          avatar={<Avatar alt="Natacha" src={image1} />}
          onDelete={handleDelete}
        />
      </div>

      <div>
        <Chip label="Small" size="small" />
        <Chip label="Small" size="small" variant="outlined" />
      </div>
    </div>
  )
}

export default CChip
