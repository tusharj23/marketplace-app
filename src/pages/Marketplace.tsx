import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ItemCard from '../components/ItemCard';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HelpfulBot from '../components/HelpfulBot';

const items = [
  { id: 1, title: 'Leader Spyder 27.5T MTB Cycle/Bike Single', description: 'Speed with Complete Accessories for Men - Matt Black/Orange Ideal for 15+ Years | Frame: 19 Inches', price: '4,599', image: 'https://m.media-amazon.com/images/I/81y9uUq1lnL._SL1500_.jpg' },
  { id: 2, title: 'Bajaj PX97 Torque New 36L Personal Air Cooler', description: 'DuramarinePump| TurboFan Technology| Powerful Air Throw| 3-Speed Control| Portable...', price: '6,199', image: 'https://m.media-amazon.com/images/I/61djKQOM5CL._SL1500_.jpg' },
  { id: 3, title: 'Acer Aspire Lite 12th Gen Intel Core i5-1235U Thin and Light Metal Laptop', description: '(Windows 11 Home/16GB RAM/512GB SSD/Intel Iris Xe Graphics/MSO) AL15-52, 39.62cm (15.6") Full HD Display, Steel Gray, 1.59 KG', price: '46,999', image: 'https://m.media-amazon.com/images/I/51KL3aOZ0tL._SX679_.jpg' },
  { id: 4, title: 'Wakewell Cotton Mattress Multicolour Soft Gadda', description: '1 Sleeping Capacity, 72 x 36 Inch or 3 x 6 ft, Single Bed, Foldable, Light Weight', price: '499', image: 'https://m.media-amazon.com/images/I/81mNym7TFqL._SX679_.jpg' },
  { id: 5, title: 'SUMMERCOOL Lagan-25L Portable Air Cooler for Home ', description: 'Turbo Fan Technology | Powerful Blower | Everlast Pump | i-Pure Technology and Low Power Consumption | 1 Year Warranty', price: '4,440', image: 'https://m.media-amazon.com/images/I/61xndaZbtkL._SX679_.jpg' },
  {id: 6, title: ' Lenovo ThinkPad 6th Gen Intel Core i5 Thin & Light HD Laptop ', description: '16 GB RAM/512 GB SSD/14" (35.6 cm) HD/Windows 11/MS Office/WiFi/Webcam/Intel Graphics, Black', price: '18,999', image: 'https://m.media-amazon.com/images/I/61vGumezioL._SX569_.jpg'  },
  {id: 7, title: 'SLEEPSPA by COIRFIT | Foam Pressure Relieving Coir Mattress ', description: 'For Back Pain, Durable Construction | Improves Sleep Experience, 72X30X4', price: '2665', image: 'https://m.media-amazon.com/images/I/71kEWtEE4DL._SX569_.jpg'  },
  {id: 8, title: 'Safari Bag for Travel', description: 'Polypropylene Pentagon| Hardside Small Size Cabin Luggage| Speed_Wheel 8| Black Color| 55Cm', price: '1,699', image: 'https://m.media-amazon.com/images/I/61piNi70giL._SX425_.jpg'  },
  {id: 9, title: 'VESCO 24-T Drift Cycle for Big Kids MTB Mountain Bike', description: 'Dual Disk Brake & Front Suspension Single Speed Bicycle for Boys and Girls | 16 inches Frame | Ideal for 9-14 Years (Grey)', price: '5,439', image: 'https://m.media-amazon.com/images/I/71qlyHAewrL._SX569_.jpg'  },
];

const StyledContainer = styled(Container)({
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 0.5s ease-in-out',
  });
  
  const StyledTypography = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    '& .MuiSvgIcon-root': {
      marginRight: '8px',
    },
  });
  
  const StyledBox = styled(Box)({
    paddingBottom: '64px', // Adjust padding for bottom space
  });
  
  const Marketplace: React.FC = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(3599);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };
  
    const handleItemClick = (id: number) => {
      navigate(`/product/${id}`);
    };
  
    return (
      <div>
        <Header />
        <StyledContainer>
          <StyledTypography variant="h3" gutterBottom>
            Welcome to our Campus E-Bay
          </StyledTypography>
          <StyledTypography variant="h6" gutterBottom>
            <AccessTimeIcon />
            Marketplace will be updated in {formatTime(timeLeft)} mins
          </StyledTypography>
          <StyledBox>
            <Grid container spacing={4}>
              {items.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <ItemCard item={item} onClick={() => handleItemClick(item.id)} />
                </Grid>
              ))}
            </Grid>
          </StyledBox>
        </StyledContainer>
        <Footer />
        <HelpfulBot />
      </div>
    );
  };
  
  
export default Marketplace;
