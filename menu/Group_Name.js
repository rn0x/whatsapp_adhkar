const returnMenu = require('../lib/returnMenu.js');
const fs = require('fs-extra');
const Error = require('../lib/error.js');

const Group_Name = {


    async exec({ from, client, body, id }) {

        if (body.length <= 30 && fs.existsSync(`./db/Group/${from}.json`)) {

            let group_name = 'من فضلك قم بكتابة رابط المجموعة 💬'
            let db_groups = fs.readJsonSync(`./db/Group/${from}.json`);
            db_groups.push(body);
            fs.writeJsonSync(`./db/Group/${from}.json`, db_groups)

            await client.sendMessage(from, { text: group_name }, { quoted: id }).catch((error) => Error(error));
            returnMenu(from,   11)
        }

        else if (fs.existsSync(`./db/Group/${from}.json`) === false) {

            fs.writeJsonSync(`./db/Group/${from}.json`, []);
            let msg = 'من فضلك أعد كتابة إسم المجموعة 💬'
            await client.sendMessage(from, { text: msg }, { quoted: id }).catch((error) => Error(error));
        }

        else {

            let msg = 'يجب أن يكون الإسم أقل من 30 حرف ⚠️\n\n\n'
            msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await client.sendMessage(from, { text: msg }, { quoted: id }).catch((error) => Error(error));

        }

    }

}

module.exports = {
    Group_Name: Group_Name
}