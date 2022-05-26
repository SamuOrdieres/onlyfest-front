import * as React from 'react';
import Link from "next/link"
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';



export default function EventPreview({evento}) {

  function renderCategoryChips(categories){

    return categories.map((category) => {
        return <Chip key={category.id} label={category.attributes.Nombre} variant="outlined" />
    })
  }
  return (
    <Card>
      <CardActionArea>
      <Link href={`/eventos/${evento.id}`} >
      <CardMedia
        component="img"
        width="320"
        image={evento.attributes.ImagenPrincipal.data.attributes.formats.medium.url}
        alt="green iguana"
      />
            </Link>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {evento.attributes.Titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {evento.attributes.DescripcionCorta}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        {renderCategoryChips(evento.attributes.Categorias.data)}
      </CardActions>
    </Card>
  );
}