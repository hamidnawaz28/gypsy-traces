import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Seo } from '../components/seo'
import { useTranslation } from 'react-i18next';
import { Card } from '../components/card'
import { Footer } from '../containers/footer'

const AboutUs: NextPage = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className={styles.container}>

            <Seo description='Home package for travel packages' title='Home' siteTitle='Gypsy Traces' />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    About Us!
                </h1>
            </main>

            <Footer />
        </div>
    )
}

export default AboutUs
