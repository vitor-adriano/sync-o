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
        border: '1px solid #6669c5',
        borderRadius: '14px 14px 0 14px',
        margin:'5px',
    },
    other_message: {
        background: '#909090',
        color: "black",
        border: '1px solid #909090',
        borderRadius: '14px 14px 14px 0'
    }

}));


export default function ballom(props) {
    const classes = mystyle()

    return (
        <span className={classes.you_message}>
            {props.data.nome}: <br/>
            {props.data.data}
        </span>
    )
}
