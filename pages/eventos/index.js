import React from 'react'
import AllEvents from '../../components/AllEvents'
import axios from 'axios'

export default function Eventos({eventos}) {
  return (
      <>
          <AllEvents eventos={eventos.data} />
      </>
  )
}


export async function getServerSideProps(){ //  --> For server side rendering purposes
    // export async function getStaticProps(){      --> For static page purposes
    const postsRes = await axios.get("https://onlyfest-back.herokuapp.com/api/eventos/")
    
    
        return{
            props: {
                eventos: postsRes.data
            }
        }
    }