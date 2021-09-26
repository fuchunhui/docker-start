import express from 'express';
import path from 'path';
import word from './word.js';

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(express.urlencoded({ extended: false }));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/get', (req, res) => {
  res.send('get request success.');
});

app.get('/test', (req, res) => {
  res.send(word.random().join('</br>'));
});

app.post('/faces', (req, res) => {
  const num = req.body?.num || 10;
  res.send(word.random(num).join('\n\n'));
});

app.listen(8080);
