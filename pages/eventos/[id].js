import * as React from 'react';
import axios from 'axios'
import EventPage from '../../components/Events/EventPage'

export default function Evento({evento}) {
    

  return (
     <>
      <EventPage evento={evento}></EventPage>
     </>
  )
}




export async function getStaticProps({params}){

    const postsRes = await axios.get(`https://onlyfest-back.herokuapp.com/api/eventos/${params.id}?populate=*`)

    return{
        props: {
            evento: postsRes.data.data
        }
    }
}

export async function getStaticPaths(){

    const postsRes = await axios.get("https://onlyfest-back.herokuapp.com/api/eventos?populate=*")

    const paths = postsRes.data.data.map((evento) => {
        return {params: {id: evento.id.toString()}}
    })

    return {
        paths,
        fallback: false
    }
}



/*
    For SSR:

    Read id from a URL parameter property in the getServerSideProps and then make a fetch request to strapi
    and say to strapi, give me get/api/posts/id.

*/