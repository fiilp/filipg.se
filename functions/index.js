const functions = require('firebase-functions');
const React  = require('react');
const {renderToString} = require('react-dom/server');
const App  = require('./src/app');
const express  = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


app.get('**', (req, res) => {
  console.log('ssr used');
  const html = renderToString(React.createElement(App.default));
  fs.readFile(path.resolve('./index.html'), 'utf-8', (err, data) => {
    if(err){
      console.log(err);
      return res.status(500).send('Server error...');
    }
    res.set('Cache-Control', 'public, max-age=300, s-maxage=1200');
    res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  });   
});
exports.backend = functions.https.onRequest(app);