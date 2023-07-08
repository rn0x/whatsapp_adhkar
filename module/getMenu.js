import fs from 'fs-extra';
import path from "path";

export default async function getMenu(from) {

    let __dirname = path.resolve();
    let user = fs.readJsonSync(path.join(__dirname, `./database/${from}.json`));

    return user?.menu
    
}