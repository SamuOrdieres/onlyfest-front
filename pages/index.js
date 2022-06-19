import axios from 'axios'
import Head from 'next/head'
import LatestEvents from '../components/Events/LatestEvents'
import EventsHeader from '../components/Events/EventsHeader'
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
