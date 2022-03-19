import React from 'react';
import { ImageList, ImageListItem, Container } from '@mui/material';

const Results = ({ data }) => {
  if (data.length > 0) {
    return (
      <Container maxWidth="md">
        <ImageList variant="masonry" cols={3} gap={8}>
          {data.map(({ images, title, id }) => (
            <ImageListItem className="image-list-item" key={id}>
              <img
                src={`${images.downsized.url}?w=248&fit=crop&auto=format`}
                srcSet={`${images.downsized.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  }
  return null;
};

export default Results;
