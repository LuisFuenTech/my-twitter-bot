const { FuentechBot } = require('./bots');

const main = (params) => {
  switch (params[0]) {
    case 'post':
      FuentechBot.postTweet(params[1]);
      break;
    case 'followers':
      FuentechBot.showFollowers(params[1]);
      break;
    case 'following':
      FuentechBot.showFollowing(params[1]);
      break;
    case 'message':
      FuentechBot.postDirectMessage(params[1], params[2]);
      break;
    case 'stream':
      FuentechBot.streamWithFilter(params[1]);
      break;
    default:
      console.log('please enter a valid command');
      break;
  }
};

main(process.argv.slice(2));
