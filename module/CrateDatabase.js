import fs from 'fs-extra';

export default async function CrateDatabase({ from: from, pushname: pushname, number: number, isGroup: isGroup, menu: menu }) {

    let database = fs.existsSync(`./database/${from}.json`);

    if (database === false && from && pushname && number) {

        let opj = {
            from: from,
            pushname: pushname,
            number: number,
            isGroup: isGroup,
            Broadcast: false,
            menu: 'main'
        }

        fs.writeJsonSync(`./database/${from}.json`, opj, { spaces: '\t' });
    }

    else {

        let user = fs.readJsonSync(`./database/${from}.json`);

        if (pushname) {

            user.pushname = pushname;
        }

        else if (menu) {

            user.menu = menu;
        }
        
        fs.writeJsonSync(`./database/${from}.json`, user, { spaces: '\t' });
    }
}