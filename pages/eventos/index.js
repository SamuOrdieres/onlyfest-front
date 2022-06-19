import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import SearchEvents from '../../components/Events/SearchEvents'
import styles from '../../styles/Search.module.css'
import Footer from '../../components/Shared/Footer'

export default function Eventos({eventos, categorias}) {
  return (
      
      <div className={styles.container}>
      <Head>
        <title>OnlyFest</title>
        <meta name="description" content="OnlyFest. Tus planes y eventos están aquí." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <SearchEvents eventos={eventos.data} categorias={categorias.data} />
      </main>
      <Footer />
      </div>
  )
}


export async function getServerSideProps(){ //  --> For server side rendering purposes
    // export async function getStaticProps(){      --> For static page purposes
    const postsResEventos = await axios.get("https://onlyfest-back.herokuapp.com/api/eventos?populate=*")
    const postsResCategorias = await axios.get("https://onlyfest-back.herokuapp.com/api/categorias")

    
        return{
            props: {
                eventos: postsResEventos.data,
                categorias: postsResCategorias.data
            }
        }
    }