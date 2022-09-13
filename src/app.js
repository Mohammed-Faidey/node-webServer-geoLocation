// if there is an error to run nodemon because the policies see the link
// https://stackoverflow.com/questions/63423584/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabl

const path = require('path')
const express = require('express');

//console.log(__dirname);
//console.log(__filename);

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

console.log(publicDirectoryPath)



// we will not need ir as index.html has special meaning to server 
// so the page is loaded automatically
/* app.get('', (req, res) => {
    //send HTML Page
    res.send("<h1> Home Page </h1>")
}) */

/* app.get('/help', (req, res) => {
    
    // send JSON
 //   res.send({
 //       name: 'Mohammed',
 //       age: '25'
 //   }) 
    
    //send JSON array
    res.send([
        {name: 'mohammed',
        age: 25},
        {name: 'mostafa',
        age: 58}
    ])
})


app.get('/about', (req, res) => {
    res.send(publicDirectoryPath + "\\about" )
    
})
 */
app.get('/weather', (req, res) => {
    res.send({
        location: 'Egypt',
        forecast: '25 c'
    })

})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log("server is up on port 3000")
})