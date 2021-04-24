var express = require('express');
var app = express();
const settings = require('./Routes/settings')
const dashborad = require('./Routes/dashboard')
const blogs = require('./Routes/blogs')

app.use('/', dashborad)
app.use('/blogs', blogs)
app.use('/settings', settings)

app.listen(3000, function () {
    console.log('Listening to Port 8000');
});