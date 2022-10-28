import * as React from "react";
import MarkdownIt from "markdown-it";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import moment from "moment";
import "moment/locale/es";
import Image from "next/image";

export default function EventContent({ evento }) {
  moment.locale("es");
  const formattedEventDate = moment(evento.attributes.FechaInicio).format(
    "dddd, D MMMM"
  );
  const md = new MarkdownIt({
    html: false,
  });
  const htmlContent = md.render(evento.attributes.Descripcion);

  return (
    <>
      <ImageList
        sx={{ width: 1 / 1, minHeight: 300, maxHeight: 500, margin: 0 }}
        cols={1}
      >
        <ImageListItem key={evento.attributes.ImagenPrincipal.data.id} cols={1}>
          <Image
            src={`${evento.attributes.ImagenPrincipal.data.attributes.formats.medium.url}`}
            //  src={`${evento.attributes.ImagenPrincipal.data.attributes.formats.large.url}`}

            srcSet={`
              ${evento.attributes.ImagenPrincipal.data.attributes.formats.thumbnail.url} 245w,
              ${evento.attributes.ImagenPrincipal.data.attributes.formats.small.url} 500w,
              ${evento.attributes.ImagenPrincipal.data.attributes.formats.medium.url} 750w
              `}
            // ${evento.attributes.ImagenPrincipal.data.attributes.formats.large.url} 1000w

            alt={evento.attributes.Titulo}
            loading="lazy"
          />
          <ImageListItemBar
            position="top"
            actionPosition="left"
            title={evento.attributes.Titulo}
            subtitle={formattedEventDate}
          />
          <ImageListItemBar
            position="bottom"
            // subtitle={evento.attributes.Titulo}
            title={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${evento.attributes.Titulo}`}
              >
                <Button variant="contained" href="https://entradas.onlyfest.es">
                  {/* cambiar por --> {evento.attributes.entradas.data.attributes[0].urlMusikaze} */}
                  Compra ahora tus entradas
                </Button>
              </IconButton>
            }
          />
        </ImageListItem>
      </ImageList>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 500,
            padding: 1,
          },
        }}
      >
        <article>
          <header>
            <h1>{evento.attributes.Titulo}</h1>
            <h4>{evento.attributes.DescripcionCorta}</h4>
          </header>

          <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
        </article>
      </Box>
    </>
  );
}
