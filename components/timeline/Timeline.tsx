import React, { ReactNode } from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";

type AppProps = {
  children: ReactNode;
};

export default function Timeline({ children }: AppProps) {
  return (
    <TimelineItem>
      <TimelineOppositeContent>Day</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{children}</TimelineContent>
    </TimelineItem>
  );
}
