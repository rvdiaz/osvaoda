import { Box, Skeleton, useMediaQuery } from '@mui/material'
import React from 'react'
import { ListSkeleton } from '../../Basic/ListSkeleton';

export const SkeletonGrid = (props) => {
    const {items}=props;
    const isMdDevice = useMediaQuery('(max-width: 768px)');

    return (
    <Box 
    sx={{
        display:'grid',
        gridTemplateColumns:isMdDevice ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gridGap:'2vh'
    }}>
        <ListSkeleton length={items}>
            <Box>
                <Skeleton variant="rectangular" height={270} />
                <Skeleton />
                <Skeleton width="60%" />
            </Box>
        </ListSkeleton>
    </Box>
  )
}
