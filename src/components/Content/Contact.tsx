import React from 'react';
import { css } from '@emotion/react';
import { IconButton, Typography } from '@mui/material';
import { Phone } from '@mui/icons-material';

const contactStyle = css({
    backgroundColor: '#F9F9FB',
    minHeight: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
});

const contactCoupleStyle = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    textAlign: 'center'
});

const contactParentStyle = css({
    marginTop: 30
});

const contactParentRowStyle = css({
    marginTop: 15
})

const Contact = () => {
    return (
        <div css={contactStyle}>
            <div css={contactCoupleStyle}>
                <div>
                    <Typography variant='h6'>신랑에게 연락하기</Typography>
                    <IconButton><Phone /></IconButton>
                    <div css={contactParentStyle}>
                        <Typography variant='body1'>신랑 측 혼주</Typography>
                        <div>
                            <div css={contactParentRowStyle}>
                                <Typography variant='body1'>아버지 <span css={{ fontWeight: 900 }}>XXX</span></Typography>
                                <IconButton><Phone /></IconButton>
                            </div>
                            <div css={contactParentRowStyle}>
                                <Typography variant='body1'>어머니 <span css={{ fontWeight: 900 }}>XXX</span></Typography>
                                <IconButton><Phone /></IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant='h6'>신부에게 연락하기</Typography>
                    <IconButton><Phone /></IconButton>
                    <div css={contactParentStyle}>
                        <Typography variant='body1'>신부 측 혼주</Typography>
                        <div>
                            <div css={contactParentRowStyle}>
                                <Typography variant='body1'>아버지 <span css={{ fontWeight: 900 }}>XXX</span></Typography>
                                <IconButton><Phone /></IconButton>
                            </div>
                            <div css={contactParentRowStyle}> 
                                <Typography variant='body1'>어머니 <span css={{ fontWeight: 900 }}>XXX</span></Typography>
                                <IconButton><Phone /></IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;