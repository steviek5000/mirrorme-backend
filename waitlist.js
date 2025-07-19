const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

const db = admin.firestore();

router.post('/', async (req, res) => {
  const { email, ref } = req.body;
  const referralCode = uuidv4().slice(0, 6);
  const userData = { email, referralCode, referrer: ref || null };

  try {
    await db.collection('waitlist').add(userData);
    res.status(200).json({ message: 'Added to waitlist', referralCode });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to waitlist' });
  }
});

module.exports = router;