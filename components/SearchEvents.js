import React, { useEffect } from 'react'
import { useState } from 'react'
import EventPreview from './EventPreview'
import { TextField, Typography, Chip, Stack, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AllEvents from './AllEvents'
import FilterCategories from './FilterCategories'

export default function SearchEvents({eventos, categorias}) {

    const [searchString, setSearchString] = useState('')
    const [filteredEvents, setFilteredEvents] = useState(eventos)
    const [eventTitles, setEventTitles] = useState(eventos.map((evento) => evento.attributes.Titulo.toLowerCase()))


    useEffect(() => {
     
        const filteredEventTitles = [...eventTitles].filter(
            (title) => title.indexOf(searchString.trim().toLowerCase()) !== -1
            )

        const refilteredEvents = [...eventos].filter(
            (evento) => filteredEventTitles.includes(evento.attributes.Titulo.toLowerCase())
            )

        setFilteredEvents(refilteredEvents)

    }, [searchString, eventTitles, eventos])
    

    return (
        <>
            <Paper component='form' sx={{ width: 400, margin: '20px auto', boxShadow: 0}}>
                <TextField 
                style={{ width:400 }} 
                placeholder='Buscar' 
                value={searchString} 
                onChange={(e) => setSearchString(e.target.value)}
                InputProps=
                    {{startAdornment: (
                        <SearchIcon style={{ fontSize: 30, marginRight: 8 }} />
                    ),
                    style: {fontSize: 20}
                }}
                >
                </TextField>

            </Paper>

            <FilterCategories eventos={filteredEvents} categorias={categorias} />
        </>
    )
}