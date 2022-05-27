import React from 'react'
import AllEvents from '../../components/AllEvents'
import axios from 'axios'
import SearchEvents from '../../components/SearchEvents'
import FilterCategories from '../../components/FilterCategories'

export default function Eventos({eventos, categorias}) {
  return (
      <>
          <SearchEvents eventos={eventos.data} categorias={categorias.data} />
      </>
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