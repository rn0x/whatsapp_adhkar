const fs = require('fs-extra');

module.exports = async function returnMenu(from, number) {

    let db_menu = await fs.readJson('./db/Menu.json');

    await fs.writeJson('./db/Menu.json', Object.assign({}, db_menu, { [from]: { "menu_name": number } }), { spaces: '\t' });

}