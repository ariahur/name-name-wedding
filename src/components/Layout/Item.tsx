import { Grid } from '@mui/material';
import React, { CSSProperties, ReactNode } from 'react';

interface ItemProps {
    children?: ReactNode;
    direction?: 'column' | 'row';
    gap?: number;
    style?: CSSProperties;
}

const ItemStyle = {
}

const Item = ({ children, direction = 'row', gap = 1, style }: ItemProps) => {
    return (
        <Grid item xs={12} sx={ItemStyle} container direction={direction} alignContent={'center'} justifyContent={'center'} gap={gap} style={style}>{children}</Grid>
    );
};

export default Item;