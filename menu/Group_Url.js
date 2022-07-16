const returnMenu = require('../lib/returnMenu.js');
const fs = require('fs-extra');
const Error = require('../lib/error.js');

const Group_Url = {
    

    async exec({ from, client, body, id }) {

        
        const GroupsMenu = fs.readJsonSync('./db/GroupsMenu.json');


        if (body.length === 48 && body.includes('https://chat.whatsapp.com/') && GroupsMenu.some(e => e.url === body) === false){

            let db_groups = fs.readJsonSync(`./db/Group/${from}.json`);
            db_groups.push(body);
            fs.writeJsonSync(`./db/Group/${from}.json`,db_groups)

            let group_name = db_groups[0]
            let group_url = db_groups[1]
            let msg = 'تم نشر المجموعة بنجاح ✅ \n\n'
            msg += `إسم المجموعة: ${group_name} \n\n\n`
            msg += `${group_url}`
            let menu_group = '1- نشر قروبك ✉️ \n'
            menu_group += '2- قائمة القروبات ⚜️\n'
            menu_group += '3- قروب عشوائي 🔄\n\n'
            menu_group += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            GroupsMenu.unshift({name: group_name, url: group_url});
            fs.writeJsonSync('./db/GroupsMenu.json', GroupsMenu)
            await client.sendMessage(from, { text: msg }, { quoted: id }).catch((error) => Error(error));
            fs.writeJsonSync(`./db/Group/${from}.json`, [])
            returnMenu(from,   9)
            await client.sendMessage(from, { text: menu_group }, { quoted: id }).catch((error) => Error(error));
        }

        else {

            if (body.length !== 48 || body.includes('https://chat.whatsapp.com/') === false) {

                let msg = 'الرابط غير صحيح تأكد من كتابة الرابط بشكل صحيح وان لايحتوي على مسافات ⚠️ \n\n\n'
                msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
                await client.sendMessage(from, { text: msg }, { quoted: id }).catch((error) => Error(error));
            }

            if (GroupsMenu.some(e => e.url === body) === true) {

                let msg = 'لقد تم نشر هذه المجموعة بالفعل ⚠️\n\n\n'
                msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
                await client.sendMessage(from, { text: msg }, { quoted: id }).catch((error) => Error(error));
                fs.writeJsonSync('./lib/db_groups.json', [])

            }
        
        }

    }

}

module.exports = {
    Group_Url: Group_Url
}