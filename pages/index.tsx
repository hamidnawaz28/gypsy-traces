import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Seo } from '../components/seo'
import { useTranslation } from 'react-i18next';
import { Card } from '../components/card'
import { Footer } from '../containers/footer'
const Home: NextPage = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className={styles.container}>

      <Seo description='Home package for travel packages' title='Home' siteTitle='Gypsy Traces' />
      <main className={styles.main}>

        <h1 className={styles.title}>
          <Card imagePath="/details/thumbnail/k2-treking-trek-001.png" title='k2-trekking' details='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica' />
          <Card imagePath="/details/thumbnail/k2-treking-trek-001.png" title='k2-trekking' details='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica' />
        </h1>
      </main>
      <Footer />
    </div>
  )
}

export default Home
