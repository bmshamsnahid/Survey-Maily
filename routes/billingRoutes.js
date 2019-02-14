/* eslint-disable import/order */

const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    if (!req.user) {
      return res.status(401).json({
        error: 'Please log in.',
      });
    }
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'some description',
      source: req.body.id,
    });
    req.user.credits += 5;
    const user = await req.user.save();
    return res.status(200).json(user);
  });
};
