import fs from 'fs-extra';

export default function Error(error) {

    console.log(error.toString());
    fs.writeJsonSync('./db/start.json', { start: true });
    
}