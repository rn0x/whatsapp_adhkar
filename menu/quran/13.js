import fs from 'fs-extra';
import file_size from '../../module/file_size.js';

export default {

    async exec({ from, body, message_id, MessageMedia, client, e }) {

        let mp3quran = fs.readJsonSync('./files/json/mp3quran.json');
        let quran = fs.readJsonSync('./files/json/Quran.json');

        quran.forEach(async (event, index) => {

            if (body === `${event.Name}` || body === `${event?.Number}` || body === `${event?.Number.toLocaleString('ar-EG')}`) {

                let number = String(event?.Number).padStart(3, 0);
                let url = `${mp3quran[12]?.Server}/${number}.mp3`;
                let FileSize = await file_size(url);
                let message = `إسم السورة بالعربي: ${event?.Name} \n`
                message += `إسم السورة بالإنجليزي: ${event?.English_Name} \n`
                message += `رقم السورة: ${event?.Number} \n`
                message += `عدد الآيات: ${event?.Number_Verses} \n`
                message += `عدد الكلمات: ${event?.Number_Words} \n`
                message += `عدد الحروف: ${event?.Number_Letters} \n`
                message += `مكان النزول: ${event?.Descent}`

                if (FileSize.split('.')[0] >= 60 && FileSize.split(' ')[1] === 'MB') {
                    await e.reply(message);
                    await e.reply(`لا يمكن إرسال الملف لان حجمه كبير جداَ \n\n${url}`);
                }

                else {
                    let file = await MessageMedia.fromUrl(url).catch(e => console.log(e))
                    await e.reply(message);
                    await client.sendMessage(from, file, { sendMediaAsDocument: true, quotedMessageId: message_id })
                        .catch(error => console.log(error));
                }
            }
        });
    }
}