import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from './Accordion'

interface AppProps {
    dataArr: object[],
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));

export default function AccordianGroup({ dataArr }: AppProps) {
    const { root } = useStyles();

    return (
        <div className={root}>
            {dataArr.forEach(item => <Accordion {...item} />)}
        </div>
    );
}