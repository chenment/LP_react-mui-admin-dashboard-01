import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import MailIcon from '@mui/icons-material/Mail'
import image1 from '../assets/images/1.jpg'

const CBadge = () => {
  return (
    <div>
      <div>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action " />
        </Badge>
        <Badge badgeContent={4} color="success">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <MailIcon color="action" />
        </Badge>
      </div>
      <div>
        <h2>Badge visibility</h2>
        <Badge color="secondary" badgeContent={4} invisible={false}>
          <MailIcon color="action" />
        </Badge>
        <Badge color="secondary" badgeContent={4} variant="dot">
          <MailIcon color="action" />
        </Badge>

        <Badge color="secondary" badgeContent={0}>
          <MailIcon color="action" />
        </Badge>
        <Badge color="secondary" badgeContent={0} showZero>
          <MailIcon color="action" />
        </Badge>
      </div>

      <div>
        <h2>Maximum value</h2>
        <Badge color="secondary" badgeContent={99}>
          <MailIcon color="action" />
        </Badge>
        <Badge color="secondary" badgeContent={100}>
          <MailIcon color="action" />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999}>
          <MailIcon color="action" />
        </Badge>
      </div>

      <div>
        <h2>Badge overlap</h2>
        <Badge color="secondary" badgeContent=" ">
          <Avatar src={image1} variant="rounded" />
        </Badge>
        <Badge color="secondary" badgeContent=" " variant="dot">
          <Avatar src={image1} variant="rounded" />
        </Badge>
        <Badge color="secondary" overlap="circular" badgeContent=" ">
          <Avatar src={image1} />
        </Badge>
        <Badge
          color="secondary"
          overlap="circular"
          badgeContent=" "
          variant="dot"
        >
          <Avatar src={image1} />
        </Badge>
      </div>

      <div>
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          badgeContent={4}
          color="secondary"
        >
          <MailIcon color="action" />
        </Badge>
      </div>
    </div>
  )
}

export default CBadge
