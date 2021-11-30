import { video } from '../menu/video.js';
import { photo } from '../menu/photo.js';
import { adhkar_all } from '../menu/adhkar_all.js';
import fs from 'fs-extra';
import moment from 'moment-timezone';

export default function broadcast(client, MessageType, Mimetype) {

    setInterval(async function(){ 

        const time = moment.tz("Asia/Riyadh").format('LT');
        const time_adhkar_all = ["1:00 PM","12:00 AM"]
        const time_video = ["3:00 AM","2:00 PM"]
        const time_photo = ["6:00 PM","5:00 AM"]
        const time_quran = ["9:00 AM","8:00 PM"]
        const time_lectures = ["11:00 PM","7:00 AM"]
        const LecturesJson = fs.readJsonSync('./menu/Lectures.json');
        const QuranJson = fs.readJsonSync('./menu/Quran.json');

        if (time_adhkar_all.includes(time)){

            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){

                let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                await client.sendMessage(lop, listadk, MessageType.text)
                .catch((erro) => console.log(erro));
            
            }
    
        }

        else if (time_video.includes(time)){
            
            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){

                let listvideo = video[Math.floor(Math.random() * video.length)]
                await client.sendMessage(lop, { url: listvideo }, MessageType.video)
                .catch((erro) => console.log(erro));
            
            }
    
        }

        else if (time_photo.includes(time)){
            
            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){

                let listphoto = photo[Math.floor(Math.random() * photo.length)]
                await client.sendMessage(lop, { url: listphoto }, MessageType.image, { thumbnail: Buffer.alloc(0) })
                .catch((erro) => console.log(erro));
            
            } 
    
        }

        else if (time_quran.includes(time)){
            
            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){

                let listquran = QuranJson[Math.floor(Math.random() * QuranJson.length)]
                let msg = `*سورة:* ${listquran.Surah} 📖\n*القارئ:* ${listquran.Author} 🔊`
                await client.sendMessage(lop, { url: listquran.FilePath }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
                await client.sendMessage(lop, msg, MessageType.text).catch((erro) => console.log(erro));
            }
    
        }

        else if (time_lectures.includes(time)){
            
            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){

                let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
                let msg = `✽\n\n${listlectures.Lectures}\n\n`
                msg += `*الشيخ:* ${listlectures.Author} 🔊 `

                await client.sendMessage(lop, { url: listlectures.FilePath }, MessageType.video, { caption: msg }).catch((erro) => console.log(erro));
            }
    
        }


    } , 60000);
}