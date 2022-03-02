import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}></div>
      <div className={styles.content}>
        <h1>Campanha Crescer - Next App</h1>

      </div>
    </div>
  )
}

export default Home
