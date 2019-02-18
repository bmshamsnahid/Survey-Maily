# Survey Mail

## Features
* Stripe Payment System
* Bulk mail with survey query
* Webhook to receive direct response from mail body
* Easy authentication with google

## Prerequisite Technologies In Your Machine
* [Node 10+](https://nodejs.org/en/)


## Installation

#### Clone Repo
```
git clone https://github.com/bmshamsnahid/Survey-Maily.git
```

#### Local App Configuration
In `config/dev.js` file update information according to your local machine.

Example:

```
module.exports = {
    googleClientID: '',
    googleClientSecret: '',
    mongoURI: '',
    cookieKey: '',
    stripePublishableKey: '',
    stripeSecretKey: '',
    sendGridKey: '',
    redirectDomain: 'http://localhost:3000',
};
```

In `client/.env.development` and `client/.env.production` add stripe public key.

Example

```
REACT_APP_STRIPE_KEY=pk_test_WrUREODJMeeD71YVWPChhOOM
```

## Run application

#### Install server dependencies
`npm install`

#### Install client dependencies
`cd client`
`yarn`

Local Machine (In development mode)
```
npm run dev
```

NB: Stripe valid test card no `4242424242424242`

## Run in Production
For production put the following environment variable.

```
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN,
};
```

Automated Building client side React application for `Heroku` is added on the script.
