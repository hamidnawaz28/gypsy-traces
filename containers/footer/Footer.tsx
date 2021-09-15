import React from 'react';
import styles from '../../styles/Home.module.css'
import { Grid, Typography } from '@material-ui/core'
import { Facebook, YouTube, Instagram, Telegram } from '@material-ui/icons'

const breakpoints = {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
}

export default function Footer() {

    const GridWrap = ({ children }) => <Grid {...breakpoints} item>{children}</Grid>

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
                    <Facebook />
                    <Instagram />
                    <YouTube />
                    <Telegram />
                </GridWrap>
                <GridWrap>
                    <h3>More</h3>
                    <p>About Us</p>
                    <p>Contact</p>
                </GridWrap>
            </Grid>
            <Typography align='center'>
                @Copyright! All Rights Reserved 2021
            </Typography>
        </footer >
    );
}