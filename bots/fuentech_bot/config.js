require('dotenv').config({});
const Twit = require('twit');

const {
  FUENTECHBOT_KEY,
  FUENTECHBOT_SECRET,
  FUENTECHBOT_TOKEN,
  FUENTECHBOT_TOKEN_SECRET,
  FUENTECHBOT_TIMEOUT
} = process.env;

const fuentechBot = new Twit({
  consumer_key: FUENTECHBOT_KEY,
  consumer_secret: FUENTECHBOT_SECRET,
  access_token: FUENTECHBOT_TOKEN,
  access_token_secret: FUENTECHBOT_TOKEN_SECRET,
  timeout_ms: FUENTECHBOT_TIMEOUT
});

module.exports = fuentechBot;
