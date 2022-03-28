import fs from 'fs-extra';
import Error from '../menu/error.js';

export default async function MenuNmber(from, number) {

    try {

        let db_menu = await fs.readJson('./db/Menu.json');

        await fs.writeJson('./db/Menu.json', Object.assign({}, db_menu, { [from]: { "menu_name": number } }), { spaces: '\t' });

    } catch (error) {

        Error(error);

    }

}