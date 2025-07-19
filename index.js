const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const waitlistRoutes = require('./routes/waitlist');
const stripeRoutes = require('./routes/stripe');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/waitlist', waitlistRoutes);
app.use('/api/stripe', stripeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});