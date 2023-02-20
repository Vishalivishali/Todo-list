import React from 'react';
import { Box } from '@mui/material';
import Display from './Display';

const DisplayBox = (context) => <Box>

	<Display { ...context }/>
</Box>;

export default DisplayBox;
