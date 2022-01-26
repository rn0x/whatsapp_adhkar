import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';


export const Group_Name = {


    async exec({ from, client, body, id }) {

        if (body.length <= 30 && fs.existsSync(`./db/Group/${from}.json`)) {

            let group_name = 'من فضلك قم بكتابة رابط المجموعة 💬'
            let db_groups = fs.readJsonSync(`./db/Group/${from}.json`);
            db_groups.push(body);
            fs.writeJsonSync(`./db/Group/${from}.json`, db_groups, { spaces: '\t' })

            await client.reply(from, group_name, id).catch((erro) => console.log(erro));
            MenuNmber(from, 11)
        }

        else if (fs.existsSync(`./db/Group/${from}.json`) === false) {

            fs.writeJsonSync(`./db/Group/${from}.json`, []);
            let msg = 'من فضلك أعد كتابة إسم المجموعة 💬'
            await client.reply(from, msg, id).catch((erro) => console.log(erro));
        }

        else {

            let msg = 'يجب أن يكون الإسم أقل من 30 حرف ⚠️\n\n\n'
            msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await client.reply(from, msg, id).catch((erro) => console.log(erro));

        }

    }

}