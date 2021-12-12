import fs from 'fs-extra';

export default async function MenuNmber(from, number) {

    try {

        let db_menu = await fs.readJson('./db/Menu.json');

        await fs.writeJson('./db/Menu.json', Object.assign({}, db_menu, { [from]: { "menu_name": number } }), { spaces: '\t' });

    } catch (error) {

        console.log(error);

    }

}