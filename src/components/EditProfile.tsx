import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

type Profile = {
  name: string;
  email: string;
  phone: string;
  picture: string; // Add this line
  itemsBought: number;
  itemsSold: number;
  boughtListings: Listing[];
  soldListings: Listing[];
};

type Listing = {
  id: number;
  title: string;
  description: string;
};

interface EditProfileProps {
  profile: Profile;
  onProfileUpdate: (profile: Profile) => void;
}

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const EditProfile: React.FC<EditProfileProps> = ({ profile, onProfileUpdate }) => {
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSubmit = () => {
    onProfileUpdate(editedProfile);
  };

  return (
    <StyledBox>
      <Typography variant="h6" color="primary">Edit Profile</Typography>
      <TextField
        label="Name"
        name="name"
        value={editedProfile.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        value={editedProfile.email}
        onChange={handleChange}
      />
      <TextField
        label="Phone"
        name="phone"
        value={editedProfile.phone}
        onChange={handleChange}
      />
      <TextField
        label="Profile Picture URL"
        name="picture"
        value={editedProfile.picture}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </StyledBox>
  );
};

export default EditProfile;
