import React from 'react';

import {
    Timeline as TimelineWrap,
} from '@material-ui/lab';
import Timeline from './Timeline'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));

export default function TimelineGroup() {

    const classes = useStyles()

    return (
        <TimelineWrap className={classes.root}>
            {dataArr.forEach(item => <Timeline>
                Timleline-1
            </Timeline>)}
        </TimelineWrap>
    );
}

