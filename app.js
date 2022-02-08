const express = require('express');
const app = express();
// const port = 3000;
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const homeRouter = require('./routes/index')
const removeExtraCharsRoute = require('./routes/removeExtraChars');
const PORT = process.env.PORT || 3000;
const swaggerDefinition = {
  info: {
    title: 'Remove Consecutive Characters',
    version: '1.0.0',
    description: 'An api which removes consecutive characters from consecutive runs of the same character, where the length of the run is greater than the input parameter.', 
  },
  host: `localhost:${PORT}`, 
  basePath: '/', 
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/removeExtraChars.js'],
};

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });

// app.get('/:str/:count', function (req, res) {
//   let parsedString = "";
//   let activeIndex = '';
//   let requestedString = req.params.str;
//   let requestedCount = req.params.count;
//   for (var i = 0; i < requestedString.length; i++) {
//     if (requestedString[i] == requestedString[i - 1] && activeIndex < requestedCount) activeIndex += 1, parsedString += requestedString[i];
//     if (requestedString[i] !== requestedString[i - 1]) activeIndex = 1, parsedString += requestedString[i];
//     requestedString[i - 1] = requestedString[i];
//   }
//   console.log(requestedString + ' => ' + parsedString);
//   res.send(parsedString)
// });
app.use('/', homeRouter);
app.use('/remove-chars', removeExtraCharsRoute);
const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
});