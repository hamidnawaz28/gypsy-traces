import React from 'react';
import styles from '../../styles/Home.module.css'
import { Grid, Typography } from '@material-ui/core'

const breakpoints = {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
}

export default function Footer() {

    const GridWrap = ({ children }) => <Grid {...breakpoints}>{children}</Grid>

    return (
        <footer className={styles.footer}>
            <Grid container style={{
                textAlign: 'center', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <GridWrap >
                    <h3>Location</h3>
                    <p>225/2, Gill Road</p>
                    <p>Punjab Pakistan</p>
                </GridWrap>
                <GridWrap>
                    <h3>Social Media</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>Telegram</p>
                </GridWrap>
                <GridWrap>
                    <h3>About Us</h3>
                    <p>Careers</p>
                    <p>Why Us</p>
                    <p>News</p>
                </GridWrap>
            </Grid>
            <Typography align='center'>
                Copyright All Rights Reserved
            </Typography>
        </footer >
    );
}