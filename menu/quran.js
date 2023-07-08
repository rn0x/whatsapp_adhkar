import fs from 'fs-extra';
import CrateDatabase from '../module/CrateDatabase.js';
import path from "path";

export default {

    async exec({ from, e, body }) {

        let __dirname = path.resolve();
        let mp3quran = fs.readJsonSync(path.join(__dirname, './files/json/mp3quran.json'));
        let quran = fs.readJsonSync(path.join(__dirname, './files/json/Quran.json'));

        mp3quran.forEach(async element => {

            if (body === String(element?.id) || body === String(element?.id?.toLocaleString('ar-EG'))) {

                await CrateDatabase({ from: from, menu: `q${element?.id}` }).catch(error => console.log(error));
                let message = 'قم بإرسال إسم السورة او رقمها ✉️ \n\n'

                for (let item of quran) {

                    message += `*${item?.Number}- ${item?.Name}*\n`

                }

                message += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

                await e.reply(message).catch(e => console.log(e));
            }

        });

    }
}