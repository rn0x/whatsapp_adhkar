import { WAConnection, MessageType, Mimetype, ReconnectMode } from '@adiwajshing/baileys';
import fs from 'fs-extra';
import moment from 'moment-timezone';
import broadcast from './lib/broadcast.js';
import figlet from 'figlet';
import { menu_number } from './lib/menu_number.js';
import getMenu from './lib/getMenu.js';
import Folder from './lib/Folder.js';
Folder()


console.log(figlet.textSync('Bot Adhkar'));
console.log("                  Start " + moment.tz("Asia/Riyadh").format('LT'))
console.log("               Telegram @BinAttia \n")


async function start() {

    try {

        const client = new WAConnection();

        client.setMaxListeners(0);
        client.autoReconnect = ReconnectMode.onConnectionLost;

        client.on('open', () => {

            fs.writeFileSync('./info.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'));

        });


        if (fs.existsSync('./info.json')) {

            client.loadAuthInfo('./info.json');

        }

        client.on('close', async (cls) => {

            if (cls.reason === 'unknown' && cls.isReconnecting === true) {

                if (fs.existsSync('./info.json')) {

                    fs.removeSync('./info.json');
                }
            }

            else if (cls.reason === 'invalid_session' && cls.isReconnecting === false) {

                if (fs.existsSync('./info.json')) {

                    fs.removeSync('./info.json');
                }
            }

        });

        client.on('group-participants-update', async (up) => {

            let group = up.jid
            let user = up.participants[0]
            let number = user.split('@s.whatsapp.net', 1)
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
                fs.writeJsonSync('./db/group_user.json', group_user, { spaces: '\t' })
            }

            else if (up.action === 'demote' && client.contacts[user] != undefined) {

                await client.sendMessage(group, `تم إزالة مرتبة الإشراف من العضو ${pushname} ✅`, MessageType.text)
            }

            else if (up.action === 'promote' && client.contacts[user] != undefined) {

                await client.sendMessage(group, `تم ترقية ${pushname} الى مشرف ✅`, MessageType.text)
            }

        });

        client.on('chats-received', async () => {

            let unread = await client.loadAllUnreadMessages();
            for (let lop of unread) {

                let messages = lop.message
                let Menufrom = await getMenu(lop.key.remoteJid)

                await menu_number[Menufrom].menu_name.exec({

                    body: messages && messages.conversation ? messages.conversation : messages && messages.extendedTextMessage ? messages.extendedTextMessage.text : messages && messages.imageMessage ? messages.imageMessage.caption : messages && messages.videoMessage ? messages.videoMessage.caption : '',
                    messages: lop.message,
                    download_msg: lop,
                    Mimetype: Mimetype,
                    from: lop.key.remoteJid,
                    MessageType: MessageType,
                    isGroup: lop.key.remoteJid.endsWith('@g.us'),
                    pushname: client.contacts[lop.key.remoteJid] != undefined && client.contacts[lop.key.remoteJid].notify ? client.contacts[lop.key.remoteJid].notify : client.contacts[lop.key.remoteJid] != undefined && client.contacts[lop.key.remoteJid].name ? client.contacts[lop.key.remoteJid].name : client.contacts[lop.key.remoteJid] != undefined && client.contacts[lop.key.remoteJid] ? client.contacts[lop.key.remoteJid].vname : ' ',
                    client: client,

                });

                await client.chatRead(lop.key.remoteJid, 'read')

            }

        });

        client.on('chat-update', async (msg) => {

            if (msg.messages && msg.count && msg.hasNewMessage && client.contacts[msg.jid] !== undefined) {

                let type = Object.keys(msg.messages.array[0].message)[0]
                let messages = msg.messages.array[0].message
                let Menufrom = await getMenu(msg.jid)

                await menu_number[Menufrom].menu_name.exec({

                    body: type === "conversation" ? messages.conversation : type === "extendedTextMessage" ? messages.extendedTextMessage.text : type === "imageMessage" ? messages.imageMessage.caption : type === "videoMessage" ? messages.videoMessage.caption : '',
                    messages: msg.messages.array[0].message,
                    download_msg: msg.messages.array[0],
                    Mimetype: Mimetype,
                    from: msg.jid,
                    MessageType: MessageType,
                    isGroup: msg.jid.endsWith('@g.us'),
                    pushname: client.contacts[msg.jid] != undefined && client.contacts[msg.jid].notify ? client.contacts[msg.jid].notify : client.contacts[msg.jid] != undefined && client.contacts[msg.jid].name ? client.contacts[msg.jid].name : client.contacts[msg.jid] != undefined && client.contacts[msg.jid] ? client.contacts[msg.jid].vname : 'بدون إسم',
                    client: client,

                });

                await client.chatRead(msg.jid, 'read')

            }

        });

        broadcast(client, MessageType, Mimetype);

        await client.connect()

    } catch (error) {

        console.log(error);

    }

}

start()