const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

// app.use(cors);

app.get('/', async (req, res) => {
  const BASE_URL = 'https://www.oauth.com/playground/auth-dialog.html';
  const responseType = 'response_type=code';
  const clientId = `&client_id=${process.env.CREDS.client_id}`;
  const redirectUri = `&redirect_uri=${req.headers.host}/auth`;
  const scope = '&scope=photo+offline_access';
  const state = '&state=XPWPx0AuQCIlCmUb';
  const url = `${BASE_URL}?${responseType}${clientId}${redirectUri}${scope}${state}`;
  const resp = await axios.get(url);
  res.send(resp.data);
});

app.get('/auth', (req, res) => res.send('AUTH'));

app.listen(PORT, () => console.log(`\nListening on port ${PORT}...`));
