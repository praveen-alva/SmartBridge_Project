const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const complaintRoutes = require('./routes/complaints');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api', authRoutes);
app.use('/api/complaints', complaintRoutes);

// Send Feedback Email
app.post('/api/send-feedback-mail', async (req, res) => {
  const { email, name, complaintTitle, complaintId } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"ResolveNow" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Complaint #${complaintId} Received`,
      html: `
        <h3>Hello ${name},</h3>
        <p>We’ve received your complaint: <strong>${complaintTitle}</strong>.</p>
        <p>Your Complaint ID is: <strong>${complaintId}</strong>.</p>
        <p>We’ll keep you updated on its progress.</p>
        <br />
        <p>Regards,<br />ResolveNow Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('❌ Email error:', err.message);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
