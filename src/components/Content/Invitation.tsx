import { Item } from '@components/Layout';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { css } from '@emotion/react';

const invitationStyle = css({
    backgroundColor: 'rgb(244, 244, 244)',
    minHeight: 500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'uppercase'
});

const invitationHeaderStyle = css({
    minHeight: 100
});

const invitationContentStyle = css({
    lineHeight: 2,
    textAlign: 'center',
    letterSpacing: 1
})

const Invitation = () => {
    return (
        <div css={invitationStyle}>
            <Typography variant='h6' css={invitationHeaderStyle}>Invitation</Typography>
            <Typography variant='body1' css={invitationContentStyle}>
                서로가 마주보며 다져온 사랑을<br />
                이제 함께 한 곳을 바라보며<br/>
                걸어갈 수 있는 큰 사랑으로 키우고자 합니다.<br/>
                저희 두 사람이 사랑의 이름으로<br/>
                지켜나갈 수 있게 앞날을<br/>        
                축복해 주시면 감사하겠습니다.
            </Typography>
        </div>
    );
};

export default Invitation;