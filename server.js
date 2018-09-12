const express = require("express");
const data = require('./data/ships.json');
const app = express();
const path = require('path');
// Set the template engine to be pug:
// Express expects the pug pages to be in a directory called views
app.set('view engine', 'pug');

// Posibility to change the port number from the terminal:
// With that, you can run PORT=8081 npm start which changes the port number
// Running npm run defaults to the port number being 5656
const port = process.env.PORT || 5656;

app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "public")));

// Render the index pug page (views/index.pug)
app.get('/', (req, res) => {
  res.render('index', {
    title: 'SHIPYARD STORE',
    subtitle: 'TAKE TO THE STARS',
    content: "With real-world physics and credible futuristic engineering, Elite Dangerous' ships are built to feel real. Pick a spacecraft and customize it with hundreds of modular components to complement your play style in a game where your ship and your skills are all that stands between you and the cutthroat galaxy.",
    bgImage: 'https://media.playstation.com/is/image/SCEA/elite-dangerous-boxart-01-ps4-us-16June2017?$MediaCarousel_Original$'
  })
})

// Redirect users to the desired ship page
// if they navigate to the ships link
app.get('/ships/', (req,res) => {
  res.redirect('/ships/asp-explorer')
})

// Render each ships pages on the same pug template
// Because each ship pages as the same structure
app.get('/ships/asp-explorer', (req, res) => {
  res.render('ships', data.ships[0])
})

app.get('/ships/imperial-clipper', (req, res) => {
  res.render('ships', data.ships[1])
})

app.get('/ships/krait-mk2', (req, res) => {
  res.render('ships', data.ships[2])
})

// Listen to server on port 5656 if it's not set in the terminal
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})