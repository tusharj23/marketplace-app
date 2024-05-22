import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ProfileCard from '../components/ProfileCard';
import ManageListings from '../components/ManageListings';
import EditProfile from '../components/EditProfile';
import HelpfulBot from '../components/HelpfulBot';

const StyledContainer = styled(Container)({
  paddingTop: '20px',
  paddingBottom: '200px', // Add padding to the bottom to prevent overlap with HelpfulBot
});

const StyledPaper = styled(Paper)({
  padding: '16px',
  marginBottom: '16px',
});

type Profile = {
  name: string;
  email: string;
  phone: string;
  picture: string;
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

const initialProfile: Profile = {
  name: 'Tushar Jain',
  email: 'tusharj23@iitk.ac.in',
  phone: '8307276747',
  picture: 'https://media.licdn.com/dms/image/D4D03AQGh1SyCBsSp3Q/profile-displayphoto-shrink_400_400/0/1701769883153?e=1721865600&v=beta&t=N9UOi0GLchetA5Cpdlx1Fs2pr4tViuVK_NZc54nD35I',
  itemsBought: 2,
  itemsSold: 2,
  boughtListings: [
    { id: 1, title: 'Leader Spyder 27.5T MTB Cycle/Bike Single', description: 'Speed with Complete Accessories for Men - Matt Black/Orange Ideal for 15+ Years | Frame: 19 Inches' },
    { id: 2, title: 'Bajaj PX97 Torque New 36L Personal Air Cooler', description: 'DuramarinePump| TurboFan Technology| Powerful Air Throw| 3-Speed Control| Portable...' },
  ],
  soldListings: [
    { id: 1, title: 'Acer Aspire Lite 12th Gen Intel Core i5-1235U Thin and Light Metal Laptop', description: '(Windows 11 Home/16GB RAM/512GB SSD/Intel Iris Xe Graphics/MSO) AL15-52, 39.62cm (15.6") Full HD Display, Steel Gray, 1.59 KG' },
    { id: 2, title: 'Wakewell Cotton Mattress Multicolour Soft Gadda', description: '1 Sleeping Capacity, 72 x 36 Inch or 3 x 6 ft, Single Bed, Foldable, Light Weight' },
  ],
};

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(initialProfile);

  const handleProfileUpdate = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
  };

  const handleEditListing = (updatedListing: Listing, type: 'bought' | 'sold') => {
    setProfile((prevProfile) => {
      const updatedListings = type === 'bought'
        ? prevProfile.boughtListings.map((listing) =>
            listing.id === updatedListing.id ? updatedListing : listing
          )
        : prevProfile.soldListings.map((listing) =>
            listing.id === updatedListing.id ? updatedListing : listing
          );
      return {
        ...prevProfile,
        [type === 'bought' ? 'boughtListings' : 'soldListings']: updatedListings,
      };
    });
  };

  const handleDeleteListing = (id: number, type: 'bought' | 'sold') => {
    setProfile((prevProfile) => {
      const updatedListings = type === 'bought'
        ? prevProfile.boughtListings.filter((listing) => listing.id !== id)
        : prevProfile.soldListings.filter((listing) => listing.id !== id);
      return {
        ...prevProfile,
        [type === 'bought' ? 'boughtListings' : 'soldListings']: updatedListings,
        itemsBought: type === 'bought' ? prevProfile.itemsBought - 1 : prevProfile.itemsBought,
        itemsSold: type === 'sold' ? prevProfile.itemsSold - 1 : prevProfile.itemsSold,
      };
    });
  };

  const handleAddListing = (newListing: Listing, type: 'bought' | 'sold') => {
    setProfile((prevProfile) => {
      const updatedListings = type === 'bought'
        ? [...prevProfile.boughtListings, newListing]
        : [...prevProfile.soldListings, newListing];
      return {
        ...prevProfile,
        [type === 'bought' ? 'boughtListings' : 'soldListings']: updatedListings,
        itemsBought: type === 'bought' ? prevProfile.itemsBought + 1 : prevProfile.itemsBought,
        itemsSold: type === 'sold' ? prevProfile.itemsSold + 1 : prevProfile.itemsSold,
      };
    });
  };

  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <ProfileCard profile={profile} />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <EditProfile profile={profile} onProfileUpdate={handleProfileUpdate} />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <ManageListings
              boughtListings={profile.boughtListings}
              soldListings={profile.soldListings}
              onEditListing={handleEditListing}
              onDeleteListing={handleDeleteListing}
              onAddListing={handleAddListing}
            />
          </StyledPaper>
        </Grid>
      </Grid>
      <HelpfulBot />
    </StyledContainer>
  );
};

export default UserProfile;
