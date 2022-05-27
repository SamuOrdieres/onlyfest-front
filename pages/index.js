import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import LatestEvents from '../components/LatestEvents'
import EventsHeader from '../components/EventsHeader'
import styles from '../styles/Home.module.css'


export default function Home({eventos}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>OnlyFest</title>
        <meta name="description" content="OnlyFest. Tus planes y eventos están aquí." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <EventsHeader />
      <LatestEvents eventos={eventos.data}/>

     
      <footer className={styles.footer}>
        <a
          href="https://samuordieres.com?utm_source=onlyfest&utm_medium=onlyfest-web&utm_campaign=footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by:{' '}
          <span className={styles.logo}>
            <Image src="https://onlyfest.es//images/logo-black-horizontal.png" alt="OnlyFest Logo" width={72} height={36} />
          </span>
        </a>
      </footer>
      </main>
    </div>
  )
}

export async function getServerSideProps(){
  const eventosRes = await axios.get('https://onlyfest-back.herokuapp.com/api/eventos?populate=*');

  
  return {
    props: {
      eventos: eventosRes.data
    }
  }
}
