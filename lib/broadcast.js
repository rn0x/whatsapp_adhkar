const { adhkar_all } = require('../menu/adhkar_all.js');
const fs = require('fs-extra');
const moment = require('moment-timezone');
const Error = require('../lib/error.js');
const { video } = require('../menu/video.js');
const { photo } = require('../menu/photo.js');

module.exports = function broadcast(client) {

    setInterval(async function () {

        const time = moment.tz("Asia/Riyadh").format('LT');
        const time_adhkar_all = ["1:00 PM"];
        const time_video = ["2:00 AM"];
        const time_photo = ["8:00 PM"];
        const time_quran = ["10:00 AM"];
        const time_lectures = ["11:00 PM"];
        const time_am = ["5:00 AM"];
        const time_pm = ["5:00 PM"];
        const LecturesJson = fs.readJsonSync('./menu/Lectures.json');
        const QuranJson = fs.readJsonSync('./menu/Quran.json');
        const getGroups = await client.groupFetchAllParticipating().catch(error => Error(error));
        const group_user = Object.entries(getGroups || {}).slice(0).map(entry => entry[1]);

        if (time_adhkar_all.includes(time)) {

            for (let lop of group_user) {

                let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                await client.sendMessage(lop.id, { text: listadk })
                    .catch((error) => Error(error));
                await new Promise(r => setTimeout(r, 5000));
            }

        }

        else if (time_video.includes(time)) {

            for (let lop of group_user) {

                let listvideo = video[Math.floor(Math.random() * video.length)]
                await client.sendMessage(lop.id, { video: { url: listvideo } })
                    .catch((error) => Error(error));
                await new Promise(r => setTimeout(r, 5000));

            }

        }

        else if (time_photo.includes(time)) {

            for (let lop of group_user) {

                let listphoto = photo[Math.floor(Math.random() * photo.length)]
                await client.sendMessage(lop.id, { image: { url: listphoto } })
                    .catch((error) => Error(error));
                await new Promise(r => setTimeout(r, 5000));
            }

        }

        else if (time_quran.includes(time)) {

            for (let lop of group_user) {

                let listquran = QuranJson[Math.floor(Math.random() * QuranJson.length)]
                let msg = `*سورة:* ${listquran.Surah} 📖\n*القارئ:* ${listquran.Author} 🔊`
                await client.sendMessage(lop.id, { audio: { url: listquran.FilePath }, mimetype: 'audio/mp4', ptt: true }).catch((error) => Error(error));
                await client.sendMessage(lop.id, msg).catch((error) => Error(error));
                await new Promise(r => setTimeout(r, 5000));
            }

        }

        else if (time_lectures.includes(time)) {

            for (let lop of group_user) {

                let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
                let msg = `✽${listlectures.Lectures}`
                msg += `${listlectures.Author ? `\n\n*الشيخ:* ${listlectures.Author} 🔊` : ''}`

                await client.sendMessage(lop.id, { video: { url: listlectures.FilePath }, caption: msg }).catch((error) => Error(error));
                await new Promise(r => setTimeout(r, 5000));
            }

        }

        else if (time_am.includes(time)) {

            for (let lop of group_user) {

                let url_mp3 = 'http://bot.altaqwaa.org/media/adhkar_mp3/Adhkar_sbh.mp3'
                let msg = `*أذكار الصباح* ☀️\n*بصوت* إدريس أبكر 🔊`

                await client.sendMessage(lop.id, { audio: { url: url_mp3 }, mimetype: 'audio/mp4', ptt: true }).catch((error) => Error(error));
                await client.sendMessage(lop.id, { text: msg }).catch((error) => Error(error));
                await new Promise(r => setTimeout(r, 5000));
            }

        }

        else if (time_pm.includes(time)) {

            for (let lop of group_user) {

                let url_mp3 = 'http://bot.altaqwaa.org/media/adhkar_mp3/Adhkar_msa.mp3'
                let msg = `*أذكار المساء* 🌑\n*بصوت* فيصل بن جذيان 🔊`

                await client.sendMessage(lop.id, { audio: { url: url_mp3 }, mimetype: 'audio/mp4', ptt: true }).catch((error) => Error(error));
                await client.sendMessage(lop.id, { text: msg }).catch((error) => Error(error));
                await new Promise(r => setTimeout(r, 5000));
            }

        }


    }, 60000);
}