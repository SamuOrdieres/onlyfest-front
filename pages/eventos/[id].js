import axios from 'axios'
import React from 'react'
import MarkdownIt from 'markdown-it'


export default function EventPage({evento}) {
    const md = new MarkdownIt({
        html:false
    })
    const htmlContent = md.render(evento.data.attributes.Descripcion)

  return (
    <article>
        <header>
            <h1>{evento.data.attributes.Titulo}</h1>
            <h2>{evento.data.attributes.DescripcionCorta}</h2>

        </header>
        <section dangerouslySetInnerHTML={{ __html: htmlContent}}>
        </section>

    </article>
  )
}

export async function getStaticProps({params}){

    const postsRes = await axios.get(`https://onlyfest-back.herokuapp.com/api/eventos/${params.id}`)

    return{
        props: {
            post: postsRes.data
        }
    }
}

export async function getStaticPaths(){

    const postsRes = await axios.get("https://onlyfest-back.herokuapp.com/api/eventos/")

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