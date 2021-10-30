import { video } from '../menu/video.js';
import { photo } from '../menu/photo.js';
import { adhkar_all } from '../menu/adhkar_all.js';
import { quran_broadcast } from '../menu/quran_broadcast.js';
import fs from 'fs-extra';
import moment from 'moment-timezone';

export default function broadcast(client, MessageType, Mimetype) {

    setInterval(async function(){ 

        const time = moment.tz("Asia/Riyadh").format('LT');
        const time_adhkar_all = ["1:00 PM","12:00 AM"]
        const time_video = ["3:00 AM","2:00 PM"]
        const time_photo = ["6:00 PM","5:00 AM"]
        const time_quran = ["9:00 AM","8:00 PM"]
        

        if (time_adhkar_all.includes(time)){

            let user = fs.readJsonSync('./db/user.json');
            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){
                let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                await client.sendMessage(lop, listadk, MessageType.text)
                .catch((erro) => console.log(erro));
            
            }

            for (let lop2 of user){
                let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                await client.sendMessage(lop2, listadk, MessageType.text)
                .catch((erro) => console.log(erro));
            
            }
    
        }

        else if (time_video.includes(time)){
            
            let user = fs.readJsonSync('./db/user.json');
            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){

                let listvideo = video[Math.floor(Math.random() * video.length)]
                await client.sendMessage(lop, { url: listvideo }, MessageType.video)
                .catch((erro) => console.log(erro));
            
            }

            for (let lop2 of user){

                let listvideo = video[Math.floor(Math.random() * video.length)]
                await client.sendMessage(lop2, { url: listvideo }, MessageType.video)
                .catch((erro) => console.log(erro));
            
            }
    
        }

        else if (time_photo.includes(time)){
            
            let user = fs.readJsonSync('./db/user.json');
            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){

                let listphoto = photo[Math.floor(Math.random() * photo.length)]
                await client.sendMessage(lop, { url: listphoto }, MessageType.image, { thumbnail: Buffer.alloc(0) })
                .catch((erro) => console.log(erro));
            
            } 

            for (let lop2 of user){

                let listphoto = photo[Math.floor(Math.random() * photo.length)]
                await client.sendMessage(lop2, { url: listphoto }, MessageType.image, { thumbnail: Buffer.alloc(0) })
                .catch((erro) => console.log(erro));
            
            } 
    
        }

        else if (time_quran.includes(time)){
            
            let user = fs.readJsonSync('./db/user.json');
            let group_user = fs.readJsonSync('./db/group_user.json');

            for (let lop of group_user){

                let listquran = quran_broadcast[Math.floor(Math.random() * quran_broadcast.length)]
                await client.sendMessage(lop, { url: listquran }, MessageType.audio, { mimetype: Mimetype.mp4Audio })
                .catch((erro) => console.log(erro));
            
            }

            for (let lop2 of user){

                let listquran = quran_broadcast[Math.floor(Math.random() * quran_broadcast.length)]
                await client.sendMessage(lop2, { url: listquran }, MessageType.audio, { mimetype: Mimetype.mp4Audio })
                .catch((erro) => console.log(erro));
            
            }
    
        }


    } , 60000);
}