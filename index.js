import { WAConnection, MessageType, Mimetype, ReconnectMode } from '@adiwajshing/baileys';
import fs from 'fs-extra';
import moment from 'moment-timezone';
import broadcast from './lib/broadcast.js';
import execSh  from 'exec-sh';
import figlet from 'figlet';
import { menu_number } from './lib/menu_number.js';
import getMenu from './lib/getMenu.js';
import MenuNmber from './lib/MenuNmber.js';
import Folder from './lib/Folder.js';
Folder()


console.log(figlet.textSync('Bot Adhkar'));
console.log("                  Start " + moment.tz("Asia/Riyadh").format('LT'))
console.log("               Telegram @BinAttia ")
console.log("")


async function start() {

    try{

        const client = new WAConnection();
        const db = fs.readJsonSync('./db/db.json');

        client.autoReconnect = ReconnectMode.onConnectionLost;

        client.on('open', () => {

            fs.writeFileSync('./info.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'));

        });

        
        if (fs.existsSync('./info.json')) {

            client.loadAuthInfo('./info.json'); 
          
        } 

        client.on('close', async (cls) =>{

            if (cls.reason === 'unknown' && cls.isReconnecting === true) {

                if (fs.existsSync('./info.json')) {

                    fs.removeSync('./info.json');
                }
            }

            else if (cls.reason === 'invalid_session' && cls.isReconnecting === false){

                if (fs.existsSync('./info.json')) {

                    fs.removeSync('./info.json');
                }
            }

        });

        client.on('group-participants-update', async(up) => {

            let group = up.jid
            let user = up.participants[0]
            let number = user.split('@s.whatsapp.net',1)
            let pushname = client.contacts[user] != undefined && client.contacts[user].notify ? client.contacts[user].notify : client.contacts[user] != undefined && client.contacts[user].name ? client.contacts[user].name : number
            let group_user = await fs.readJson('./db/group_user.json');

            if (up.action === 'add' && client.contacts[user] != undefined) {

                await client.sendMessage(group, `مرحباً بك ${pushname} 👋`, MessageType.text)

            }

            else if (up.action === 'remove' && client.contacts[user] != undefined) {

                await client.sendMessage(group, `مع السلامة ${pushname} 👋`, MessageType.text)
            }

            else if (up.action === 'remove' && user === client.user.jid) {

                let del = group_user.indexOf(group);
                group_user.splice(del, 1)
                fs.writeJsonSync('./db/group_user.json', group_user)
            }

            else if (up.action === 'demote' && client.contacts[user] != undefined) {

                await client.sendMessage(group, `تم إزالة مرتبة الإشراف من العضو ${pushname} ✅`, MessageType.text)
            }

            else if (up.action === 'promote' && client.contacts[user] != undefined) {

                await client.sendMessage(group, `تم ترقية ${pushname} الى مشرف ✅`, MessageType.text)
            }

        });

        client.on('group-update', async (up) => {

            let group = up.jid
            let desc = up.desc
            let announce = up.announce
            let restrict = up.restrict

            if (announce === false) {

                await client.sendMessage(group, `القروب متاح للكتابة من الجميع ✅`, MessageType.text)
            }

            else if (announce === true) {

                await client.sendMessage(group, `القروب متاح للكتابة من المشرفين فقط ⚠️`, MessageType.text)
            }

            else if (restrict === false) {

                await client.sendMessage(group, `يمكن لإي شخص التعديل على إعدادات القروب ⚠️`, MessageType.text)
            }

            else if (restrict === true) {

                await client.sendMessage(group, `يمكن للمشرفين فقط التعديل على إعدادات القروب ✅`, MessageType.text)
            }

            else if (desc) {

                await client.sendMessage(group, `تم تغيير وصف القروب ✅ \n\n${desc}`, MessageType.text)
            }

        });

        client.on('chats-received', async () => {
    
            const unread = await client.loadAllUnreadMessages();
            for (const lop of unread) {

                let db = fs.readJsonSync('./db/db.json');
                let messages = lop.message

                if (!db.includes(lop.key.remoteJid)) {

                    MenuNmber(lop.key.remoteJid, 0);
                    db.push(lop.key.remoteJid)
                    fs.writeJsonSync('./db/db.json', db)

                }

                let Menufrom = await getMenu(lop.key.remoteJid)

                await menu_number[Menufrom].menu_name.exec({
    
                    body: messages.conversatio ? messages.conversatio : messages.extendedTextMessage ? messages.extendedTextMessage.text : messages.imageMessage ? messages.imageMessage.caption : messages.videoMessage.caption ? messages.videoMessage.caption : '',
                    messages: lop.message ,
                    download_msg: lop,
                    Mimetype: Mimetype ,
                    from: lop.key.remoteJid ,
                    MessageType: MessageType,
                    isGroup: lop.key.remoteJid.endsWith('@g.us'),
                    pushname: client.contacts[lop.key.remoteJid] != undefined && client.contacts[lop.key.remoteJid].notify ? client.contacts[lop.key.remoteJid].notify : client.contacts[lop.key.remoteJid] != undefined && client.contacts[lop.key.remoteJid].name ? client.contacts[lop.key.remoteJid].name : client.contacts[lop.key.remoteJid] != undefined && client.contacts[lop.key.remoteJid] ? client.contacts[lop.key.remoteJid].vname : ' ',
                    client: client,            
    
                });
                
                await client.chatRead(lop.key.remoteJid ,'read')
                
            }         

        });

        client.on('chat-update', async (msg) => {

            if (msg.messages && msg.count && msg.hasNewMessage && client.contacts[msg.jid] !== undefined) {
             
                
                let db = fs.readJsonSync('./db/db.json');
                let type = Object.keys(msg.messages.array[0].message)[0]
                let messages = msg.messages.array[0].message

                if (!db.includes(msg.jid)) {

                    MenuNmber(msg.jid, 0);
                    db.push(msg.jid)
                    fs.writeJsonSync('./db/db.json', db)

                }

                let Menufrom = await getMenu(msg.jid)

                await menu_number[Menufrom].menu_name.exec({
    
                    body: type === "conversation" ? messages.conversatio : type === "extendedTextMessage" ? messages.extendedTextMessage.text : type === "imageMessage" ? messages.imageMessage.caption : type === "videoMessage" ? messages.videoMessage.caption : '',
                    messages: msg.messages.array[0].message,
                    download_msg: msg.messages.array[0],
                    Mimetype: Mimetype ,
                    from: msg.jid ,
                    MessageType: MessageType,
                    isGroup: msg.jid.endsWith('@g.us'),
                    pushname: client.contacts[msg.jid] != undefined && client.contacts[msg.jid].notify ? client.contacts[msg.jid].notify : client.contacts[msg.jid] != undefined && client.contacts[msg.jid].name ? client.contacts[msg.jid].name : client.contacts[msg.jid] != undefined && client.contacts[msg.jid] ? client.contacts[msg.jid].vname : 'بدون إسم',
                    client: client,            
    
                });

                await client.chatRead(msg.jid ,'read')

            }

        });

        broadcast(client, MessageType, Mimetype); 

        await client.connect() 

    } catch(err) {

        console.log(err.toString());
        execSh("npm start", { cwd: "./" });
    }

}

start()