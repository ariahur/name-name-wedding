import { Typography } from '@mui/material';
import React from 'react';
import { css } from '@emotion/react';

const footerHeight = 40;

const footerStyle = css({
    // transform: `translate(0px - ${footerHeight}px)`,
    width: '100%',
    // height: `${footerHeight}px`,
    textAlign: 'center',
    height: footerHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

const Footer = () => {
    return (
        <div css={footerStyle}>
            <Typography variant='caption'>copyright</Typography>
        </div>
    );
};

export default Footer;