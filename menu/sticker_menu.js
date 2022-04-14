import { stickers } from './stickers.js';
import fs from 'fs-extra';
import MenuNmber from '../lib/MenuNmber.js';
import Error from './error.js';

export const sticker_menu = {

    async exec({ from, client, pushname, body, id }) {



        if (body === '1') {

            let fs_json = fs.readJsonSync('./db/Sticker_Name.json');
            let name_sticker = fs_json[from] !== undefined ? fs_json[from].Name : pushname
            let liststicker = stickers[Math.floor(Math.random() * stickers.length)]

            await client.sendImageAsSticker(from, liststicker, {author: '@adhk2r_bot 🤖', keepScale: true, pack: name_sticker}).catch((error) => Error(error));

        } else if (body === '2') {

            let fs_json = fs.readJsonSync('./db/Sticker_Name.json');
            let name_sticker = fs_json[from] !== undefined ? fs_json[from].Name : pushname
            let sticker_gm3h = [

                'http://bot.altaqwaa.org/media/sticker/gm3h/1.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/2.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/3.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/4.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/5.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/6.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/7.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/8.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/9.webp',
                'http://bot.altaqwaa.org/media/sticker/gm3h/10.webp'

            ]


            for (let lop of sticker_gm3h) {

                await client.sendImageAsSticker(from, lop, {author: '@adhk2r_bot 🤖', keepScale: true, pack: name_sticker}).catch((error) => Error(error));

            }

            await client.reply(from, 'استمتع بالملصقات الخاصة بك 🎁');

        } else if (body === '3') {

            let fs_json = fs.readJsonSync('./db/Sticker_Name.json');
            let name_sticker = fs_json[from] !== undefined ? fs_json[from].Name : pushname
            let sticker_sbah = [

                'http://bot.altaqwaa.org/media/sticker/sbah/1.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/2.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/3.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/4.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/5.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/6.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/7.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/8.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/9.webp',
                'http://bot.altaqwaa.org/media/sticker/sbah/10.webp'

            ]

            for (let lop of sticker_sbah) {

                await client.sendImageAsSticker(from, lop, {author: '@adhk2r_bot 🤖', keepScale: true, pack: name_sticker}).catch((error) => Error(error));

            }

            await client.reply(from, 'استمتع بالملصقات الخاصة بك 🎁');

        } else if (body === '4') {

            let fs_json = fs.readJsonSync('./db/Sticker_Name.json');
            let name_sticker = fs_json[from] !== undefined ? fs_json[from].Name : pushname
            let sticker_msa2 = [

                'http://bot.altaqwaa.org/media/sticker/msa2/1.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/2.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/3.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/4.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/5.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/6.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/7.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/8.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/9.webp',
                'http://bot.altaqwaa.org/media/sticker/msa2/10.webp'
            ]

            for (let lop of sticker_msa2) {

                await client.sendImageAsSticker(from, lop, {author: '@adhk2r_bot 🤖', keepScale: true, pack: name_sticker}).catch((error) => Error(error));

            }

            await client.reply(from, 'استمتع بالملصقات الخاصة بك 🎁');

        } 
        
        else if (body === '5') {

             MenuNmber(from, 8)

            let sticker_menu = 'ارجو عدم استعمال الخدمة فيما لايرضي الله عز وجل \n\n'
            sticker_menu += ' بإنتظار الصورة او الفيديو 🖼️ لتحويلها لملصق 🪧 \n\n\n'
            sticker_menu += '*【 للرجوع للخلف أرسل * 】* \n'
            sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
         //   let msg = 'الخدمة مغلقة مؤقتاً'

            await client.reply(from, sticker_menu, id).catch((error) => Error(error));
        } 
        
        else if (body.startsWith('me') || body.startsWith('Me')) {

            let arraybody = ['Hi', 'hi', 'خدمة', 'خدمه', '#'];

            if (body.length <= 20 && arraybody.some(fx => body === fx) === false) {

                let name_sticker = body.slice(3)
                let fs_json = fs.readJsonSync('./db/Sticker_Name.json');
                let mesg = `تم تغير الحقوق الى ${name_sticker} ✅`
                fs.writeJsonSync('./db/Sticker_Name.json', Object.assign({}, fs_json, {[from]: { "Name": name_sticker } }));
                await client.reply(from, mesg, id).catch((error) => Error(error));


            }

            else {

                let msg = 'يجب أن تكون الحقوق أقل من 20 حرف ⚠️\n\n\n'
                msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

                await client.reply(from, msg, id).catch((error) => Error(error));

            }

        }

    }

}