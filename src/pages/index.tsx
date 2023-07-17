import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Spline from '@splinetool/react-spline';
import { useState } from 'react';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  const onLoad = () => {
    setIsLoading(false);
  }

  return (
    <>
      <Head>
        <title>Bem Vindo!</title>
        <meta name="description" content="My Web-Ste Tattoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Bem vindo! {'\n'}Se divirta com o mini teclado ou visite meu insta!😎
          </p>
          <div className={styles.logoContainer}>
            <a
              href="https://www.linkedin.com/in/rodrigo-si/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/my-logo.png"
                alt="Vercel Logo"
                className={styles.logo}
                width={120}
                height={120}
                priority
              />
            </a>
          </div>
        </div>

          {isLoading && (
          <div className={styles.center}>
              <div className={styles.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          )}
        <div className={styles.center}>
            <Spline
            scene='https://prod.spline.design/B7o49Rb3iLAgTTFv/scene.splinecode'
              style={{
                width: '100vw',
                height: '100vh',
                padding: 30,
                zIndex: 110,
              }}
              onLoad={onLoad}
            />
        </div>
      </main>
    </>
  )
}
