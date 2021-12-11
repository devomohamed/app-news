const request = require('request')
const express = require('express')
const app = express()
const port = process.env.port || 3000
const path = require('path')



const news = require('./tools/news')



const puplicDirectory = path.join(__dirname, '../public');
app.use(express.static(puplicDirectory))

app.set('view engine', 'hbs');

const viewpath = path.join(__dirname, '../templets/views')
app.set('views', viewpath)



app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.render('index', {
    //     name: 'Mohamed'
    // })
})
app.get('/news', (req, res) => {
    news((error, data) => {
            if (error) {
                res.render('index', { error })
            } else {
                // console.log(data );
                res.render('index', { data })
            }
            // res.render('index', { data })
        })
        // res.render('index', { xx: 'cc' })

})
app.get('*', (req, res) => {
    res.send('Error 404 Not Found!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})