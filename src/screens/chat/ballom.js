import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const mystyle = makeStyles(() => ({
    message: {
        padding: '9px 14px',
        fontsize: '1.6rem',
        marginBottom: '5px',
    },
    you_message: {
        backgroundColor: '#6669c5',
        color: "white",
        position:"relative",
        border: '1px solid #6669c5',
        borderRadius: '14px 14px 14px 0',
        width:"30%",
        margin: '5px',
        textAlign: "center"
    },
    other_message: {
        background: '#909090',
        color: "black",
        border: '1px solid #909090',
        borderRadius: '14px 14px 0 14px',
    }

}));


export default function ballom(props) {
    const classes = mystyle()

    return (
        <span className={classes.you_message} style={{ backgroundColor: props.data.color }}>

            <strong>-{props.data.cargo}-</strong>  {props.data.nome}: <br />
            {props.data.data}
        </span>
    )
}
