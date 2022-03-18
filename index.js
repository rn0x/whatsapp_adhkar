import wa from '@open-wa/wa-automate';
import moment from 'moment-timezone';
import broadcast from './lib/broadcast.js';
import figlet from 'figlet';
import { menu_number } from './lib/menu_number.js';
import getMenu from './lib/getMenu.js';
import Folder from './lib/Folder.js';
import Hi from './menu/Hi.js';

Folder();

console.log(figlet.textSync('Bot Adhkar'));
console.log("                  Start " + moment.tz("Asia/Riyadh").format('LT'));
console.log("               Telegram @BinAttia \n");

const options = {
    multiDevice: true,
    authTimeout: 0,
    blockCrashLogs: true,
    useChrome: true,
    autoRefresh: true,
    cacheEnabled: true,
    qrRefreshS: 0,
    throwErrorOnTosBlock: false,
    deleteSessionDataOnLogout: false,
    skipUpdateCheck: false,
    bypassCSP: true,
    headless: true,
    logConsole: false,
    //executablePath: "/usr/bin/google-chrome-stable", //  اذا كان نظامك لينكس قم بإلغاء التعليق من هذا السطر // linux
    //executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", //  اذا كان نظامك ويندوز قم بإلغاء التعليق من هذا السطر // windows
    qrTimeout: 0,
    sessionId: 'Bot_Adhkar'
};

wa.create(options)
    .then(async client => {

        try {

            await client.onAnyMessage(async (msg) => {

                let from = msg.from;
                let id = msg.id
                let body = msg.body;
                let messages = msg;
                let Menufrom = await getMenu(from);
                let pushname = msg.sender && msg.sender.pushname ? msg.sender.pushname : msg.sender && msg.sender.verifiedName ? msg.sender.verifiedName : msg.sender && msg.sender.formattedName ? msg.sender.formattedName : ' ';
                let isGroupMsg = msg.isGroupMsg;
                let number_arabic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

                await menu_number[Menufrom !== undefined ? Menufrom : 0].menu_name.exec({

                    body: body,
                    messages: messages,
                    id: id,
                    from: from,
                    isGroup: isGroupMsg,
                    pushname: pushname,
                    client: client,

                });

                Hi(client, body, from, pushname, id);

                if (isGroupMsg === false && number_arabic.some(fx => body === fx)) {

                    let msg = 'من فضلك استعمل الأرقم الإنجليزية ⚠️'

                    await client.reply(from, msg, id).catch((erro) => console.log(erro));

                }

                await client.sendSeen(from)
            });


            broadcast(client);

            setInterval(async () => {

                for (let lop of await client.getAllUnreadMessages()) {

                    let from = lop.from;
                    let id = lop.id
                    let body = lop.body;
                    let messages = lop;
                    let Menufrom = await getMenu(from);
                    let pushname = ' ';
                    let isGroupMsg = lop.isGroupMsg;

                    await menu_number[Menufrom !== undefined ? Menufrom : 0].menu_name.exec({

                        body: body,
                        messages: messages,
                        id: id,
                        from: from,
                        isGroup: isGroupMsg,
                        pushname: pushname,
                        client: client,

                    });

                    await client.sendSeen(from);

                }

            }, 180000);

        } catch (error) {

            console.log(error);

        }
    })
    .catch((error) => {
        console.log(error);
    });