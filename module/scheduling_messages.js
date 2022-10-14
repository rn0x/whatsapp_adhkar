import getDatabase from './getDatabase.js';
import fs from 'fs-extra';
import moment_hijri from 'moment-hijri';
import file_size from './file_size.js';

export default async function scheduling_messages(client, MessageMedia) {

    setInterval(async () => {

        let time = moment_hijri().locale('en-EN').format('LT');
        let today = moment_hijri().locale('ar-SA').format('dddd');
        let group = await getDatabase('group');
        let private_ = await getDatabase('private');
        let time_quran = ["10:00 AM"];
        let time_adhkar = ["10:00 PM"];
        let time_video = ["4:00 PM"];
        let time_albitaqat = ["1:00 PM"];

        if (time_quran.includes(time)) {

            let mp3quran = fs.readJsonSync('./files/json/mp3quran.json');
            let quran = fs.readJsonSync('./files/json/Quran.json');

            for (let item of group) {

                let random = quran[Math.floor(Math.random() * quran.length)];
                let number = String(random?.Number).padStart(3, 0);
                let mp3json = mp3quran[random?.Number - 1];
                let surah_name = random?.Name;
                let the_reader = mp3json?.name;
                let url = `${mp3json?.Server}/${number}.mp3`;
                let FileSize = await file_size(url);
                let message = `سورة ${surah_name}\n`;
                message += `القارئ ${the_reader}`;
                let file = await MessageMedia.fromUrl(url).catch(e => console.log(e));

                if (FileSize?.split('.')[0] <= 60 && FileSize?.split(' ')[1] === 'MB' || FileSize?.split(' ')[1] === 'KB') {
                    await client.sendMessage(item, file, { sendMediaAsDocument: true }).catch(error => console.log(error));
                    await client.sendMessage(item, message).catch(error => console.log(error));
                }

            }


        }

        else if (time_adhkar.includes(time)) {

            let adhkar = fs.readJsonSync('./files/json/adhkar.json');
            for (let item of group) {
                let random = adhkar[Math.floor(Math.random() * adhkar.length)];
                let file = await MessageMedia.fromUrl(random?.audio).catch(e => console.log(e));
                let message = ` ـ ❁ …\n\n\n*${random?.category}*\n\n`
                for (let item of random?.array) {

                    message += `\n\n_________\n\n${item?.text}`

                }
                await client.sendMessage(item, message).catch(error => console.log(error));
                await client.sendMessage(item, file, { sendMediaAsDocument: false }).catch(error => console.log(error));
            }

        }

        else if (time_video.includes(time)) {

            let video = fs.readJsonSync('./files/json/video.json');
            for (let item of group) {
                let random = video[Math.floor(Math.random() * video.length)];
                let file = await MessageMedia.fromUrl(random?.path).catch(e => console.log(e));
                await client.sendMessage(item, file, { caption: random?.caption }).catch(error => console.log(error));
            }
        }

        else if (time_albitaqat.includes(time)) {

            let albitaqatJson = fs.readJsonSync('./files/json/albitaqat.json');
            for (let item of group) {
                let random = albitaqatJson[Math.floor(Math.random() * albitaqatJson.length)];
                let num = 1
                let num2 = 1
                let message = `*【 سورة ${random?.surah} 】* \n\n`
                message += `*• أياتها:*\n\n`
                message += `${random?.ayaatiha}\n`
                message += `\n*• معني أسمها:*\n\n`
                message += `${random?.maeni_asamuha}\n`
                message += `\n*• سبب تسميتها:*\n\n`
                message += `${random?.sabab_tasmiatiha}\n`
                message += `\n*• أسماؤها:*\n\n`
                message += `${random?.asmawuha}\n`
                message += `\n*• مقصدها العام:*\n\n`
                message += `${random?.maqsiduha_aleamu}\n`
                message += `\n*• سبب نزولها:*\n\n`
                message += `${random?.sabab_nuzuliha}\n`
                message += `\n*• فضلها:*`
                for (let item of random?.fadluha) {

                    message += `\n\n${num++}- ${item}`

                }
                message += `\n\n*• مناسباتها:*`
                for (let item of random?.munasabatiha) {

                    message += `\n\n${num2++}- ${item}`

                }
                let file_image = await MessageMedia.fromUrl(random?.image).catch(e => console.log(e));
                await client.sendMessage(item, file_image, { caption: message }).catch(error => console.log(error));
                let file_audio = await MessageMedia.fromUrl(random?.audio).catch(e => console.log(e));
                await client.sendMessage(item, file_audio).catch(error => console.log(error));
            }
        }

        else if (time === '9:00 AM' && today === 'الجمعة') {

            let caption = 'واجبات وسنن وآداب الجمعة \n\n'
            caption += '• الاغتسال \n'
            caption += '• التطيب \n'
            caption += '• تهذيب الشعر \n'
            caption += '• لبس الجميل من الثياب \n'
            caption += '• التسوك \n'
            caption += '• النافلة بعد الصلاة \n'
            caption += '• الدنو من الإمام \n'
            caption += '• الإنصات للخطبة \n'
            caption += '• قراءة سورة الكهف \n'
            caption += '• التبكير للمسجد والذهاب ماشيًا \n'
            caption += '• الإنشغال بالذكر ولقرآن إلى الجمعة \n'
            caption += '• الصلاة على النبي ﷺ'
            let file = MessageMedia.fromFilePath('./files/image/aljumuea.jpg');

            for (let item of group) {

                await client.sendMessage(item, file, { caption: caption }).catch(error => console.log(error));
            }
        }

    }, 60000);

}
