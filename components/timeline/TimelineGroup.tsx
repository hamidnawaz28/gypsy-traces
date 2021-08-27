import React from 'react';
import {
    Timeline as TimelineWrap,
} from '@material-ui/lab';
import Timeline from './Timeline'

export default function TimelineGroup() {
    return (
        <TimelineWrap>
            <Timeline>
                hello
            </Timeline>
        </TimelineWrap>
    );
}