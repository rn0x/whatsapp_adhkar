const returnMenu = require('../lib/returnMenu.js');
const Error = require('../lib/error.js');
const { downloadMediaMessage } = require('@adiwajshing/baileys');
const formatSticker = require('wa-sticker-formatter');

const maker_sticker = {

    async exec({ from, client, messages, download_msg, body, id }) {



        if (messages.imageMessage && messages.imageMessage.mimetype === 'image/jpeg' || messages.documentMessage && messages.documentMessage.mimetype === 'image/png') {

            let buffer = await downloadMediaMessage(download_msg, 'buffer');
            let sticker = new formatSticker.Sticker(buffer, { type: 'full', pack: 'سبحان الله وبحمده سبحان الله العظيم' });
            await sticker.build();
            let imagePath = await sticker.get();
            let sticker_menu = '1- ملصق عشوائي 🔄 \n'
            sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
            sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
            sticker_menu += '4- ملصقات مساء الخير 🌑 \n'
            sticker_menu += '5- صانع الملصقات 🪧 \n\n\n'
            sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
            await client.sendMessage(from, { sticker: imagePath }, { quoted: id });
            await client.sendMessage(from, { text: 'استمتع بالملصق الخاص بك 🎁' }).catch((error) => Error(error));
            await client.sendMessage(from, { text: sticker_menu }).catch((error) => Error(error));
            returnMenu(from, 7)

        }

        else if (body === '*') {

            returnMenu(from, 7)

            let sticker_menu = '1- ملصق عشوائي 🔄 \n'
            sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
            sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
            sticker_menu += '4- ملصقات مساء الخير 🌑 \n'
            sticker_menu += '5- صانع الملصقات 🪧 \n\n\n'
            sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await client.sendMessage(from, { text: sticker_menu }, { quoted: id }).catch((error) => Error(error));

        }

    }

}

module.exports = {
    maker_sticker: maker_sticker
}