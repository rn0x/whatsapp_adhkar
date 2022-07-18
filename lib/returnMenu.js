const fs = require('fs-extra');

module.exports = async function returnMenu(from, number) {

    await fs.writeJson(`./db/user/${from}.json`, Object.assign({}, { [from]: { "menu_name": number } }), { spaces: '\t' });

}