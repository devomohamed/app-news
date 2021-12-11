const request = require('request')
const news = (callback) => {
    const url = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=fbde509c73f24dd4b6ad1fbc7af301b7'
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable To Connect Wether Service', undefined)
        } else if (response.body.message) {
            callback(response.body.message, undefined)
        } else {
            callback(undefined, response.body.articles)
        }
    })
}

module.exports = news;