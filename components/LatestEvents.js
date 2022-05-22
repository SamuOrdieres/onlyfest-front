import React, {useEffect, useState} from 'react'
import EventPreview from './EventPreview'

export default function LatestEvents({eventos}) {
const [latestEvents, setLatestEvents] = useState([]);

useEffect(() => {
  setLatestEvents(eventos.slice(0, 3)); // Last 3 posts
}, [eventos])

function renderEventPreviews(){

    return latestEvents.map((evento) => {
        return <EventPreview evento={evento} key={evento.id} />
    })
}

  return (
      <>    
        <h2>Últimos eventos</h2>
        {renderEventPreviews()}
      </>
  )
}
