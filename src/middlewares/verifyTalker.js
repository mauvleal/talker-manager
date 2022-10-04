const MIN_LENGTH = 3;
const MIN_AGE = 18;

function verifyTalker(request, response, next) {
  const { name, age } = request.body;
  if (!name) {
    return response.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < MIN_LENGTH) {
    return response.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  if (!age) {
    return response.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < MIN_AGE) {
    return response.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
}

module.exports = verifyTalker;