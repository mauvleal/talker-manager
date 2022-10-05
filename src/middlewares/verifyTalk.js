const MIN = 1;
const MAX = 5;
const INVALID_DATE = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
const INVALID_RATE = 'O campo "rate" deve ser um inteiro de 1 à 5';

function verifyTalk(request, response, next) {
  const { talk } = request.body;
  if (!talk) {
    return response.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
  if (!talk.watchedAt) {
  return response.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!talk.rate && talk.rate !== 0) {
    return response.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    
  next();
}

function verifyTalk2(request, response, next) {
  const { talk } = request.body;
  if (!/\d{2}\/\d{2}\/\d{4}/.test(talk.watchedAt)) {
    return response.status(400).json({ message: INVALID_DATE });
  }
  if (!(talk.rate >= MIN && talk.rate <= MAX)) {
    return response.status(400).json({ message: INVALID_RATE });
  }
  next();
}

module.exports = {
  verifyTalk,
  verifyTalk2,
};