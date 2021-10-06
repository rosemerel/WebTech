const express = require('express')
const app = express()

//CONFIG
const config = {
    port: 3000
  }
  const data = {
    channels: [{
      id: '1',
      name: 'Channel 1',
    },{
      id: '2',
      name: 'Channel 2',
    },{
      id: '3',
      name: 'Channel 3',
    }]
}

//GET
app.get('/', (req, res) => {
  // Project homepage
  // Return some HTML content inside `body` with:
  // * The page title
  // * A link to the `/channels` page
  res.render('homepage.ejs');
  // Don't bother with the `head` tag
})


app.get('/channels', (req, res) => {
  // List of channels
  // Return some HTML content inside `body` with:
  // * The page title
  // * A list of every channel with a link to the channel page
  // Notes:
  // * Channels are identified by channel ids.
  // * Make sure to find the appropriate HTML tag to respect the HTML semantic
  //   of a list
  res.render('channels.ejs');
})

app.get('/channel/:id', (req, res) => {
  // Channel information
  // Print the channel title
  const channel = req.params.id;
  if(channel == '1' || channel == '2' || channel == '3'){
    res.render('channel.ejs', {channelnumber: data.channels[channel-1].name});
  }else{
    //res.render('channel.ejs', {channelnumber: 'uknown channel'});
  }

})
  
//LISTEN
app.listen(config.port, () => {
   console.log(`Chat is waiting for you at http://localhost:${config.port}`)
})


//SET
app.set('views', __dirname + "/views")
  app.set('view engine', 'ejs');