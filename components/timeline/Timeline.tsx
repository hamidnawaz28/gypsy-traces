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

export default function Timeline({ children, day }: AppProps) {
  return (
    <TimelineItem>
      <TimelineOppositeContent>Day {day}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{children}</TimelineContent>
    </TimelineItem>
  );
}
