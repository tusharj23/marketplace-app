import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" py={3} bgcolor="text.secondary" color="white">
      <Container>
        <Typography variant="body1" align="center">
          &copy; 2024 Marketplace. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
