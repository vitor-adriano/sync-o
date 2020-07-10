import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import Ballow from './ballom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#ffffff'
  },
  section: {
    display: "flex",
    flexDirection: 'column',
    overflowY: 'scroll'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),

  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "transparent",

  },
  textlabel: {
    width: '100%',
    height: "auto",
  },
  footer: {
    padding: theme.spacing(0, 2),
    marginTop: 'auto',
    display: "flex",
    height: '64px',
    alignitems: 'baseline',
    backgroundColor:
      theme.palette.type === 'light' ? "#6669c5" : "#6669c5",
  },
  header: {
    padding: theme.spacing(1, 1),
    height: '64px',
    position: 'relative',
    backgroundColor:
      theme.palette.type === 'light' ? "#6669c5" : "#6669c5",
  },
}));

export default function StickyFooter() {

  const my = "Wesley"
  const props = [
    {
      "nome": "Julio",
      "data": "Oi!",
    },
    {
      "nome": "Julio",
      "data": "Oi!"
    },
    {
      "nome": "Julio",
      "data": "Oi!"
    }, {
      "nome": "Wesley",
      "data": "Oi!"
    }
    , {
      "nome": "Wesley",
      "data": "Oi!"
    }
    , {
      "nome": "Wesley",
      "data": "Oi!"
    }
    , {
      "nome": "Wesley",
      "data": "Oi!"
    }

  ]

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Button variant="contained" className={classes.button} ><ArrowBackTwoToneIcon /></Button>

      </header>
      <section className={classes.section}>
        {props.map((elem) => <Ballow data={elem} my={my} ></Ballow>)}
      </section>
      <footer className={classes.footer}>

        <TextField
          className={classes.textlabel}
          id="text1"
          style={{ margin: 6 }}
          placeholder="Tente digitar aqui!"
          variant="filled"
        />
        <Button variant="contained" className={classes.button} ><SendIcon /></Button>

      </footer>
    </div>
  );
}