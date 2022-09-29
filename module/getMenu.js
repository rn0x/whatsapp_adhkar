import fs from 'fs-extra';

export default async function getMenu(from) {

    let user = fs.readJsonSync(`./database/${from}.json`);

    return user?.menu
    
}