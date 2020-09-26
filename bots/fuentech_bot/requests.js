const { FuentechBot } = require('..');
const Bot = require('./config');

const postTweet = (text = 'This is a tweet...') => {
  Bot.post('statuses/update', { status: text }, function (
    error,
    data,
    response
  ) {
    if (error) {
      console.log(error);
    } else {
      console.log(`${data.text} was tweeted`);
      console.log(JSON.stringify(data, null, 4));
    }
  });
};

const showFollowers = (username = 'LuisFuentch') => {
  Bot.get('followers/list', { screen_name: username }, function (
    error,
    data,
    response
  ) {
    if (error) {
      console.log(error);
    } else {
      data.users.map((user) => console.log(user.screen_name));
    }
  });
};

const showFollowing = (username = 'LuisFuentch') => {
  Bot.get('friends/list', { screen_name: username }, function (
    error,
    data,
    response
  ) {
    if (error) {
      console.log(error);
    } else {
      data.users.map((user) => console.log(user.screen_name));
    }
  });
};

const postDirectMessage = (username, text) => {
  Bot.post('direct_messages/new', { text, screen_name: username }, function (
    error,
    data,
    response
  ) {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(data, null, 4));
    }
  });
};

const streamWithFilter = (filter = 'nodejs') => {
  const botStream = Bot.stream('statuses/filter', { track: filter });

  botStream.on('tweet', function (tweet) {
    console.log(`${tweet.text}\n`);
  });
};

module.exports = {
  postTweet,
  showFollowers,
  showFollowing,
  postDirectMessage,
  streamWithFilter
};
