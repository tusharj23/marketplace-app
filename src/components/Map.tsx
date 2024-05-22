import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const items = [
  {
    id: 1,
    seller: "Rohit",
    sellerLocation: { lat: 26.513034, lon: 80.232639 }, 
  },
  {
    id: 2,
    seller: "Aman Dhingra",
    sellerLocation: {lat: 26.515179, lon: 80.231255}, 
  },
  {
    id: 3,
    seller: "Moksh Jindal",
    sellerLocation: {  lat: 26.514498, lon: 80.232907},
  },
  {
    id: 4,
    seller: "Anirudh Narang",
    sellerLocation: { lat: 26.517927, lon: 80.234682 },
  },
  {
    id: 5,
    seller: "Jassu Khokhar",
    sellerLocation: {lat: 26.515768, lon: 80.232282  },
  },
  {
    id: 6,
    seller: "Ashu Duhan",
    sellerLocation: { lat: 26.517141, lon: 80.232052 },
  },
  {
    id: 7,
    seller: "Ankur Jangra",
    sellerLocation: { lat: 26.512279, lon: 80.233815 },
  },
  {
    id: 8,
    seller: "Garvit Malik",
    sellerLocation: { lat: 26.512959, lon: 80.230177 },
  },
  {
    id: 9,
    seller: "Garv Bajaj",
    sellerLocation: {lat: 26.514654, lon: 80.232181 },
  },
  
];

const Map: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = items.find((item) => item.id === parseInt(id || "", 10));

  if (!item) return <Typography variant="h5">Item not found</Typography>;

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Directions to {item.seller}'s Location
      </Typography>
      <iframe
        title="Map"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${item.sellerLocation.lon - 0.01}%2C${item.sellerLocation.lat - 0.01}%2C${item.sellerLocation.lon + 0.01}%2C${item.sellerLocation.lat + 0.01}&layer=mapnik&marker=${item.sellerLocation.lat}%2C${item.sellerLocation.lon}`}
        allowFullScreen
      ></iframe>
      <br/>
      <small>
        <a href={`https://www.openstreetmap.org/?mlat=${item.sellerLocation.lat}&mlon=${item.sellerLocation.lon}#map=15/${item.sellerLocation.lat}/${item.sellerLocation.lon}`} target="_blank" rel="noopener noreferrer">
          View Larger Map
        </a>
      </small>
    </Container>
  );
};

export default Map;
