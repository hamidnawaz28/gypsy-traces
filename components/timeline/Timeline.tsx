import React, { ReactNode } from 'react';
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from '@material-ui/lab';

type AppProps = {
    children: ReactNode;
};

export default function Timeline({ children }: AppProps) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                {children}
            </TimelineContent>
        </TimelineItem>
    );
}