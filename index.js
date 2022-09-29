import whatsapp from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import fs from 'fs-extra';
import getUnreadMessages from './module/getUnreadMessages.js';
import CrateDatabase from './module/CrateDatabase.js';
import getMenu from './module/getMenu.js';
import menu from './module/menu.js';
import Hi from './menu/Hi.js';
import moment_hijri from 'moment-hijri';
import scheduling_messages from './module/scheduling_messages.js';

async function whatsapp_adhkar() {

    try {

        console.log('Starting Whatsapp Adhkar :', moment_hijri().locale('en-EN').format('LT'));

        const { Client, Location, List, Buttons, LocalAuth, MessageMedia } = whatsapp;

        const client = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: {
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                    '--shm-size=1gb'
                ],
                timeout: 60000,
                executablePath: process.platform === "win32" || process.platform === "win64" ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" : process.platform === "linux" ? "/usr/bin/google-chrome-stable" : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
            }
        });


        client.on('qr', (qr) => {
            // Generate and scan this code with your phone
            qrcode.generate(qr, { small: true });
        });

        client.on('loading_screen', (percent, message) => {
            console.log('LOADING SCREEN', percent, message);
        });

        client.on('authenticated', () => {
            console.log('AUTHENTICATED');
        });

        client.on('auth_failure', e => {
            // Fired if session restore was unsuccessful
            console.error('AUTHENTICATION FAILURE', e);
        });

        client.on('ready', async () => {
            console.log('Whatsapp Adhkar is ready!');
            await getUnreadMessages(client, MessageMedia);
        });

        client.on('message', async e => {

            let chat = await e?.getChat();
            let contact = await e?.getContact();
            let download = await e?.downloadMedia();
            let quotedMsg = await e.getQuotedMessage();
            let body = e?.body;
            let message_type = e?.type;
            let from = e?.from;
            let chatId = chat?.id?._serialized;
            let hasMedia = e?.hasMedia;
            let message_id = e?.id?._serialized;
            let isGroup = chat?.isGroup;
            let pushname = isGroup ? chat?.name : contact?.pushname;
            let number = isGroup ? chat?.id?.user : contact?.number;
            let mimetype = download?.mimetype;
            let data = download?.data;
            let filename = download?.filename;
            await CrateDatabase({ from: isGroup ? chatId : from, pushname: pushname, number: number, isGroup: isGroup });
            await Hi(from, pushname, body, e);
            let GetMenu = await getMenu(from);
            await menu[GetMenu]?.module?.exec({
                from: from,
                pushname: pushname,
                number: number,
                isGroup: isGroup,
                body: body,
                hasMedia: hasMedia,
                message_id: message_id,
                message_type: message_type,
                mimetype: mimetype,
                data: data,
                filename: filename,
                download: download,
                quotedMsg: quotedMsg,
                chat: chat,
                e: e,
                MessageMedia, MessageMedia,
                client: client
            })

            await client.sendSeen(from);
            console.log(`${from} - ${mimetype ? mimetype : 'message'}`);
            

        });

        client.on('group_join', async (e) => {
            // User has joined or been added to the group.
            let chatId = e?.chatId;
            let getChat = await client.getChatById(chatId);
            let pushname = getChat?.name;
            let isGroup = getChat?.isGroup;
            let number = getChat?.id?.user;
            let recipientIds = e?.recipientIds;
            let info = client?.info
            let me = info?.me?._serialized ? info?.me?._serialized : info?.wid?._serialized;

            if (recipientIds?.includes(me)) {

                await CrateDatabase({ from: chatId, pushname: pushname, number: number, isGroup: isGroup });
                
            }

        });

        client.on('group_leave', async (e) => {
            // User has left or been kicked from the group.
            let chatId = e?.chatId;
            let database = fs.existsSync(`./database/${chatId}.json`);
            let recipientIds = e?.recipientIds;
            let info = client?.info
            let me = info?.me?._serialized ? info?.me?._serialized : info?.wid?._serialized;

            if (recipientIds?.includes(me)) {

                if (database) {

                    fs.removeSync(`./database/${chatId}.json`);
                    console.log(`You have been kicked out of the group ${chatId}`);

                }

            }


        });

        client.on('change_state', state => {
            console.log('CHANGE STATE', state);
        });

        client.on('disconnected', (reason) => {
            console.log('Whatsapp Adhkar was logged out', reason);
        });

        await scheduling_messages(client, MessageMedia);

        await client.initialize();

    } catch (error) {

        console.log(error);
    }
}


await whatsapp_adhkar()
