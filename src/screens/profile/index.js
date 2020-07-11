import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 720,
    padding: 20,
    margin: '0 auto',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '30px 20px',
    marginBottom: 20,
    borderRadius: 10,
    background: 'var(--theme-color-c)',

    '& > div:nth-child(odd)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',

      '& > strong': {
        fontSize: 20,
        fontWeight: 500,

        '@media(min-width: 540px)': {
          fontSize: 32,
          fontWeight: 600,
        },
      },

      '& > span': {
        fontSize: 13,
        lineHeight: 1.1,
        textTransform: 'uppercase',

        '@media(min-width: 540px)': {
          fontSize: 15,
        },
      },
    },
  },

  profilePicture: {
    flexShrink: 0,
    flexBasis: 90,
    width: 90,
    height: 90,
    border: '10px solid #fff',
    borderRadius: '50%',
    backgroundColor: '#ddd',
    backgroundImage:
      'url(https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png)',
    backgroundSize: 'cover',

    '@media(min-width: 540px)': {
      flexBasis: 150,
      width: 150,
      height: 150,
    },
  },

  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& > h2': {
      textAlign: 'center',
    },

    '& > div': {
      marginTop: 10,

      '& > button': {
        width: 40,
        height: 40,
        border: 0,
        borderRadius: '50%',
        background: 'var(--theme-color-c)',

        '&:not(:last-child)': {
          marginRight: 20,
        },

        '& > svg': {
          width: 20,
          height: 20,
          verticalAlign: 'middle',
          fill: '#fff',
        },
      },
    },
  },
}))

const Profile = () => {
  const classes = useStyles()

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <strong>999</strong>
          <span>tarefas</span>
          <span>finalizadas</span>
        </div>

        <div className={classes.profilePicture} />

        <div>
          <strong>999</strong>
          <span>medalhas</span>
        </div>
      </div>

      <div className={classes.actions}>
        <h2>{user.name}</h2>
        <span>Cargo/Função</span>

        <div>
          <button>
            <MailIcon />
          </button>

          <button>
            <PhoneIcon />
          </button>

          <button>
            <FacebookIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
