import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';
import { Box, Typography, Container } from '@mui/material';

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const { data } = await axios.get('http://localhost:5000/contacts');
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Management System
      </Typography>
      <Box sx={{ my: 2, p: 2, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 2 }}>
        <ContactForm fetchContacts={fetchContacts} />
      </Box>
      <Box sx={{ my: 2, p: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 2 }}>
        <ContactsTable contacts={contacts} fetchContacts={fetchContacts} />
      </Box>
    </Container>
  );
}

export default App;
