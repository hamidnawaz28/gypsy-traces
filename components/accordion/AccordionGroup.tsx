import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from './Accordion'

type AppProps = {
    dataArr: object[],
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));

export default function SimpleAccordion({ dataArr }: AppProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {dataArr.forEach(item => <Accordion {...item} />)}
        </div>
    );
}