import { WAConnection, MessageType, Mimetype } from '@adiwajshing/baileys';
import fs from 'fs-extra';
import moment from 'moment-timezone';
import broadcast from './lib/broadcast.js';
import execSh  from 'exec-sh';
import figlet from 'figlet';
import { menu_number } from './lib/menu_number.js';
import { db_menu } from './lib/db_menu.js';



console.log(figlet.textSync('Bot Adhkar'));
console.log("                  Start " + moment.tz("Asia/Riyadh").format('LT'))
console.log("               Telegram @BinAttia ")
console.log("")


async function start() {

    try{

        const client = new WAConnection();

        client.on('open', () => {

            console.log (`credentials updated!`);
            fs.writeFileSync('./info.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'));

        });

        
        if (fs.existsSync('./info.json')) {

            client.loadAuthInfo('./info.json'); 
          
        } 

        if (fs.existsSync('./db') === false ) {

            fs.mkdirSync('./db');
            fs.mkdirSync('./db/name_sticker')

            if (fs.existsSync('./db/group_user.json') === false && fs.existsSync('./db/new_user.json') === false) {

                fs.writeJsonSync('./db/group_user.json', []);
                fs.writeJsonSync('./db/new_user.json', []);
            }
            
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

            if (up.action === 'add' && client.contacts[user] != undefined) {

                await client.sendMessage(group, `مرحباً بك ${pushname} 👋`, MessageType.text)

            }

            else if (up.action === 'remove' && client.contacts[user] != undefined) {

                await client.sendMessage(group, `مع السلامة ${pushname} 👋`, MessageType.text)
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


        client.on('chat-update', async (msg) => {

            if (msg.messages && msg.count && msg.hasNewMessage && client.contacts[msg.jid] !== undefined) {
             
                let Menufrom = getMenu({ from: msg.jid });

                menu_number[Menufrom].menu_name.exec({
    
                    messages: msg.messages.array[0].message,
                    download_msg: msg.messages.array[0],
                    Mimetype: Mimetype ,
                    from: msg.jid ,
                    MessageType: MessageType,
                    isGroup: msg.jid.endsWith('@g.us'),
                    pushname: client.contacts[msg.jid].notify ? client.contacts[msg.jid].notify : client.contacts[msg.jid].name ? client.contacts[msg.jid].name : 'بدون إسم',
                    client: client,            
    
                });
            }

        });

        broadcast(client, MessageType, Mimetype); 

        await client.connect() 

    } catch(err) {

        console.log(err.toString());
        execSh("npm start", { cwd: "./" });
    }

}

function getMenu({ from }) {

    if (db_menu[from]) {

      return db_menu[from].menu_name;

    } else {

      db_menu[from] = { menu_name: 0 };
      return db_menu[from].menu_name;

    }

}

start()

