const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/get-user', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Kein Token empfangen' });
  }

  try {
    const robloxRes = await fetch('https://users.roblox.com/v1/users/authenticated', {
      headers: {
        Cookie: `.ROBLOSECURITY=${token}`
      }
    });

    if (!robloxRes.ok) {
      return res.status(401).json({ error: 'Ungültiger Token' });
    }

    const userData = await robloxRes.json();

    res.json({
      id: userData.id,
      name: userData.name
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Serverfehler' });
  }
});

app.listen(3000, () => {
  console.log('✅ Server läuft auf http://localhost:3000');
});