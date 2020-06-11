const path = require('path')
const express = require('express')

const app = express()

//Vesta CP Node JS Template Unix socket server
var rootPath = path.normalize(__dirname)
const port = '/home/admin/web/api.devoverse.com/nodeapp/app.sock'

// Define paths for Express config
const pub_dir_path = path.join(__dirname, '../public')
const views_path = path.join(__dirname, '../templates')

// Set handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', views_path)

// Setup static directory to serve
app.use(express.static(pub_dir_path))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Md Ali Husain'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About',
        name: 'Md Ali Husain'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'help',
        msg: 'This is a helpful text!!'
    })
})

app.get('/weather', (req,res) => {
    res.send({
        location: 'Bareilly',
        forecast: 'Its 44 degrees out'
    })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
  console.log(`root_path - ${rootPath}`)
  console.log(`views_path - ${views_path}`)
  console.log(`pub_dir_path - ${pub_dir_path}`)
})
