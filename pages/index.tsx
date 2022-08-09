import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BallPit from '../components/BallPit';

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="Demari" content="My name is Demari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span>Contact me at <a href="mailto:demari@tecplus.io">demari@tecplus.io</a></span>

      <main id="root">
       
        <BallPit />
      </main>

    </div>
  )
}

export default Home
