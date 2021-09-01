import Card from './Card'
import { Grid, Typography, makeStyles } from '@material-ui/core';

interface AppProps {
    dataArr: object
}

const useStyles = makeStyles({
    trekContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
})

export default function CardGroup({ dataArr }: AppProps) {

    const { trekContainer } = useStyles()
    const categories: string[] = Object.keys(dataArr)

    return (
        categories.map(item => {
            const { title, details } = dataArr[item]
            return (
                <Grid>
                    {
                        details.length > 0
                        &&
                        <Typography>{title}</Typography>
                    }
                    <Grid container className={trekContainer}>
                        {details.map(item => {
                            const { title: cardTitle, description, thumbnailImage } = item
                            return (
                                <Card
                                    title={cardTitle}
                                    details={description}
                                    imgSrc={thumbnailImage}
                                />
                            )
                        }
                        )}
                    </Grid>
                </Grid>
            )
        }
        )

    );
}