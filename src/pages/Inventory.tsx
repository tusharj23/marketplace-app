import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  AppBar,
  Toolbar,
  CardActions,
} from '@mui/material';
import { styled } from '@mui/system';
import { Edit, Delete, Add } from '@mui/icons-material';

const StyledContainer = styled(Container)({
  paddingTop: '20px',
  paddingBottom: '200px',
});

const Header = styled(AppBar)({
  marginBottom: '20px',
});

const Footer = styled('footer')({
  marginTop: '20px',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
});

const StyledCard = styled(Card)({
  maxWidth: 400,
  marginBottom: '20px',
});

const StyledCardMedia = styled(CardMedia)({
  height: 300,
  width: '100%',
  objectFit: 'cover',
});

type Listing = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
};

const initialListings: Listing[] = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/81y9uUq1lnL._SL1500_.jpg',
    title: 'Leader Spyder 27.5T MTB Cycle/Bike Single',
    description: 'Speed with Complete Accessories for Men - Matt Black/Orange Ideal for 15+ Years | Frame: 19 Inches',
    price: 4599,
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/61djKQOM5CL._SL1500_.jpg',
    title: 'Bajaj PX97 Torque New 36L Personal Air Cooler',
    description: 'DuramarinePump| TurboFan Technology| Powerful Air Throw| 3-Speed Control| Portable...',
    price: 6199,
  },
];

const Inventory: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>(initialListings);
  const [open, setOpen] = useState(false);
  const [currentListing, setCurrentListing] = useState<Listing | null>({
    id: 0,
    image: '',
    title: '',
    description: '',
    price: 0,
  });

  const handleClickOpen = (listing: Listing | null) => {
    if (listing) {
      setCurrentListing(listing);
    } else {
      setCurrentListing({
        id: 0,
        image: '',
        title: '',
        description: '',
        price: 0,
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentListing(null);
  };

  const handleSave = () => {
    if (currentListing) {
      if (currentListing.id) {
        setListings((prevListings) =>
          prevListings.map((listing) =>
            listing.id === currentListing.id ? currentListing : listing
          )
        );
      } else {
        setListings((prevListings) => [
          ...prevListings,
          { ...currentListing, id: listings.length + 1 } as Listing,
        ]);
      }
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setListings((prevListings) => prevListings.filter((listing) => listing.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentListing((prevListing) =>
      prevListing ? { ...prevListing, [name]: value } : null
    );
  };

  return (
    <StyledContainer>
      <Header position="static">
        <Toolbar>
          <Typography variant="h6">Inventory</Typography>
        </Toolbar>
      </Header>
      <Typography variant="h4" gutterBottom>
        Welcome to Your Inventory
      </Typography>
      <Grid container spacing={3}>
        {listings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} key={listing.id}>
            <StyledCard>
              <StyledCardMedia
                image={listing.image}
                title={listing.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {listing.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {listing.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ₹{listing.price}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => handleClickOpen(listing)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(listing.id)}>
                  <Delete />
                </IconButton>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => handleClickOpen(null)}
          >
            Add New Item
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentListing?.id ? 'Edit Listing' : 'Add Listing'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="image"
            label="Image URL"
            type="url"
            fullWidth
            variant="outlined"
            value={currentListing?.image || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={currentListing?.title || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={currentListing?.description || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            variant="outlined"
            value={currentListing?.price || ''}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Footer>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Your Company
        </Typography>
      </Footer>
    </StyledContainer>
  );
};

export default Inventory;
