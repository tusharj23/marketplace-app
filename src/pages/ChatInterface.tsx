// src/pages/ChatInterface.tsx
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import { useParams } from 'react-router-dom';
import HelpfulBot from '../components/HelpfulBot';

interface Message {
  text: string;
  sender: string;
}

interface RouteParams {
  id: string;
}

const StyledContainer = styled(Container)({
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  animation: 'fadeIn 0.5s ease-in-out',
});

const StyledList = styled(List)({
  maxHeight: '400px',
  overflow: 'auto',
  marginBottom: '16px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
});

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

const MessageListItem = styled(ListItem)({
  display: 'flex',
  alignItems: 'center',
  animation: 'slideIn 0.3s ease-in-out',
});

const ChatInterface: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'User' }]);
      setInput('');
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Chat with Seller
      </Typography>
      <StyledList>
        {messages.map((message, index) => (
          <MessageListItem key={index}>
            <PersonIcon sx={{ mr: 1 }} />
            <ListItemText primary={message.text} secondary={message.sender} />
          </MessageListItem>
        ))}
      </StyledList>
      <StyledTextField
        label="Type your message"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSend}>
              <SendIcon />
            </IconButton>
          ),
        }}
      />
      <HelpfulBot />
    </StyledContainer>
  );
};

export default ChatInterface;
