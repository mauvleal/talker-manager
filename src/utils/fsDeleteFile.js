const fs = require('fs').promises;
const path = require('path');
const readFileTalker = require('./fsReadFiles');

const FILE_PATH = path.resolve(__dirname, '../talker.json');

async function deleteTalker(id) {
    const oldTalkers = await readFileTalker();
    const newTalkers = oldTalkers.filter((talker) => talker.id !== id);
try {
     await fs.writeFile(FILE_PATH, JSON.stringify(newTalkers));
    console.log('Arquivo escrito');
    return;
    } catch (error) {
        console.error('erro ao adicionar arquivo');
    }
}

module.exports = deleteTalker;