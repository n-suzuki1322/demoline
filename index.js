const 
  line = require('@line/bot-sdk'),
  app = require('express')(),
  port = 3000;

require('dotenv').config();

const config = {
  channelAccessToken: process.env.ACCESS_TOKEN,
  channelSecret: process.env.SECRET_KEY,
},
client = new line.Client(config);

app
  .post("/webhook", line.middleware(config), (req, res) => handleBot(req, res))
  .listen(port, () => console.log(`listning on ${port}`));
  
const handleBot = (req, res) => {
  res.status(200).end();
  req.body.events.map(event => {
    client.replyMessage(event.replyToken, { type: 'text', text: 'this is my name' });
  })
}

