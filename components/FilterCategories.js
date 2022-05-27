import React, { useEffect } from 'react'
import { useState } from 'react'
import { TextField, Typography, Chip, Stack, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AllEvents from './AllEvents'
import EventPreview from './EventPreview'

export default function FilterCategories({eventos, categorias}) {


const [filteredEvents, setFilteredEvents] = useState(eventos)
const [eventTitles, setEventTitles] = useState(eventos.map((evento) => evento.attributes.Titulo.toLowerCase()))
const [isAllCategories, setIsAllCategories] = useState(true)
const [categories, setCategories] = useState(categorias.map((category) => category.attributes.Nombre))




useEffect(() => {

    if(categories.length > 0){
        setIsAllCategories(false)
    } else {
        setIsAllCategories(true)
    }
  
}, [categories])

return ( 
    <>

    <Paper sx={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px auto', boxShadow: 0 }}>
            <Stack direction='row' spacing={1}>
            <Chip onClick={() => { setCategories([]); setIsAllCategories(true) }} label='Todo' variant='outlined' color={isAllCategories ? 'secondary' : 'default'} />
            {categorias.map((category) => (
                <>
                    <Chip onClick={() => {
                        if(!categories.includes(category.attributes.Nombre)){
                            setCategories([...categories, category.attributes.Nombre])
                        } else {
                            const selectedCategories = [...categories].filter((selectedCategory) => selectedCategory !== category.attributes.Nombre)
                            setCategories(selectedCategories)
                        }
                     }} key={category.id} label={category.attributes.Nombre} variant="outlined" color={categories.includes(category.attributes.Nombre) ? 'secondary' : 'default'} />
                </>
            ) )}
        </Stack>
    </Paper>
    {
        eventos.map((evento) => {
            if(!isAllCategories && evento.attributes.Categorias.data.some((category) => categories.includes(category.attributes.Nombre))) {
                return <EventPreview evento={evento} key={evento.id} />
            } else if (isAllCategories){
                return <EventPreview evento={evento} key={evento.id} />
            }
        } 
        )
    }
    </>
)

}