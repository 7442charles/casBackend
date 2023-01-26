const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'secret-key', // use a secure secret key
  resave: false,
  saveUninitialized: true
}))

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  // authenticate the user using your preferred method
  const user = authenticate(username, password)

  if (user) {
    // save the user object in the session
    req.session.user = user
    res.redirect('/')
  } else {
    res.send('Invalid username or password')
  }
})

app.get('/', (req, res) => {
  // check if the user is logged in
  if (req.session.user) {
    res.send('Welcome, ' + req.session.user.username)
  } else {
    res.send('Please log in')
  }
})

app.listen(3000)
