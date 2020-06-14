const functions = require('firebase-functions');
const React  = require('react');
const {renderToString} = require('react-dom/server');
const App  = require('./src/app');
const express  = require('express');
const app = express();

const createDoc = (toMount) => {
  return `
  <!DOCTYPE html>
  <html lang="sv">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="canonical" href="https://filipg.se"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Filip Garamvölgyi - Programmerare/utvecklare i Java, C#, JavaScript och C. Läs mer om mig och mina projekt här!"
      />
      <meta
        name="keywords"
        content="filip, garamvölgyi, filip garamvölgyi, utvecklare, java, javascript, c, c#, portfolio, cv"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>Filip Garamvölgyi - Programmerare | utvecklare</title>
    </head>
    <body>
      <div id="root">${toMount}</div>
      <script type="text/javascript" src="bundle.js"></script>
    </body>
  </html>
  `
}
app.get('**', (req, res) => {
    const html = renderToString(React.createElement(App.default));
    res.set('Cache-Control', 'public, max-age=300, s-maxage=1200');
    res.send(createDoc(html));
});
exports.backend = functions.https.onRequest(app);