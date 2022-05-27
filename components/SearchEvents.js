import React, { useEffect } from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { TextField,  Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FilterCategories from './FilterCategories'

export default function SearchEvents({eventos, categorias}) {

    const [searchString, setSearchString] = useState('')
    const [filteredEvents, setFilteredEvents] = useState(eventos)
    const [eventTitles, setEventTitles] = useState(eventos.map((evento) => evento.attributes.Titulo.toLowerCase()))
    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('mobile')]: {
            maxWidth: 300
        },
        [theme.breakpoints.up('tablet')]: {
            maxWidth: 500
        },
        [theme.breakpoints.up('laptop')]: {
            maxWidth: 800
        },
        [theme.breakpoints.up('desktop')]: {
            maxWidth: 1200
          },
      }));


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
            <Paper component='form' sx={{ margin: '20px auto', boxShadow: 0, display: 'flex'}}>
                <TextField 
                placeholder='Buscar' 
                value={searchString} 
                onChange={(e) => setSearchString(e.target.value)}
                InputProps=
                    {{startAdornment: (
                        <SearchIcon style={{ fontSize: 30, marginRight: 8 }} />
                    ),
                    style: {fontSize: 15}
                }}
                variant='outlined'
                >
                </TextField>

            </Paper>

            <FilterCategories eventos={filteredEvents} categorias={categorias} />
        </>
    )
}