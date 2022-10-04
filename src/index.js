const express = require('express');
const bodyParser = require('body-parser');
const readFileTalker = require('./utils/fsUtils');

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

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Onlineeeeeee');
});

module.exports = app;
