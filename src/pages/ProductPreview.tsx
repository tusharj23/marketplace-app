// src/ProductPreview.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from '@mui/system';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpfulBot from "../components/HelpfulBot";

const items = [
  {
    id: 1,
    title: "Leader Spyder 27.5T MTB Cycle/Bike Single",
    description:
      "The cycle is delivered in Semi-Assembled condition (90% assembled). Customer needs to assemble it before use. Allen Key & Spanner provided in box for installation.",
    price: "4,599",
    images: [
      "https://m.media-amazon.com/images/I/81R9kSTe4nL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81VdUNcVc+L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81rwWMno3RL._SX679_.jpg",
    ],
    seller: "Rohit",
    reviews: [
      { subtitle: "Review 1", content: "It is nice product of Leader brand ... Assembling is very easy .. main body frame give nice touch and feel ..." },
      { subtitle: "Review 2", content: "Easy assembly process, can be done at home.  However, facing little issue with brakes. Brakes need to be tightened regularly. Overall good cycle for beginners." }
    ],
  },
  {
    id: 2,
    title: "Bajaj PX97 Torque New 36L Personal Air Cooler",
    description: "ANTI-BACTERIAL HEXACOOL TECHNOLOGY PADS: Safeguard from bacteria and keeps it hygienic. Provide fresher & cleaner air and is malodour resistant. HEXACOOL TECHNOLOGY comes with HEXAGONAL DESIGN cooling media delivering maximum cooling with minimum water consumption.",
    price: "6199",
    images: ["https://m.media-amazon.com/images/I/61MQEToGQQL._SL1500_.jpg", "https://m.media-amazon.com/images/I/61KayVTejBL._SX679_.jpg", "https://m.media-amazon.com/images/I/71bI7huiKTL._SX679_.jpg"],
    seller: "Aman Dhingra",
    reviews: [
      { subtitle: "Review 1", content: "-Build quality is avg. It didn't matter while buying, but when it's time to clean the machine most the parts are not chamfered and they will bruise the skin." },
      { subtitle: "Review 2", content: "Serves the purpose to cool a single room with 2 people. Bought it in a hurry! Else would have done more research and bought a better one." }
    ],
  },
  {
    id: 3,
    title: "Acer Aspire Lite 12th Gen Intel Core i5-1235U Thin and Light Metal Laptop",
    description: "Processor: Great performance meets long battery life with the Intel Core i5-1235U Processor - up to 4.40 GHz, 10 cores, 12 threads, 12 MB Intel Smart Cache Visibly Stunning: Experience sharp details and crisp colors on the 15.6.",
    price: "46,999",
    images: ["https://m.media-amazon.com/images/I/61K-rBqZ++L._SX679_.jpg", "https://m.media-amazon.com/images/I/71xcBBdAX9L._SX679_.jpg", "https://m.media-amazon.com/images/I/61Xkk+I8kGL._SX679_.jpg"],
    seller: "Moksh Jindal",
    reviews: [
      { subtitle: "Review 1", content: "Coding, movies, document editing, browsing, etc has no performance lags.It is lightweight, battery life is good enough. Lasts 3+ hours easily.I use Up/Down arrow keys a lot, and this laptop has the best sized keys." },
      { subtitle: "Review 2", content: "This is a good product for my requirement. I do a music production and a little bit of coding. Fabulous display, great battery life. Recommended if you are looking for a good laptop at decent price" }
    ],
  },
  {
    id: 4,
    title: "Wakewell Cotton Mattress Multicolour Soft Gadda",
    description: "Cotton Mattress Made From top notch Cotton To provide proper Body Support .Content: 1 Cotton Mattress Both Side Usable, Reversible Mattress Multicolour Mattress Cotton Mattress Size: 3 X 6 Feet Or 72X36 Inch",
    price: "499",
    images: ["https://m.media-amazon.com/images/I/81EASaKCaEL._SX679_.jpg", "https://m.media-amazon.com/images/I/71kZ9PnG5xL._SX679_.jpg", "https://m.media-amazon.com/images/I/81EA1BcCN6L._SX679_.jpg"],
    seller: "Anirudh Narang",
    reviews: [
      { subtitle: "Review 1", content: "The entire bed is having the filler material getting lumped inside and flowing which ever direction the bed moved - no stiching done to hold them in place - utterly unusable and wasted money and time - negative or zero star rating not available to post" },
      { subtitle: "Review 2", content: "Quality of this product is good, i got as shown in the pitcher. I like this colour. This is soft and comfortable." }
    ],
  },
  {
    id: 5,
    title: "SUMMERCOOL Lagan-25L Portable Air Cooler for Home ",
    description: "Experience superior cooling performance with the Lagan-25L Portable Air Cooler for Home. Engineered with advanced features like turbo fan technology, a powerful blower, and an Everlast pump, this cooler ensures efficient and effective cooling for your indoor spaces. With i-Pure technology and low power consumption, it not only keeps your surroundings cool but also ensures clean and fresh air. Plus, with a 1-year warranty, you can enjoy peace of mind knowing you're investing in a quality product. Say goodbye to the heat and hello to comfort with the SUMMERCOOL Lagan-25L Portable Air Cooler.",
    price: "4,440",
    images: ["https://m.media-amazon.com/images/I/61kwF6dO0LL._SX679_.jpg", "https://m.media-amazon.com/images/I/61+SETlV44L._SX679_.jpg", "https://m.media-amazon.com/images/I/61UUfKkvHkL._SX679_.jpg"],
    seller: "Jassu Khokar",
    reviews: [
      { subtitle: "Review 1", content: "Swing function very nicely designed where-in the air flow is continuously thrown in the direction its facing plus the swing module which throws burst of air as and when it passes along. Its not the typical swing of other aircoolers or pedastal fan where-in there is a gap of no-air flow when its swinging." },
      { subtitle: "Review 2", content: "Water inlet is very narrow. One has to remove the back panel and pour a bucket of water each time one wants to refill. Not user friendly at all." }
    ],
  },
  {
    id: 6,
    title: " Lenovo ThinkPad 6th Gen Intel Core i5 Thin & Light HD Laptop ",
    description: "Lenovo ThinkPad gives fast performance at an affordable price. Laptop Ideal for professionals/students needing best-in-class, slim and lights. It's powered with Intel Core i5 6200U 2.3 GHz upto 2.8 GHz with Intel Turbo Boost Technology, 16 GB RAM along with 512 GB SSD Storage which enhances the overall performance of the machine and 3 MB cache.",
    price: "18999",
    images: ["https://m.media-amazon.com/images/I/41UtXudgXFL._SX569_.jpg","https://m.media-amazon.com/images/I/41X6xBqvnVL._SX569_.jpg", "https://m.media-amazon.com/images/I/419sVNFK33L._SX569_.jpg"],
    seller: "Ashu Duhan",
    reviews: [
      { subtitle: "Review 1", content: "Value for money, Laptop is working smoothly, looking like new , good keyboard, good battery 3.5 hour battery life, showing dual battery so good , USB ports working fine.Only mouse pad is little rough & response to finger movements is sluggish. But since I mostly use with external mouse so no issues." },
      { subtitle: "Review 2", content: "Overall product is ok, there is no damage and looks like new. But there was a problem with battery charger. After getting in touch wifh service team, new charger was dispatched immediately. So overall satisfied" }
    ],
  },
  {
    id: 7,
    title: "SLEEPSPA by COIRFIT | Foam Pressure Relieving Coir Mattress",
    description: "The mattress provides extra support to maintain your posture during sleep, which gives a refreshed feeling when you wake up, rather than discomfort and aches. No matter how you sleep, this mattress takes care of your posture and provides utmost comfort in all positions. This orthopedic mattress takes care of your back and knees while you’re enjoying a restful sleep.",
    price: "2,665",
    images: ["https://m.media-amazon.com/images/I/710aZPUpRNL._SX569_.jpg", "https://m.media-amazon.com/images/I/81Tq5eHHPYL._SX569_.jpg", "https://m.media-amazon.com/images/I/81W49zc9W0L._SX569_.jpg"],
    seller: "Ankur Jangra",
    reviews: [
      { subtitle: "Review 1", content: "This Mattress is really comfortable and delivers whatever it promises..Its not too soft to we sink in nor its too hard to hurts... its material is just right to give u a v good night sleep and wake up feeling fresh and energetic.. It delivers what it promises, no neck pain or back pain, comfortable and effortless sleep..etc...Great mattress..definitely 5 star for this product" },
      { subtitle: "Review 2", content: "I ordered 2 of the same product but recieved one exact product and one different from the what I ordered .And when I recieved the ordered I needed the product badly so i couldn't return the product and had to use it" }
    ],
  },
  {
    id: 8,
    title: "Safari Travel Bag",
    description: "Textured Scratch resistant Polypropylene shell .This light weight luggage comes with a Fixed combination Lock and 4 wheels for smooth manoeuvrability",
    price: "1,699",
    images: ["https://m.media-amazon.com/images/I/71vzctXOUbL._SX425_.jpg", "https://m.media-amazon.com/images/I/61MGLNo4poL._SX425_.jpg", "https://m.media-amazon.com/images/I/61izXmwrM0L._SX425_.jpg"],
    seller: "Garvit Malik",
    reviews: [
      { subtitle: "Review 1", content: "Good quality light in weight good material used and color is very attractive can pe spotted from far in airport conveyor belt, wheels are also smooth, over all a good product in good rate" },
      { subtitle: "Review 2", content: "The product quality is good. The space is also very sufficient. More than expected good quality. Weight of the bag is also light. Perfectly recommendable item. Worth according to money. Best deal found." }
    ],
  },
  {
    id: 9,
    title: "VESCO 24-T Drift Cycle for Big Kid's MTB Mountain Bike",
    description: "The unique stylish frame is stands out and gives you something which can ride safely and easily. The mig welded frame made of High Carbon steel its very robust and elegant at the same time.The colour coordinated; Premium P.U saddle has a quick release adjustment. The seat post features a clamp assembly, so it is easy for your say to pull it up or bring it down.",
    price: "5,499",
    images: ["https://m.media-amazon.com/images/I/71f8qDRAKDL._SX569_.jpg", "https://m.media-amazon.com/images/I/61Q9pCt5E1L._SX569_.jpg", "https://m.media-amazon.com/images/I/614VhQgAycL._SX569_.jpg"],
    seller: "Garv Bajaj",
    reviews: [
      { subtitle: "Review 1", content: "Since the packaging was torn, was very worried about missing accessories or item damaged, but luckily all were good... Assembly was easy and the cycle was awesome... Thank you... Just hoping the build is good and will for some years..." },
      { subtitle: "Review 2", content: "Rear Tyre is not properly rotate may be due to poor assemble in factory . They are not rorate freely one round in air when i pushed them by hand. I think Both Disk brakes prevent them from rotating without applying breaks. It's also company fault and can be due to poor assemble." }
    ],
  }
];

const StyledContainer = styled(Container)({
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  });
  
  const StyledCard = styled(Card)({
    marginBottom: '20px',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  });
  
  const StyledButton = styled(Button)({
    marginTop: '10px',
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  });
  
  const ReviewContainer = styled('div')({
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  });
  
  const ProductPreview: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product = items.find((item) => item.id === parseInt(id || "", 10));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    if (!product) {
      return (
        <StyledContainer>
          <Typography variant="h5">Product not found</Typography>
          <StyledButton onClick={() => navigate("/")}>Back to Products</StyledButton>
        </StyledContainer>
      );
    }
  
    const handleChatClick = () => {
      navigate(`/chat/${id}`);
    };
  
    const handleDirectionsClick = () => {
      navigate(`/map/${id}`);
    };
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
    };
  
    return (
      <StyledContainer>
        <Typography variant="h3" gutterBottom>
          {product.title}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img src={product.images[currentImageIndex]} alt={`${product.title} ${currentImageIndex + 1}`} style={{ width: '100%', borderRadius: '8px', maxHeight: '400px' }} />
                <IconButton
                  onClick={handlePrevImage}
                  style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={handleNextImage}
                  style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </div>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="body1" gutterBottom>
               <Typography variant="h5">Description of The Item:</Typography>{product.description} 
              </Typography>
              <Typography variant="h6" gutterBottom>
                Price: ₹{product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Seller: {product.seller}
              </Typography>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleChatClick}
                style={{ marginTop: "16px" }}
              >
                Chat with Seller
              </StyledButton>
              <StyledButton
                variant="contained"
                color="secondary"
                onClick={handleDirectionsClick}
                style={{ marginTop: "16px", marginLeft: "8px" }}
              >
                Directions to Seller
              </StyledButton>
            </CardContent>
          </Grid>
        </Grid>
        <ReviewContainer>
          <Typography variant="h5">Reviews:</Typography>
          {product.reviews.map((review, index) => (
            <div key={index}>
              <Typography variant="subtitle1" gutterBottom>
                {review.subtitle}
              </Typography>
              <Typography variant="body1" color="text.primary" gutterBottom>
                {review.content}
              </Typography>
            </div>
          ))}
        </ReviewContainer>
        <HelpfulBot />
      </StyledContainer>
    );
  };
  
  export default ProductPreview;