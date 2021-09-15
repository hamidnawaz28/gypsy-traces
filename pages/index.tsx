import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Seo } from '../components/seo'
import { useTranslation } from 'react-i18next';
import { Card, CardGroup } from '../components/card'
import { Footer } from '../containers/footer'
import { Grid, makeStyles } from '@material-ui/core'
import jsonData from '../components/internationalization/en-US.json'
import { Header } from '../containers/header'
const useStyles = makeStyles({
  root: {}
})

const Home: NextPage = () => {

  const { t, i18n } = useTranslation();
  const { packages } = jsonData.translation
  const { root } = useStyles()
  return (
    <div >
      <Seo description='Home package for travel packages' title='Home' siteTitle='Gypsy Traces' />
      <main>
        <Header />
        <img src='/homepage/world-famous-destinations.png' width="100%" />
        <h3>
          Home Page
        </h3>

        <CardGroup dataArr={packages} />

      </main>
      <Footer />
    </div>
  )
}

export default Home
