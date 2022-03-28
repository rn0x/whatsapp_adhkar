import fs from 'fs-extra';
import MenuNmber from '../lib/MenuNmber.js';
import Error from '../menu/error.js';

export default async function getMenu(from) {

    try {

        let db_menu = await fs.readJson('./db/Menu.json');

        if (Object.keys(db_menu).includes(from)) {

            return db_menu[from].menu_name;

        }

        else {

            MenuNmber(from, 0);
            return 0
        }


    } catch (error) {

        Error(error);

    }

}