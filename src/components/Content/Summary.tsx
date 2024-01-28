import React from 'react';
import { Item } from '@components';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { css } from '@emotion/react';

const CardImageStyle = {
    borderTopLeftRadius: '270px',
    borderTopRightRadius: '270px',
    boxShadow: `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
    border: '10px solid #FFFFFF'
}

const summaryStyle = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
});

const summaryContentStyle = css({
    minHeight: 200,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
})

const Summary = () => {
    return (
        <div css={summaryStyle}>
            <Card>
                <CardMedia component={'img'} alt={'main'} src={require('../../img/main.jpg')} sx={{ objectFit: 'contain' }} />
            </Card>
            <div css={summaryContentStyle}>
                <Typography variant='h4'>NAME&nbsp;·&nbsp;NAME</Typography>
                <Typography variant='body1'>2024.01.07 SAT 15:30</Typography>
                <Typography variant='body1'>Location</Typography>
            </div>
        </div>
    );
};

export default Summary;