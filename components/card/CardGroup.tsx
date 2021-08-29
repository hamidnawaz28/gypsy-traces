import Card from './Card'
import { makeStyles } from '@material-ui/core/styles';
interface AppProps {
    dataArr: object[],
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));

export default function CardGroup({ dataArr }: AppProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {dataArr.forEach(item => <Card {...item} />)}
        </div>
    );
}