const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Contact = require('./contactModel');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/varun-digital-hub';
const EMAIL_USER = process.env.EMAIL_USER || '';
const EMAIL_PASS = process.env.EMAIL_PASS || '';

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
		if (EMAIL_USER && EMAIL_PASS) {
			try {
				const transporter = nodemailer.createTransport({
					service: 'gmail',
					auth: { user: EMAIL_USER, pass: EMAIL_PASS },
				});
				await transporter.sendMail({
					from: EMAIL_USER,
					to: EMAIL_USER,
					subject: 'New Contact Lead',
					text: `Name: ${contact.name}\nEmail: ${contact.email}\nBusiness: ${contact.business}\nMessage: ${contact.message}`,
				});
				console.log('Email sent successfully');
			} catch (emailErr) {
				console.error('Email sending failed:', emailErr);
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
