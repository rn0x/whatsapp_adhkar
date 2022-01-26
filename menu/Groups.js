import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';


export const Groups = {


    async exec({ from, client, body, id }) {



        if (body === '1') {

            MenuNmber(from, 10)

            let group_name = 'من فضلك ادخل إسم المجموعة 💬'
            await client.reply(from, group_name, id).catch((erro) => console.log(erro));
        }

        else if (body === '2') {

            let GroupsMenu = fs.readJsonSync(`./db/GroupsMenu.json`);
            var list_group = '            ═✪〘 المجموعات 〙✪═ \n\n'
            for (let lop of GroupsMenu) {

                list_group += `إسم المجموعة: ${lop.name} \n`
                list_group += `${lop.url} \n\n`
            }
            list_group += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await client.reply(from, list_group, id).catch((erro) => console.log(erro));


        }

        else if (body === '3') {

            let GroupsMenu = await fs.readJson('./db/GroupsMenu.json').catch((error) => console.log(error));
            let listgroups = await GroupsMenu[Math.floor(Math.random() * GroupsMenu.length)]
            let name = listgroups && listgroups.name ? listgroups.name : null
            let url = listgroups && listgroups.url ? listgroups.url : null

            if (name !== null && url !== null) {

                let msg = `إسم المجموعة: ${listgroups.name} \n`
                msg += `${listgroups.url}`
                await client.reply(from, msg, id).catch((erro) => console.log(erro));


            }

            else if (name === null && url === null) {

                await client.reply(from, 'حالياً لايوجد مجموعات يمكنك إضافة مجموعتك من خلال إرسال الرقم 1', id).catch((erro) => console.log(erro));

            }

        }

    }

}