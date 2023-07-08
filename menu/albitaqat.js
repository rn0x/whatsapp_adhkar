import fs from 'fs-extra';
import path from "path";

export default {

    async exec({ from, e, body, message_id, MessageMedia, client }) {

        let __dirname = path.resolve();
        let albitaqat = fs.readJsonSync('./files/json/albitaqat.json');

        albitaqat.forEach(async element => {

            if (body === String(element?.id) || body === String(element?.id?.toLocaleString('ar-EG')) || body === element?.surah) {

                let num = 1
                let num2 = 1
                let message = `*【 سورة ${element?.surah} 】* \n\n`
                message += `*• أياتها:*\n\n`
                message += `${element?.ayaatiha}\n`
                message += `\n*• معني أسمها:*\n\n`
                message += `${element?.maeni_asamuha}\n`
                message += `\n*• سبب تسميتها:*\n\n`
                message += `${element?.sabab_tasmiatiha}\n`
                message += `\n*• أسماؤها:*\n\n`
                message += `${element?.asmawuha}\n`
                message += `\n*• مقصدها العام:*\n\n`
                message += `${element?.maqsiduha_aleamu}\n`
                message += `\n*• سبب نزولها:*\n\n`
                message += `${element?.sabab_nuzuliha}\n`
                message += `\n*• فضلها:*`
                for (let item of element?.fadluha) {

                    message += `\n\n${num++}- ${item}`

                }
                message += `\n\n*• مناسباتها:*`
                for (let item of element?.munasabatiha) {

                    message += `\n\n${num2++}- ${item}`

                }

                let file = await MessageMedia.fromUrl(element?.image).catch(e => console.log(e))
                await client.sendMessage(from, file, { caption: message, quotedMessageId: message_id })
                    .catch(error => console.log(error));
                let file_audio = await MessageMedia.fromUrl(element?.audio).catch(e => console.log(e))
                await client.sendMessage(from, file_audio, { quotedMessageId: message_id })
                    .catch(error => console.log(error));
            }

        });
    }
}
