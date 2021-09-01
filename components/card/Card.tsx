import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'

import Image from 'next/image'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: 10,
        margin: 10
    },
});

interface ImgCardProps {
    title: string,
    details: string,
    imagePath: string
}

export default function ImgCard({ title, details, imagePath }: ImgCardProps) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    height="240"
                    image={imagePath}
                    title={title}
                />
                {/* <Image src={imagePath} width='300px' height="340" alt="Picture of the author" /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {details}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions> */}
        </Card>
    );
}