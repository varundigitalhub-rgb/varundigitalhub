const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const Contact = require('./contactModel');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/varun-digital-hub';
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
const EMAIL_USER = process.env.EMAIL_USER || 'your-receiving-email@example.com'; // CHANGE THIS to the email address where you want to receive messages.

// Set SendGrid API key
sgMail.setApiKey(SENDGRID_API_KEY);

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.post('/api/contact', async (req, res) => {
	try {
		console.log('Received contact request:', req.body);
		const contact = new Contact(req.body);
		await contact.save();
		console.log('Contact saved successfully');

		// Send email notification
		if (SENDGRID_API_KEY) {
			try {
				const msg = {
					to: EMAIL_USER,
					from: 'noreply@your-verified-domain.com', // CHANGE THIS to a verified sender email in your SendGrid account.
					subject: `New Contact Lead: ${contact.name}`,
					html: `
						<p>You have received a new message from your contact form.</p>
						<hr>
						<p><strong>Name:</strong> ${contact.name}</p>
						<p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
						<p><strong>Business:</strong> ${contact.business}</p>
						<p><strong>Message:</strong></p>
						<p>${contact.message}</p>
						<hr>
					`,
				};
				await sgMail.send(msg);
				console.log('Email sent successfully');
			} catch (emailErr) {
				console.error('SendGrid Error:', emailErr);
				if (emailErr.response) {
					console.error(emailErr.response.body);
				}
				// Don't fail the request if email fails
			}
		}

		res.status(201).json({ message: 'Message received!' });
	} catch (err) {
		console.error('Error in /api/contact:', err);
		res.status(500).json({ error: 'Failed to send message.' });
	}
});

app.get('/', (req, res) => {
	res.send('Varun Digital Hub API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
