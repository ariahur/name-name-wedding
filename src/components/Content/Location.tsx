import { Item } from '@components/Layout';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { css } from '@emotion/react';
import { Map, Phone } from '@mui/icons-material';

const locationStyle = css({
    minHeight: 700,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'uppercase'
});

const locationHeaderStyle = css({
    minHeight: 100
});

const locationContentStyle = css({
    marginTop: 10
})

const Location = () => {
    return (
        <div css={locationStyle}>
            <Typography variant='h6' css={locationHeaderStyle}>Location</Typography>
            <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: 120 }}>
                <Typography css={locationContentStyle}>메종 드 프리미어 그랜드홀</Typography>
                <Typography css={locationContentStyle}>서울시 강남구 논현로 740</Typography>
                <Typography css={locationContentStyle}>02-2278-9977</Typography>
            </div>
            <div>
                <IconButton><Map /></IconButton>
                <IconButton><Phone /></IconButton>
            </div>
            <div css={{ border: '1px solid #000', minHeight: 200, width: '100%' }}>
            </div>
            <div css={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', minHeight: 200 }}>
                <Typography fontWeight={800} variant='body1'>버스 안내</Typography>
                <Typography variant='body2'>지선 7017, 7018 / 간선 5025, 5028 신사도고개</Typography>
                <Typography fontWeight={800} variant='body1' css={{ marginTop: 5 }}>지하철 안내</Typography>
                <Typography variant='body2'>7호선 학동역 8번 출구에서 100m 직진</Typography>
                <Typography fontWeight={800} variant='body1' css={{ marginTop: 5 }}>주차 안내</Typography>
                <Typography variant='body2'>지하 3층 주차장 이용</Typography>
            </div>
        </div>
    );
};

export default Location;