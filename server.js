const express = require('express')
const app = express()
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('DB is ready!')
});

app.use(express.json())
app.use('/api/websites', require('./routes/api/web'))

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is starting at port ${PORT}`))