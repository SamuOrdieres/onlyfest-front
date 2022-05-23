import * as React from 'react';
import Link from "next/link"
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function EventPreview({evento}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <Link href={`/eventos/${evento.id}`} >
      <CardMedia
        component="img"
        height="140"
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
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}