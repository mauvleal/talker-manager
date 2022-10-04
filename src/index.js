const express = require('express');
const bodyParser = require('body-parser');
const readFileTalker = require('./utils/fsUtils');
const generateToken = require('./utils/fsToken');

const app = express();
app.use(bodyParser.json());
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', async (_request, response) => {
  const talkers = await readFileTalker();
  return response.status(200).json(talkers);
});

app.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await readFileTalker();
  const findTalker = talkers.find((item) => item.id === Number(id));

  if (findTalker) {
    return response.status(200).json(findTalker);
  }
  return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.post('/login', (request, response) => {
  const { email, password } = request.body;
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return response.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!password) {
    return response.status(400).json({ message: 'O campo "password" é obrigatório' });
  } 
  if (!re.test(email)) {
    return response.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (password.length < 6) {
return response.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  return response.status(200).json({ token: generateToken() });
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Onlineeeeeee');
});

module.exports = app;
