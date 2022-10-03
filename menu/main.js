import fs from 'fs-extra';
import CrateDatabase from '../module/CrateDatabase.js';
import Hijri_calendar from '../module/Hijri_calendar/index.js';

export default {

    async exec({ from, body, e, pushname, message_id, MessageMedia, client }) {

        let mp3quran = fs.readJsonSync('./files/json/mp3quran.json');
        let adhkar = fs.readJsonSync('./files/json/adhkar.json');

        if (body === '1' || body === Number('1').toLocaleString('ar-EG')) {

            await CrateDatabase({ from: from, menu: 'quran' });
            let message = '*قم بإرسال رقم القارئ 🔊* \n\n'
            for (let item of mp3quran) {

                message += `*${item?.id}- ${item?.name}* | ${item?.rewaya}\n`

            }

            message += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await e.reply(message).catch(e => console.log(e));

        }

        else if (body === '2' || body === Number('2').toLocaleString('ar-EG')) {
            await CrateDatabase({ from: from, menu: 'searchQuran' });
            let message = 'من فضلك قم بإرسال الكلمة للبحث عنها في الآيات وعرض تفسيرها \n\n\n'
            message += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
            await e.reply(message).catch(e => console.log(e));
        }

        else if (body === '3' || body === Number('3').toLocaleString('ar-EG')) {
            await CrateDatabase({ from: from, menu: 'searchHadith' });
            let message = 'من فضلك قم بإرسال الكلمة للبحث عن الحديث و عرض الراوي و المحدث و المصدر و خلاصة حكم المحدث \n\n\n'
            message += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
            await e.reply(message).catch(e => console.log(e));
        }

        else if (body === '4' || body === Number('4').toLocaleString('ar-EG')) {
            await CrateDatabase({ from: from, menu: 'albitaqat' });
            let message = 'للحصول على البطاقة قم بإرسال رقم السورة او إسمها\n'
            message += 'مثال 18 او الكهف \n\n'
            message += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
            await e.reply(message).catch(e => console.log(e));
        }

        else if (body === '5' || body === Number('5').toLocaleString('ar-EG')) {

            let readJson = fs.readJsonSync('./files/json/Sahih_al-Bukhari.json');
            let random = readJson[Math.floor(Math.random() * readJson.length)];
            let file = await MessageMedia.fromUrl(random?.path).catch(e => console.log(e));
            await client.sendMessage(from, file, { caption: random?.caption, quotedMessageId: message_id })
                .catch(error => console.log(error));
        }


        else if (body === '6' || body === Number('6').toLocaleString('ar-EG')) {

            await CrateDatabase({ from: from, menu: 'adhkar' });
            let message = 'قم بإرسال رقم الفئة ⬇️ \n\n'

            for (let item of adhkar) {

                message += `${item?.id}- ${item?.category}\n`

            }

            message += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
            await e.reply(message).catch(e => console.log(e));
        }

        else if (body === '7' || body === Number('7').toLocaleString('ar-EG')) {

            let adhkar = fs.readJsonSync('./files/json/adhkar.json');
            let random = adhkar[Math.floor(Math.random() * adhkar.length)];
            let random_array = random?.array[Math.floor(Math.random() * random?.array?.length)];
            let category = random?.category;
            let text = random_array?.text;
            let filename = './files/image/Hijri_calendar.png';

            await Hijri_calendar(category, text, filename).then(async event => {

                let file = MessageMedia.fromFilePath(event?.filename);
                let caption = '*التقويم الهجري 📅*\n\n'
                caption += `*اليوم:* ${event?.today}\n`
                caption += `*التاريخ الهجري:* ${event?.Hijri}\n`
                caption += `*التاريخ الميلادي:* ${event?.Gregorian}`
                await client.sendMessage(from, file, { caption: caption, quotedMessageId: message_id }).catch(error => console.log(error));
            }).catch(error => console.log(error));

        }

        else if (body === '8' || body === Number('8').toLocaleString('ar-EG')) {

            let readJson = fs.readJsonSync('./files/json/video.json');
            let random = readJson[Math.floor(Math.random() * readJson.length)];
            let file = await MessageMedia.fromUrl(random?.path).catch(e => console.log(e));
            await client.sendMessage(from, file, { caption: random?.caption, quotedMessageId: message_id })
                .catch(async error => {
                    let random = readJson[Math.floor(Math.random() * readJson.length)];
                    let file = await MessageMedia.fromUrl(random?.path).catch(e => console.log(e));
                    await client.sendMessage(from, file, { caption: random?.caption, quotedMessageId: message_id })
                        .catch(error => console.log(error));
                });
        }

    }
}