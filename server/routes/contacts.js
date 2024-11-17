const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Add a new contact
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact added successfully!' });
  } catch (err) {
    console.error("Error in POST /contacts:", err); // Log the error to the console
    res.status(500).json({ error: 'Failed to add contact', details: err.message });
  }
});


// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a contact
router.put('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Contact updated successfully!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Contact deleted successfully!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
