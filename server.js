const express = require('express');
const isValidDatasetName = require('./validator');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const testName = 'clinical_trial_data';
  const check = isValidDatasetName(testName);

  res.send(`
    <h1>Data Validation Engine (Live)</h1>
    <p>Testing asset name: <strong>${testName}</strong></p>
    <p>Status: <strong>${check ? '✅ VALID SCHEMA' : '❌ INVALID'}</strong></p>
  `);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));