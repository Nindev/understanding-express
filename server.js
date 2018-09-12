import express from 'express';
const app = express();

// Posibility to change the port number from the terminal:
// With that, you can run PORT=8081 npm start which changes the port number
// Running npm run defaults to the port number being 5656
const port = process.env.PORT || 5656;

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})