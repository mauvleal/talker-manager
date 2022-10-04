const fs = require('fs').promises;
const path = require('path');
const readFileTalker = require('./fsReadFiles');

const FILE_PATH = path.resolve(__dirname, '../talker.json');

async function writeNewTalker(data) {
    const oldTalkers = await readFileTalker();
    const nextId = oldTalkers.length + 1;
    const newTalker = { id: nextId, ...data };
try {
    // const allTalkers = JSON.stringfy([
    //         ...oldTalkers, newTalker,
    //     ]);
    await fs.writeFile(FILE_PATH, JSON.stringify([...oldTalkers, newTalker]));
    console.log('Arquivo escrito');
    return newTalker;
    } catch (error) {
        console.error('erro ao adicionar arquivo');
    }
}

module.exports = writeNewTalker;