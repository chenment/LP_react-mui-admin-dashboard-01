import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import { deepOrange, deepPurple, pink, green } from '@mui/material/colors'
import {
  Folder as FolderIcon,
  Pageview as PageviewIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material'

const CAvatar = () => {
  return (
    <div>
      <div>
        <Avatar alt="Remy Sharp" src={image1} />
        <Avatar alt="Travis Howard" src={image2} />
        <Avatar alt="Cindy Baker" src={image3} />
      </div>

      <div>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </div>

      <div>
        <Avatar alt="Remy Sharp" src={image1} sx={{ width: 24, height: 24 }} />
        <Avatar alt="Remy Sharp" src={image1} />
        <Avatar alt="Remy Sharp" src={image1} sx={{ width: 56, height: 56 }} />
      </div>

      <div>
        <h2>Icon avatars</h2>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }}>
          <AssignmentIcon />
        </Avatar>
      </div>

      <div>
        <h2>Variants</h2>
        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
          N
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
          <AssignmentIcon />
        </Avatar>
      </div>

      <div>
        <h2>Fallbacks</h2>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </Avatar>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        />
        <Avatar src="/broken-image.jpg" />
      </div>
      <div>
        <h2>Grouped</h2>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={image1} />
          <Avatar alt="Travis Howard" src={image2} />
          <Avatar alt="Cindy Baker" src={image3} />
          <Avatar alt="Cindy Baker" src={image3} />
          <Avatar alt="Cindy Baker" src={image3} />
        </AvatarGroup>

        <AvatarGroup max={4} total={24}>
          <Avatar alt="Remy Sharp" src={image1} />
          <Avatar alt="Travis Howard" src={image2} />
          <Avatar alt="Cindy Baker" src={image3} />
          <Avatar alt="Cindy Baker" src={image3} />
          <Avatar alt="Cindy Baker" src={image3} />
        </AvatarGroup>
      </div>
    </div>
  )
}

export default CAvatar
