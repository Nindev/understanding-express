const express = require("express");
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

// Render a pug page (views/index.pug)
// app.get('/', (req, res) => {
//   res.render('index')
// })

// Redirect users to a desired ship page
// if they navigate to the root of the website
app.get('/', (req,res) =>{
  res.redirect('/asp-explorer')
})

// Render each ships on the same pug template
// Because each ship pages as the same structure
app.get('/asp-explorer', (req, res) => {
  res.render('index', {
    ship: 'ASP EXPLORER',
    manufacturer: 'Lakon Spaceways',
    content: 'The Asp Explorer is the civilian version of the military model Asp MkII (which first saw service in 2878). Lakon Spaceways now owns the licence to construct these ships and has marketed them heavily at customers looking for their first multi-crewed ships. The ship class has earned a solid reputation for long-range missions and those requiring some discretion.',
    crew: '2',
    mass: '280',
    price: '6,661,150'
  })
})

app.get('/imperial-clipper', (req, res) => {
  res.render('index', {
    ship: 'IMPERIAL CLIPPER',
    manufacturer: 'Gutamaya',
    content: 'The Imperial Clipper is the quintessential Imperial ship. It epitomises elegance of form while delivering speed and agility. Because of its balance of speed, luxury and strength it is used for transporting valuable items and personnel of importance across the Empire. With the navy ships these can come as standard, and not available for civilian, or export models.',
    crew: '2',
    mass: '400',
    price: '22,296,860'
  })
})

app.get('/krait-mk2', (req, res) => {
  res.render('index', {
    ship: 'KRAIT MKII',
    manufacturer: 'Faulcon deLacy',
    content: 'The Krait MkII is a reimagining of the Krait Lightspeeder, which was originally manufactured by Faulcon DeLacy in the 3100s. Although the new ship is larger than the original, it possesses many of the same characteristics, emphasising speed, manoeuvrability and firepower over defensive capability. The ship also boasts a fighter bay and space for up to two crew members, making it a good option for those seeking a medium-weight, multipurpose vessel.',
    crew: '3',
    mass: '320',
    price: '45,814,205'
  })
})
////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})