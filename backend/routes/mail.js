// server.js or routes/mail.js
const nodemailer = require('nodemailer');
// Do NOT use your actual Gmail password here
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'abcd efgh ijkl mnop', // Use App Password from Google
    },
  });
  
app.post('/api/send-feedback-mail', async (req, res) => {
  const { email, name, complaintTitle, complaintId } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Complaint Received - ResolveNow',
    html: `
      <h3>Hi ${name},</h3>
      <p>Your complaint titled "<strong>${complaintTitle}</strong>" has been received.</p>
      <p>Your Complaint ID: <strong>${complaintId}</strong></p>
      <p>We'll review it and get back to you soon.</p>
      <br/>
      <p>Thank you,</p>
      <b>ResolveNow Team</b>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to send email');
  }
});
