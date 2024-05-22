// ItemCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

type Item = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

type ItemCardProps = {
  item: Item;
  onClick: () => void;
};

const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => {
  return (
    <Card onClick={onClick} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        style={{ height: 'auto', maxHeight: '200px', objectFit: 'contain' }}
      />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2">{item.description}</Typography>
        <Typography variant="h6" gutterBottom>
              Price: ₹{item.price}
            </Typography>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
