import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Seo } from '../components/seo'
import { useTranslation } from 'react-i18next';
import { Card, CardGroup } from '../components/card'
import { Footer } from '../containers/footer'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  trekContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const Home: NextPage = () => {

  const { t, i18n } = useTranslation();
  const { trekContainer } = useStyles()
  return (
    <div >
      <Seo description='Home package for travel packages' title='Home' siteTitle='Gypsy Traces' />
      <main>
        <img src='/homepage/world-famous-destinations.png' width="100%" />
        <h3 >
          Home Page
        </h3>

        <Grid container className={trekContainer}>
          <Card imagePath="/details/thumbnail/k2-treking-trek-001.png" title='k2-trekking' details='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica' />
          <Card imagePath="/details/thumbnail/k2-treking-trek-001.png" title='k2-trekking' details='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica' />
        </Grid>

      </main>
      <Footer />
    </div>
  )
}

export default Home
