
const path = require('path')
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const { error } = require('console');

const app = express()

// define paths  for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlers engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mohammed Faidey'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        
        name: 'Mohammed Faidey'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Mohammed Faidey'
    })
})


app.get('/weather', (req, res)=>{

    if(!req.query.address){
        return res.send(({
            error: 'Please provide the address'
        }))

    } 
        geocode(req.query.address, (error, {latitude, longitude, location} = {})=>{
            
            if(error){
                res.send({error})

            } 
            res.send({
                latitude:latitude,
                longitude:longitude,
                location:location
                })
            

        })
    

/*     res.send({
        forecast:' weather'
    }) */
})

app.get('/products', (req, res) => {

    if (!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404.hbs',{
        title: 'new 404.hbs',
        name: 'Mohammed Faidey',
        errorMessage: 'Article Not Found'
    })
})

app.get('*', (req, res)=>{
    res.render('404.hbs',{
        title: 'new 404.hbs',
        name: 'Mohammed Faidey',
        errorMessage: 'Page Not Found'
    })
})


// app.com
// app.com/help
// app.com/about

app.listen(3001, () => {
    console.log("server is up on port 3000")
})