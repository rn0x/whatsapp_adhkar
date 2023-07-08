import fs from 'fs-extra';
import path from "path";

export default async function CrateDatabase({ from: from, pushname: pushname, number: number, isGroup: isGroup, menu: menu }) {

    let __dirname = path.resolve();
    let database = fs.existsSync(path.join(__dirname, `./database/${from}.json`));

    if (database === false && from && pushname && number) {

        let opj = {
            from: from,
            pushname: pushname,
            number: number,
            isGroup: isGroup,
            Broadcast: false,
            menu: 'main'
        }

        fs.writeJsonSync(path.join(__dirname, `./database/${from}.json`), opj, { spaces: '\t' });
    }

    else {

        let user = fs.readJsonSync(path.join(__dirname, `./database/${from}.json`));

        if (pushname) {

            user.pushname = pushname;
        }

        else if (menu) {

            user.menu = menu;
        }

        fs.writeJsonSync(path.join(__dirname, `./database/${from}.json`), user, { spaces: '\t' });
    }
}