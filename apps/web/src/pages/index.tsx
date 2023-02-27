import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'
import { LABELS } from '@stolaar/utils'

export default function Home() {
  const [ping, setPing] = useState('')
  const pingBackend = async () => {
    try {
      const { data } = await axios.get('/api/ping')
      setPing(JSON.stringify(data, null, 2))
    } catch (err) {
      setPing("Couldn't ping backend :(")
    }
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <h2>{LABELS.hello}</h2>
        <button onClick={pingBackend} className={styles.button}>
          Ping backend
        </button>
        <div className={styles.description}>
          {ping && (
            <p>
              <pre>{ping}</pre>
            </p>
          )}
        </div>
      </main>
    </>
  )
}
