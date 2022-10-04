function verifyToken(request, response, next) {
    const token = request.headers.authorization;
    if (!token) {
      return response.status(401).json({ message: 'Token não encontrado' });
    }
    if (!/\w{16}/.test(token)) {
      return response.status(401).json({ message: 'Token inválido' });
    }
    next();
  }
  
  module.exports = verifyToken;