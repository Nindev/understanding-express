const app = require("express")();

// Set the template engine to be pug:
// Express expects the pug pages to be in a directory called views
app.set('view engine', 'pug');

// Posibility to change the port number from the terminal:
// With that, you can run PORT=8081 npm start which changes the port number
// Running npm run defaults to the port number being 5656
const port = process.env.PORT || 5656;

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
  res.render('index')
})

app.get('/imperial-clipper', (req, res) => {
  res.render('index')
})

app.get('/krait-mk2', (req, res) => {
  res.render('index')
})
////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})