const express = require('express');
const cors = require('cors');
const routes = require('./routes/v1.js');

process.env.ACCESS_TOKEN_SECRET = 'ceci-est-un-token-secret';

const app = express();

app.use(cors({credentials: true}));
app.use(express.json());

app.use(routes);

/**
 * Start the API
 */
app.listen(4000, () => {
  console.log(`API listening at http://localhost:4000`);
});
