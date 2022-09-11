const returnMenu = require('../lib/returnMenu.js');
const fs = require('fs-extra');
const Error = require('../lib/error.js');

const Groups = {


    async exec({ from, client, body, id }) {



        if (body === '1') {

            returnMenu(from,   6)

            let group_name = 'من فضلك ادخل إسم المجموعة 💬'
            await client.sendMessage(from, { text: group_name }, { quoted: id }).catch((error) => Error(error));
        }

        else if (body === '2') {

            let GroupsMenu = fs.readJsonSync(`./db/GroupsMenu.json`);
            var list_group = '            ═✪〘 المجموعات 〙✪═ \n\n'
            for (let lop of GroupsMenu) {

                list_group += `إسم المجموعة: ${lop.name} \n`
                list_group += `${lop.url} \n\n`
            }
            list_group += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await client.sendMessage(from, { text: list_group }, { quoted: id }).catch((error) => Error(error));


        }

        else if (body === '3') {

            let GroupsMenu = await fs.readJson('./db/GroupsMenu.json').catch((error) => Error(error));
            let listgroups = await GroupsMenu[Math.floor(Math.random() * GroupsMenu.length)]
            let name = listgroups && listgroups.name ? listgroups.name : null
            let url = listgroups && listgroups.url ? listgroups.url : null

            if (name !== null && url !== null) {

                let msg = `إسم المجموعة: ${listgroups.name} \n`
                msg += `${listgroups.url}`
                await client.sendMessage(from, { text: msg }, { quoted: id }).catch((error) => Error(error));


            }

            else if (name === null && url === null) {

                await client.sendMessage(from, { text: 'حالياً لايوجد مجموعات يمكنك إضافة مجموعتك من خلال إرسال الرقم 1' }, { quoted: id }).catch((error) => Error(error));

            }

        }

    }

}

module.exports = {
    Groups: Groups
}