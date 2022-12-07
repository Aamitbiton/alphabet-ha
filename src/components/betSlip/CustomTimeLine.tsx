import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Typography} from "@mui/material";
import {ICustomTimeLine} from "../../utils/models";
const CustomTimeLine = ({data}:ICustomTimeLine) => {
    return (
        <div>
            <Timeline sx={{p:0,whiteSpace: 'nowrap'}}>
                {data.map((line,index)=>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            {data.length > 2 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ p:0}}>
                            <Typography variant="h6" fontWeight={'bold'} component="span">
                                {line.title}
                            </Typography>
                            <Typography>
                                {line.subTitle}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                )}

            </Timeline>
        </div>
    );
};

export default CustomTimeLine;