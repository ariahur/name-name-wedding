import { Item } from '@components/Layout';
import { css } from '@emotion/react';
import React from 'react';

const rsvpStyle = css({
    backgroundColor: 'rgb(244, 244, 244)',
    minHeight: 450,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'uppercase'
})

const Rsvp = () => {
    return (
        <div css={rsvpStyle}>
            rsvp
        </div>
    );
};

export default Rsvp;