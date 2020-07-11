import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from '@material-ui/core'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  ExitToApp,
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  speedDial: {
    position: 'fixed',
    right: 40,
    bottom: 100,
  },
}))

const Navigation = () => {
  const history = useHistory()
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/')
  }

  return (
    <SpeedDial
      ariaLabel="Menu"
      className={classes.speedDial}
      hidden={hidden}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up">
      <SpeedDialAction
        component={Link}
        to="/dashboard"
        icon={<DashboardIcon />}
        tooltipTitle="Dashboard"
      />

      <SpeedDialAction
        component={Link}
        to="/profile"
        icon={<PersonIcon />}
        tooltipTitle="Perfil"
      />

      <SpeedDialAction
        component={Link}
        to="/chat"
        icon={<ChatIcon />}
        tooltipTitle="Chat"
      />

      <SpeedDialAction
        icon={<ExitToApp />}
        tooltipTitle="Sair"
        onClick={handleLogout}
      />
    </SpeedDial>
  )
}

export default React.memo(Navigation)
