import React from 'react'
import EventPreview from './EventPreview'

export default function AllEvents({eventos}) {

function renderEventPreviews(){

    return eventos.map((evento) => {
        return <EventPreview evento={evento} key={evento.id} />
    })
}

  return (
      <>    
        <h2>Eventos</h2>
        {renderEventPreviews()}
      </>
  )
}
