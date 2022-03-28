import wa from '@open-wa/wa-automate';
import fs from 'fs-extra';
import moment from 'moment-timezone';
import broadcast from './lib/broadcast.js';
import figlet from 'figlet';
import { menu_number } from './lib/menu_number.js';
import getMenu from './lib/getMenu.js';
import Folder from './lib/Folder.js';
import Hi from './menu/Hi.js';
import Error from './menu/error.js';
Folder();

async function Bot_Adhkar() {

    try {

        console.log(figlet.textSync('Bot Adhkar'));
        console.log("                  Start " + moment.tz("Asia/Riyadh").format('LT'));
        console.log("               Telegram @BinAttia \n");
        fs.writeJsonSync('./db/start.json', { start: false });

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
            executablePath: process.platform === "win32" ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" : "/usr/bin/google-chrome-stable",
            qrTimeout: 0,
            sessionId: 'Bot_Adhkar'
        };

        let client = await wa.create(options);

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

        Error(error);

    }

}

Bot_Adhkar();