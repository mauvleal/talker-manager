const fs = require('fs').promises;
const path = require('path');
const readFileTalker = require('./fsReadFiles');

const FILE_PATH = path.resolve(__dirname, '../talker.json');

async function editTalker(data) {
    const talkers = await readFileTalker();
    const talkerToEdit = talkers.filter((talker) => talker.id !== data.id);
    const newTalkers = [...talkerToEdit, data];
try {
     await fs.writeFile(FILE_PATH, JSON.stringify(newTalkers));
    console.log('Arquivo atualizado');
    return data;
    } catch (error) {
        console.error('erro ao mudar arquivo');
    }
}

module.exports = editTalker;