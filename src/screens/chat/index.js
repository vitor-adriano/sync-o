import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
    overflowY: 'hidden',

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
    display:"flex",
    justifyContent:"flex-end",
    padding: theme.spacing(1, 1),
    height: '64px',
    position: 'relative',
    textAlign:"center",
    backgroundColor:
      theme.palette.type === 'light' ? "#6669c5" : "#6669c5",
  },
}));

export default function StickyFooter({history}) {

  const handleback = () =>{
    history.push('/dashboard');
  }
  const props = [
    {
      "nome": "Julio",
      "data": "Oi!",
      "color": "#6669c5",
      "cargo": "ceo"
    },
    {
      "nome": "Julio",
      "data": "Podemos realizar um projeto?",
      "color": "#6669c5",
      "cargo": "ceo"
    },
    

  ]

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        
        <Button variant="contained" className={classes.button} ><ArrowForwardIosIcon /></Button>

      </header>
      <section className={classes.section}>
        {props.map((elem) => <Ballow data={elem} ></Ballow>)}
      </section>
      <footer className={classes.footer}>

        <TextField
          className={classes.textlabel}
          id="text1"
          style={{ margin: 6 }}
          placeholder="Tente digitar aqui!"
          variant="filled"
        />
        <Button variant="contained" className={classes.button} onClick={handleback} ><SendIcon /></Button>

      </footer>
    </div>
  );
}