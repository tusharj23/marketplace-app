import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Marketplace
        </Typography>
        <Button color="inherit" onClick={handleProfileClick}>
          Go to User Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
