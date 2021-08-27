import React from 'react';
import {
    Timeline as TimelineWrap,
} from '@material-ui/lab';
import Timeline from './Timeline'

export default function TimelineGroup() {
    return (
        <TimelineWrap>
            <Timeline>
                Timleline-1
            </Timeline>
        </TimelineWrap>
    );
}