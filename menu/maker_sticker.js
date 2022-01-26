import { decryptMedia } from '@open-wa/wa-automate';
import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';


export const maker_sticker = {

    async exec({ from, client, pushname, messages, body, id }) {


        if (messages.isMedia === true) {

            if (messages.mimetype == 'image/jpeg') {

                let fs_json = fs.readJsonSync('./db/Sticker_Name.json');
                let name_sticker = fs_json[from] !== undefined ? fs_json[from].Name : pushname
                let imagePath = await decryptMedia(messages)
                let imageBase64 = `data:${messages.mimetype};base64,${imagePath.toString('base64')}`
                let sticker_menu = '1- ملصق عشوائي 🔄 \n'
                sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
                sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
                sticker_menu += '4- ملصقات مساء الخير 🌑 \n'
                sticker_menu += '5- صانع الملصقات 🪧 \n\n'
                sticker_menu += '⚠️ لتغير حقوق الملصق قم بإرسال كلمة Me متبوعة بالحقوق \n```Me Bot Adhkar```\n\n\n'
                sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
    
                await client.sendImageAsSticker(from, imageBase64, {author: '@adhk2r_bot 🤖', keepScale: true, pack: name_sticker});
                await client.reply(from, 'استمتع بالملصق الخاص بك 🎁').catch((erro) => console.log(erro));
                await client.reply(from, sticker_menu).catch((erro) => console.log(erro));
    
                MenuNmber(from, 7)
            }

            else if (messages.mimetype == 'image/gif') {

                let fs_json = fs.readJsonSync('./db/Sticker_Name.json');
                let name_sticker = fs_json[from] !== undefined ? fs_json[from].Name : pushname
                let imagePath = await decryptMedia(messages)
                let videoBase64 = `data:${messages.mimetype};base64,${imagePath.toString('base64')}`
                let sticker_menu = '1- ملصق عشوائي 🔄 \n'
                sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
                sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
                sticker_menu += '4- ملصقات مساء الخير 🌑 \n'
                sticker_menu += '5- صانع الملصقات 🪧 \n\n'
                sticker_menu += '⚠️ لتغير حقوق الملصق قم بإرسال كلمة Me متبوعة بالحقوق \n```Me Bot Adhkar```\n\n\n'
                sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
    
                await client.sendMp4AsSticker(from, videoBase64, {fps: 10, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0, crop: false}, {author: '@adhk2r_bot 🤖', keepScale: true, pack: name_sticker});
                await client.reply(from, 'استمتع بالملصق الخاص بك 🎁', id).catch((erro) => console.log(erro));
                await client.reply(from, sticker_menu, id).catch((erro) => console.log(erro));
    
                MenuNmber(from, 7)
            }

            else if (messages.mimetype == 'video/mp4') {

                let fs_json = fs.readJsonSync('./db/Sticker_Name.json');
                let name_sticker = fs_json[from] !== undefined ? fs_json[from].Name : pushname
                let imagePath = await decryptMedia(messages)
                let videoBase64 = `data:${messages.mimetype};base64,${imagePath.toString('base64')}`
                let sticker_menu = '1- ملصق عشوائي 🔄 \n'
                sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
                sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
                sticker_menu += '4- ملصقات مساء الخير 🌑 \n'
                sticker_menu += '5- صانع الملصقات 🪧 \n\n'
                sticker_menu += '⚠️ لتغير حقوق الملصق قم بإرسال كلمة Me متبوعة بالحقوق \n```Me Bot Adhkar```\n\n\n'
                sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
    
                await client.sendMp4AsSticker(from, videoBase64, {fps: 10, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0, crop: false}, {author: '@adhk2r_bot 🤖', keepScale: true, pack: name_sticker});
                await client.reply(from, 'استمتع بالملصق الخاص بك 🎁', id).catch((erro) => console.log(erro));
                await client.reply(from, sticker_menu, id).catch((erro) => console.log(erro));
    
                MenuNmber(from, 7)
            }
            
      
        }

        else if (body === '*'){

            MenuNmber(from, 7)

            let sticker_menu = '1- ملصق عشوائي 🔄 \n'
            sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
            sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
            sticker_menu += '4- ملصقات مساء الخير 🌑 \n'
            sticker_menu += '5- صانع الملصقات 🪧 \n\n'
            sticker_menu += '⚠️ لتغير حقوق الملصق قم بإرسال كلمة Me متبوعة بالحقوق \n```Me Bot Adhkar```\n\n\n'
            sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
     
            await client.reply(from, sticker_menu, id).catch((erro) => console.log(erro));
            
        }

    }

}