import searchQuran from '../module/searchQuran.js';
import screenshot from '../module/searchQuran/index.js';

export default {

    async exec({ from, e, body, pushname, MessageMedia, message_id, client }) {

        if (body) {

            let search = await searchQuran(body, 'search').catch(e => console.log(e));
            let tafser1 = await searchQuran(body, 'tafser1').catch(e => console.log(e));
            let tafser2 = await searchQuran(body, 'tafser2').catch(e => console.log(e));
            let english = await searchQuran(body, 'english').catch(e => console.log(e));
            search = search?.split('\n')[0]
            tafser1 = tafser1?.split(search)[1]?.split('--------------\n')[0]
            tafser2 = tafser2?.split(search)[1]?.split('--------------\n')[0]
            english = english?.split(search)[1]?.split('--------------\n')[0]
            let err = 'لم يتم التعرف على الكلمة !'

            if (search === err || tafser1 === err || tafser2 === err || english === err) {
                await e.reply('لم يتم التعرف على الكلمة !').catch(e => console.log(e));
            }

            else {

                await screenshot({ quran: search, tafser1: tafser1, tafser2: tafser2, english: english, name: pushname, username: 'https://t.me/tqw24h', filename: './files/image/searchQuran.png' }).then(async e => {

                    let file = MessageMedia.fromFilePath(e?.filename);
                    let message = `*${search}*\n\n`
                    message += '*تفسير الجلالين :* \n\n'
                    message += `${tafser1}\n\n`
                    message += '*تفسير الميسر :* \n\n'
                    message += `${tafser2}\n\n`
                    message += '*شرح الآيات باللغة الإنجليزية :* \n\n'
                    message += `${english}`
                    await client.sendMessage(from, file, { caption: message, quotedMessageId: message_id }).catch(error => console.log(error));

                })
            }

        }
    }
}
