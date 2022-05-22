import React from 'react'
import Link from "next/link"

export default function EventPreview({evento}) {
  return (
    <>
    <Link href={`/eventos/${evento.id}`} > 
      <div className='eventPreview'>
      <h3>{evento.attributes.Titulo}</h3>
      <h6>{evento.attributes.FechaInicio}</h6>
          <p>{evento.attributes.DescripcionCorta}</p>
      </div>  
    </Link>
        
    </>
  )
}
