import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="Demari" content="My name is Demari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m Demari
        </h1>
          Reach out to me at <a href="mailto:demarijmiller@gmail.com"> demari@tecplus.io</a>


      </main>

    </div>
  )
}

export default Home
