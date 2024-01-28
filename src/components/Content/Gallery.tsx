import { ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import { css } from '@emotion/react';

const galleryStyle = css({
    minHeight: 650,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'uppercase'
});

const galleryHeaderStyle = css({
    minHeight: 100
});

const Gallery = () => {
    return <div css={galleryStyle}>
        <Typography variant='h6' css={galleryHeaderStyle}>Gallery</Typography>
        <ImageList sx={{ height: 400 }} cols={3} rowHeight={164}>
            {imageList.map((item) => 
                <ImageListItem key={item.title}>
                    <img 
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} 
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title} 
                        loading={'lazy'} />
                </ImageListItem>
            )}
        </ImageList>
    </div>
};

const imageList = [
    {
        img: require('../../img/img01.jpg'),
        title: 'img01'
    },
    {
        img: require('../../img/img02.jpg'),
        title: 'img02'
    },
    {
        img: require('../../img/img03.jpg'),
        title: 'img03'
    },
    {
        img: require('../../img/img04.jpg'),
        title: 'img04'
    },
    {
        img: require('../../img/img05.jpg'),
        title: 'img05'
    },
    {
        img: require('../../img/img06.jpg'),
        title: 'img06'
    },
    {
        img: require('../../img/img07.jpg'),
        title: 'img07'
    },
    {
        img: require('../../img/img08.jpg'),
        title: 'img08'
    },
    {
        img: require('../../img/img09.jpg'),
        title: 'img09'
    }
]

export default Gallery;