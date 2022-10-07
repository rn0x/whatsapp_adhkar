import fs from 'fs-extra';

export default {

    async exec({ from, e, body, message_id, MessageMedia, client}) {

        let adhkar = fs.readJsonSync('./files/json/adhkar.json');

        adhkar.forEach(async element => {

            if (body === String(element?.id) || body === String(element?.id?.toLocaleString('ar-EG'))) {

                let message = ` ـ ❁ …\n\n\n*${element?.category}*\n\n`
                for (let item of element?.array) {

                    message += `\n\n_________\n\n${item?.text}`

                }

                message += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

                let file = await MessageMedia.fromUrl(element?.audio).catch(e => console.log(e))
                await e.reply(message).catch(e => console.log(e));
                await client.sendMessage(from, file, { sendMediaAsDocument: false, quotedMessageId: message_id })
                    .catch(error => console.log(error));
            }

        });

    }
}