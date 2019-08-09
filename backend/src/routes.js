const express = require('express');
const Dev = require('./controllers/Dev');
const Like = require('./controllers/Like');
const Dislike = require('./controllers/Dislike');

const routes = express.Router();

routes.get('/devs', Dev.index);
routes.post('/devs', Dev.store);

routes.post('/devs/:devId/likes', Like.store);
routes.post('/devs/:devId/dislikes', Dislike.store);

module.exports = routes;