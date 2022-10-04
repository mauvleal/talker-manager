const fs = require('fs').promises;

const path = require('path');

async function readFileTalker() {
try {
    const data = await fs.readFile(path.resolve(__dirname, '../talker.json'), 'utf8');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

module.exports = readFileTalker;