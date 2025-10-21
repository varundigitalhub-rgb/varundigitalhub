require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const Contact = require('./contactModel');


const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/varun-digital-hub';
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
	const FROM_EMAIL = process.env.FROM_EMAIL;
	const TO_EMAIL = process.env.TO_EMAIL;

// Set SendGrid API key
sgMail.setApiKey(SENDGRID_API_KEY);

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.post('/contact', async (req, res) => {
	try {
		console.log('Received contact request:', req.body);
		const contact = new Contact(req.body);
		await contact.save();
		console.log('Contact saved successfully');
		console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

		// Send email notification
		try {
			const msg = {
				to: TO_EMAIL,
				from: FROM_EMAIL,
				subject: `New message from ${contact.name}`,
				text: `Sender's email: ${contact.email}\n\nMessage: ${contact.message}`,
			};
			await sgMail.send(msg);
			console.log('Email sent successfully');
			res.status(200).json({ success: true, message: 'Message sent successfully!' });
		} catch (emailErr) {
			console.error('SendGrid Error:', emailErr);
			if (emailErr.response) {
				console.error(emailErr.response.body);
			}
			res.status(500).json({ success: false, message: 'Failed to send message.' });
		}
	} catch (err) {
		console.error('Error in /contact:', err);
		res.status(500).json({ success: false, message: 'Failed to send message.' });
	}
});

app.get('/', (req, res) => {
	res.send('Varun Digital Hub API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
