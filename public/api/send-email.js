
const nodemailer = require('nodemailer');

// Configure your email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail', // You can use other services like 'outlook', 'yahoo', etc.
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-app-password' // Replace with your app password
  }
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, company, message } = req.body;

    const mailOptions = {
      from: email,
      to: 'hello@vertexlabs.com', // Your company email
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Enquiry from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
