import * as React from 'react';
import Link from "next/link"
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import moment from 'moment';
import 'moment/locale/es'




export default function EventPreview({evento}) {
  moment.locale('es')
  const formattedEventDate = moment(evento.attributes.FechaInicio).format('dddd, D MMMM')

  function renderCategoryChips(categories){

    return categories.map((category) => {
        return <Chip key={category.id} label={category.attributes.Nombre} variant="outlined" />
    })


  }
  return (
    <Card>
      <CardHeader
        subheader ={ <Typography sx={{ fontSize: '0.8rem' }}>{formattedEventDate}</Typography> }
        title= { <Typography sx={{ fontSize: '1.3rem', fontWeight: '800' }}>{evento.attributes.Titulo}</Typography> }
      />
      <CardActionArea>
      <Link href={`/eventos/${evento.id}`} >
      <CardMedia
        component="img"
        width="320"
        image={evento.attributes.ImagenPrincipal.data.attributes.formats.large.url}
        alt="green iguana"
      />
            </Link>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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