import { video } from '../menu/video.js';
import { photo } from '../menu/photo.js';
import { adhkar_all } from '../menu/adhkar_all.js';
import fs from 'fs-extra';
import moment from 'moment-timezone';
import Error from '../menu/error.js';

export default function broadcast(client) {

    try {

        setInterval(async function () {

            const time = moment.tz("Asia/Riyadh").format('LT');
            const time_adhkar_all = ["1:00 PM"];
            const time_video = ["2:00 AM"];
            const time_photo = ["8:00 PM"];
            const time_quran = ["10:00 AM"];
            const time_lectures = ["11:00 PM"];
            const time_am = ["5:00 AM"];
            const time_pm = ["5:00 PM"];
            const time_hisn_almuslim = ["12:00 AM"];
            const LecturesJson = fs.readJsonSync('./menu/Lectures.json');
            const QuranJson = fs.readJsonSync('./menu/Quran.json');

            if (time_adhkar_all.includes(time)) {

                let group_user = fs.readJsonSync('./db/group_user.json');

                for (let lop of group_user) {

                    let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                    await client.sendText(lop, listadk)
                        .catch((error) => Error(error));

                }

            }

            else if (time_video.includes(time)) {

                let group_user = fs.readJsonSync('./db/group_user.json');

                for (let lop of group_user) {

                    let listvideo = video[Math.floor(Math.random() * video.length)]
                    await client.sendFile(lop, listvideo)
                        .catch((error) => Error(error));

                }

            }

            else if (time_photo.includes(time)) {

                let group_user = fs.readJsonSync('./db/group_user.json');

                for (let lop of group_user) {

                    let listphoto = photo[Math.floor(Math.random() * photo.length)]
                    await client.sendImage(lop, listphoto)
                        .catch((error) => Error(error));

                }

            }

            else if (time_quran.includes(time)) {

                let group_user = fs.readJsonSync('./db/group_user.json');

                for (let lop of group_user) {

                    let listquran = QuranJson[Math.floor(Math.random() * QuranJson.length)]
                    let msg = `*سورة:* ${listquran.Surah} 📖\n*القارئ:* ${listquran.Author} 🔊`
                    await client.sendAudio(lop, listquran.FilePath).catch((error) => Error(error));
                    await client.sendText(lop, msg).catch((error) => Error(error));
                }

            }

            else if (time_lectures.includes(time)) {

                let group_user = fs.readJsonSync('./db/group_user.json');

                for (let lop of group_user) {

                    let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
                    let msg = `✽${listlectures.Lectures}`
                    msg += `${listlectures.Author ? `\n\n*الشيخ:* ${listlectures.Author} 🔊` : ''}`

                    await client.sendFile(lop, listlectures.FilePath, 'video.mp4', msg).catch((error) => Error(error));
                }

            }

            else if (time_am.includes(time)) {

                let group_user = fs.readJsonSync('./db/group_user.json');

                for (let lop of group_user) {

                    let url_mp3 = 'http://bot.altaqwaa.org/media/adhkar_mp3/Adhkar_sbh.mp3'
                    let msg = `*أذكار الصباح* ☀️\n*بصوت* إدريس أبكر 🔊`

                    await client.sendFile(lop, url_mp3).catch((error) => Error(error));
                    await client.sendText(lop, msg).catch((error) => Error(error));
                }

            }

            else if (time_pm.includes(time)) {

                let group_user = fs.readJsonSync('./db/group_user.json');

                for (let lop of group_user) {

                    let url_mp3 = 'http://bot.altaqwaa.org/media/adhkar_mp3/Adhkar_msa.mp3'
                    let msg = `*أذكار المساء* 🌑\n*بصوت* فيصل بن جذيان 🔊`

                    await client.sendFile(lop, url_mp3).catch((error) => Error(error));
                    await client.sendText(lop, msg).catch((error) => Error(error));
                }

            }

            else if (time_hisn_almuslim.includes(time)) {

                let group_user = fs.readJsonSync('./db/group_user.json');

                for (let lop of group_user) {

                    let hisn_almuslim_json = fs.readJsonSync('./menu/hisn_almuslim.json');
                    let key = Object.keys(hisn_almuslim_json);
                    let list_hisn_almuslim = key[Math.floor(Math.random() * key.length)]
                    let msg = `*✽ ${list_hisn_almuslim}*\n\n`

                    for (let lop of hisn_almuslim_json[list_hisn_almuslim].text) {

                        msg += `*${lop}*\n`

                    }

                    msg += '\n\n\n\n________\n\n'

                    for (let lop2 of hisn_almuslim_json[list_hisn_almuslim].footnote) {

                        msg += `${lop2}\n`

                    }
                    await client.sendText(lop, msg).catch((error) => Error(error));
                }

            }


        }, 60000);

    } catch (errorr) {

        console.log(errorr.toString());
        fs.writeJsonSync('./db/start.json', { start: true });
    }
}