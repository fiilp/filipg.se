const functions = require('firebase-functions');
const React  = require('react');
const {renderToString} = require('react-dom/server');
const App  = require('./src/app');
const express  = require('express');
const app = express();

const createDoc = (toMount) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${toMount}</div>
      <script type="text/javascript" src="bundle.js"></script>
    </body>
  </html>
  `
}
app.get('**', (req, res) => {
    console.log('using functions');
    const html = renderToString(React.createElement(App.default));
    res.set('Cache-Control', 'public, max-age=300, s-maxage=1200');
    res.send(createDoc(html));
});
exports.backend = functions.https.onRequest(app);