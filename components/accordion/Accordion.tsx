import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons';

type AccordianProps = {
    title: string,
    details: string
}

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion({ title, details }: AccordianProps): JSX.Element {

    const classes = useStyles();
    const { heading } = classes

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={heading}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}