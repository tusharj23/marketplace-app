import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

type Listing = {
  id: number;
  title: string;
  description: string;
};

interface ManageListingsProps {
  boughtListings: Listing[];
  soldListings: Listing[];
  onEditListing: (updatedListing: Listing, type: 'bought' | 'sold') => void;
  onDeleteListing: (id: number, type: 'bought' | 'sold') => void;
  onAddListing: (newListing: Listing, type: 'bought' | 'sold') => void;
}

const StyledBox = styled(Box)({
  padding: '16px',
});

const ManageListings: React.FC<ManageListingsProps> = ({ boughtListings, soldListings, onEditListing, onDeleteListing, onAddListing }) => {
  const [editingListing, setEditingListing] = useState<Listing | null>(null);
  const [addingListingType, setAddingListingType] = useState<'bought' | 'sold' | null>(null);
  const [listingType, setListingType] = useState<'bought' | 'sold'>('bought');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleEditClick = (listing: Listing, type: 'bought' | 'sold') => {
    setEditingListing(listing);
    setListingType(type);
    setTitle(listing.title);
    setDescription(listing.description);
  };

  const handleDeleteClick = (id: number, type: 'bought' | 'sold') => {
    onDeleteListing(id, type);
  };

  const handleAddClick = (type: 'bought' | 'sold') => {
    setAddingListingType(type);
    setTitle('');
    setDescription('');
  };

  const handleDialogClose = () => {
    setEditingListing(null);
    setAddingListingType(null);
    setTitle('');
    setDescription('');
  };

  const handleDialogSave = () => {
    if (editingListing) {
      const updatedListing = { ...editingListing, title, description };
      onEditListing(updatedListing, listingType);
    } else if (addingListingType) {
      const newListing: Listing = {
        id: Date.now(),
        title,
        description,
      };
      onAddListing(newListing, addingListingType);
    }
    handleDialogClose();
  };

  return (
    <StyledBox>
      <Typography variant="h6" gutterBottom color="primary">
        Manage Listings
      </Typography>
      <Typography variant="subtitle1" gutterBottom color="secondary">
        Items Bought
      </Typography>
      <List>
        {boughtListings.map((listing) => (
          <ListItem key={listing.id}>
            <ListItemText primary={listing.title} secondary={listing.description} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(listing, 'bought')}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(listing.id, 'bought')}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Add new item" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="add" onClick={() => handleAddClick('bought')}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Typography variant="subtitle1" gutterBottom color="secondary">
        Items Sold
      </Typography>
      <List>
        {soldListings.map((listing) => (
          <ListItem key={listing.id}>
            <ListItemText primary={listing.title} secondary={listing.description} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(listing, 'sold')}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(listing.id, 'sold')}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Add new item" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="add" onClick={() => handleAddClick('sold')}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <Dialog open={!!editingListing || !!addingListingType} onClose={handleDialogClose}>
        <DialogTitle>{editingListing ? 'Edit Listing' : 'Add Listing'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </StyledBox>
  );
};

export default ManageListings;
