const express = require('express');
const router = express.Router();
const Complaint = require('../models/complaint');


// Submit a complaint
router.post('/submit', async (req, res) => {
  const { title, category, priority, description, location, name, email, attachment } = req.body;

  try {
    const newComplaint = new Complaint({
      title,
      category,
      priority,
      description,
      location,
      status: 'Pending',
      date: new Date().toLocaleDateString(),
      name,
      email,
      attachments: { name: attachment },
    });

    const savedComplaint = await newComplaint.save();
    res.status(201).json({ message: 'Complaint submitted', complaint: savedComplaint });
  } catch (err) {
    console.error('❌ Submit Error:', err.message);
    res.status(500).json({ error: 'Failed to submit complaint' });
  }
});

// Get complaint by ID
router.get('/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ message: 'Complaint not found' });
    res.json(complaint);
  } catch (err) {
    console.error('❌ Fetch Complaint Error:', err.message);
    res.status(500).json({ message: 'Error fetching complaint' });
  }
});

// Get all messages for a complaint
router.get('/:id/messages', async (req, res) => {
  try {
    const messages = await Message.find({ complaintId: req.params.id }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    console.error('❌ Fetch Messages Error:', err.message);
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
});

// Post a new message
router.post('/:id/messages', async (req, res) => {
  const { sender, text } = req.body;

  if (!text || !sender) {
    return res.status(400).json({ message: 'Sender and message are required' });
  }

  try {
    const newMessage = new Message({
      complaintId: req.params.id,
      sender,
      text,
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    console.error('❌ Send Message Error:', err.message);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

module.exports = router;
