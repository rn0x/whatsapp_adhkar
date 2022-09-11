const { stickers } = require('./stickers.js');
const fs = require('fs-extra');
const returnMenu = require('../lib/returnMenu.js');
const Error = require('../lib/error.js');
const formatSticker = require('wa-sticker-formatter');

const sticker_menu = {

    async exec({ from, client, pushname, body, id }) {



        if (body === '1') {

            let liststicker = stickers[Math.floor(Math.random() * stickers.length)]
            let sticker = new formatSticker.Sticker(liststicker, { type: 'full', pack: 'سبحان الله وبحمده سبحان الله العظيم' });
            await sticker.build();
            let imagePath = await sticker.get();
            await client.sendMessage(from, { sticker: imagePath }, { quoted: id }).catch((error) => Error(error));

        } else if (body === '2') {

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

                let sticker = new formatSticker.Sticker(lop, { type: 'full', pack: 'سبحان الله وبحمده سبحان الله العظيم' });
                await sticker.build();
                let imagePath = await sticker.get();

                await client.sendMessage(from, { sticker: imagePath }, { quoted: id }).catch((error) => Error(error));

            }

            await client.sendMessage(from, { text: 'استمتع بالملصقات الخاصة بك 🎁' });

        } else if (body === '3') {

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

                let sticker = new formatSticker.Sticker(lop, { type: 'full', pack: 'سبحان الله وبحمده سبحان الله العظيم' });
                await sticker.build();
                let imagePath = await sticker.get();
                await client.sendMessage(from, { sticker: imagePath }, { quoted: id }).catch((error) => Error(error));

            }

            await client.sendMessage(from, { text: 'استمتع بالملصقات الخاصة بك 🎁' });

        } else if (body === '4') {
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

                let sticker = new formatSticker.Sticker(lop, { type: 'full', pack: 'سبحان الله وبحمده سبحان الله العظيم' });
                await sticker.build();
                let imagePath = await sticker.get();
                await client.sendMessage(from, { sticker: imagePath }, { quoted: id }).catch((error) => Error(error));

            }

            await client.sendMessage(from, { text: 'استمتع بالملصقات الخاصة بك 🎁' });

        }

        else if (body === '5') {

            returnMenu(from, 4)

            let sticker_menu = 'ارجو عدم استعمال الخدمة فيما لايرضي الله عز وجل \n\n'
            sticker_menu += ' بإنتظار الصورة 🖼️ لتحويلها لملصق 🪧 \n\n'
            sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
            //   let msg = 'الخدمة مغلقة مؤقتاً'

            await client.sendMessage(from, { text: sticker_menu }, { quoted: id }).catch((error) => Error(error));
        }

    }

}

module.exports = {
    sticker_menu: sticker_menu
}