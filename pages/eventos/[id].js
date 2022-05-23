import * as React from 'react';
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function EventPage({evento}) {
    const md = new MarkdownIt({
        html:false
    })
    const htmlContent = md.render(evento.data.attributes.Descripcion)

  return (
      <>
      <article>
        <header>
            <h1>{evento.data.attributes.Titulo}</h1>
            <h2>{evento.data.attributes.DescripcionCorta}</h2>

        </header>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 500,
        height: 500,
        padding: 2
      },
    }}
  >
    <Paper elevation={3}>
    <section dangerouslySetInnerHTML={{ __html: htmlContent}}>
        </section>
    </Paper>
  </Box>
  
        
        

    </article>

    </>
  )
}




export async function getStaticProps({params}){

    const postsRes = await axios.get(`https://onlyfest-back.herokuapp.com/api/eventos/${params.id}`)

    return{
        props: {
            evento: postsRes.data
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