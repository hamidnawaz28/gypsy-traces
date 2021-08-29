import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import { Seo } from '../../../components/seo'
import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/card'
import { Footer } from '../../../containers/footer'
import { useRouter } from 'next/router'

const DetailsPage: NextPage = () => {

    const { t, i18n } = useTranslation();
    const router = useRouter()
    const { city, url } = router.query

    return (
        <div className={styles.container}>
            <Seo description='Home package for travel packages' title='Details' siteTitle='Gypsy Traces' />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Details Page of {city} {url}
                </h1>
            </main>
            <Footer />
        </div>
    )
}

export default DetailsPage
