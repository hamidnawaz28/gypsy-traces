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

            <main>
                <h5 className={styles.title}>
                    Our Vision
                </h5>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <h5 className={styles.title}>
                    Our Mission
                </h5>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </main>

            <Footer />
        </div>
    )
}

export default AboutUs
