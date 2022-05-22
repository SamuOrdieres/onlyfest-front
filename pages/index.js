import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({eventos}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>OnlyFest</title>
        <meta name="description" content="OnlyFest. Tus planes y eventos están aquí." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{eventos[0].attributes.Titulo}</h1>
      <h4>{eventos[0].attributes.FechaInicio}</h4>
      <h5>{eventos[0].attributes.DescripcionCorta}</h5>
      <p>{eventos[0].attributes.Descripcion}</p>

      

      <footer className={styles.footer}>
        <a
          href="https://samuordieres.com?utm_source=onlyfest&utm_medium=onlyfest-web&utm_campaign=footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(){
  const eventosRes = await axios.get('https://onlyfest-back.herokuapp.com/api/eventos/');

  
  return {
    props: {
      eventos: eventosRes.data.data
    }
  }
}
