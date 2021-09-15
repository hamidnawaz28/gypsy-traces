import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import { useTranslation } from 'react-i18next';

import { Seo } from '../../components/seo'
import { Footer } from '../../containers/footer';
import { useRouter } from 'next/router'
const Details: NextPage = () => {

    const { t, i18n } = useTranslation()
    const router = useRouter()
    const { id } = router.query

    return (
        <div className={styles.container}>
            <Seo description='Home package for travel packages' title='Home' siteTitle='Gypsy Traces' />
            <main className={styles.main}>
                <h1>{id}</h1>
            </main>
            <Footer />
        </div>
    )
}

export default Details
