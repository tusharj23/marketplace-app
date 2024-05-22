import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  textAlign: 'center',
});

const LargeAvatar = styled(Avatar)({
  width: '80px',
  height: '80px',
  margin: '0 auto 16px',
});

type Profile = {
  name: string;
  email: string;
  phone: string;
  picture: string;  // Add this line
  itemsBought: number;
  itemsSold: number;
};

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <StyledCard>
      <CardContent>
        <LargeAvatar src={profile.picture}>{!profile.picture && profile.name.charAt(0)}</LargeAvatar>
        <Typography variant="h5" gutterBottom color="primary">
          {profile.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Email: {profile.email}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Phone: {profile.phone}
        </Typography>
        <Typography variant="h6" gutterBottom color="secondary">
          Activity Summary
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Items Bought: {profile.itemsBought}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Items Sold: {profile.itemsSold}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProfileCard;
