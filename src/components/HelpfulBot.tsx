import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

// Array of messages for the Helpful Bot
const messages = [
  "Welcome to our marketplace! How can I assist you today?",
  "Click on 'Go to User Profile' to manage the Profile and Product Listings",
  "You can view detailed information on ProductPreview Page about products by clicking on them.",
  "Need help? Click the 'Chat with Seller' button to start a conversation.",
  "Want to see the seller's location? Click on the 'Directions' button.",
];

const HelpfulBot: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle message cycling
  const handleNextMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  // Function to toggle the bot interface
  const toggleBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen ? (
        <IconButton
          onClick={toggleBot}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            width: 56,
            height: 56,
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "50%",
            boxShadow: 3,
            '&:hover': {
              backgroundColor: "primary.dark",
            },
          }}
        >
          <ChatIcon />
        </IconButton>
      ) : (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            width: 300,
            backgroundColor: "white",
            boxShadow: 3,
            borderRadius: 2,
            p: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" gutterBottom>
              <ChatIcon sx={{ mr: 1 }} /> Helpful Bot
            </Typography>
            <IconButton onClick={toggleBot} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body1" gutterBottom>
            {messages[currentMessageIndex]}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextMessage}
            sx={{ mt: 2 }}
          >
            Next
          </Button>
        </Box>
      )}
    </>
  );
};

export default HelpfulBot;
