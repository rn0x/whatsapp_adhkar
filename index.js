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
import path from "path";
import fixClient from './module/fixClient.js';

async function whatsapp_adhkar() {

    const __dirname = path.resolve();
    await fixClient(__dirname);
    const config = fs.readJsonSync(path.join(__dirname, './config.json'));
    let folder_database = fs.existsSync(path.join(__dirname, './database'));

    if (folder_database === false) {

        fs.mkdirSync(path.join(__dirname, './database')); // إنشاء مجلد قاعدة البيانات اذ لم يكن موجود

    }

    console.log('Starting Whatsapp Adhkar :', moment_hijri().locale('en-EN').format('LT'));

    const { Client, Location, List, Buttons, LocalAuth, MessageMedia } = whatsapp;
    const client = new Client({
        authStrategy: new LocalAuth(),
        puppeteer: {
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--shm-size=1gb'
            ],
            timeout: 60000,
            executablePath: config?.executablePath,
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
        await getUnreadMessages(client, MessageMedia).catch(error => console.log(error))
    });

    client.on('message', async e => {

        if (e?.from === 'status@broadcast') return
        let chat = await e?.getChat().catch(error => console.log(error));
        let contact = await e?.getContact().catch(error => console.log(error));
        let download = await e?.downloadMedia().catch(error => console.log(error));
        let quotedMsg = await e?.getQuotedMessage().catch(error => console.log(error))
        let body = e?.body;
        let message_type = e?.type;
        let from = e?.from;
        let chatId = chat?.id?._serialized;
        let hasMedia = e?.hasMedia;
        let message_id = e?.id?._serialized;
        let isGroup = chat?.isGroup;
        let pushname = isGroup ? chat?.name : contact?.pushname;
        let number = isGroup ? chat?.id?.user : contact?.number ? contact?.number : contact?.id?.user;
        let mimetype = download?.mimetype;
        let data = download?.data;
        let filename = download?.filename;
        await CrateDatabase({ from: isGroup ? chatId : from, pushname: pushname, number: number, isGroup: isGroup }).catch(error => console.log(error));
        await Hi(from, pushname, body, e).catch(error => console.log(error));
        let GetMenu = await getMenu(from).catch(error => console.log(error));
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

        await client.sendSeen(from).catch(error => console.log(error));
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

            await CrateDatabase({ from: chatId, pushname: pushname, number: number, isGroup: isGroup }).catch(error => console.log(error));

        }

    });

    client.on('group_leave', async (e) => {
        // User has left or been kicked from the group.
        let chatId = e?.chatId;
        let database = fs.existsSync(path.join(__dirname, `./database/${chatId}.json`));
        let recipientIds = e?.recipientIds;
        let info = client?.info
        let me = info?.me?._serialized ? info?.me?._serialized : info?.wid?._serialized;

        if (recipientIds?.includes(me)) {

            if (database) {

                fs.removeSync(path.join(__dirname, `./database/${chatId}.json`));
                console.log(`You have been kicked out of the group ${chatId}`);

            }

        }


    });

    client.on('change_state', state => {
        console.log('CHANGE STATE', state);
    });

    client.on('disconnected', async (reason) => {
        console.log('Whatsapp Adhkar was logged out', reason);
        await client.destroy().catch(error => console.log(error));
        await whatsapp_adhkar().catch(error => console.log(error));

    });

    await scheduling_messages(client, MessageMedia).catch(error => console.log(error));

    await client.initialize().catch(async (error) => {
        console.log('await client.initialize() : ', error)
        await client.destroy().catch(error => console.log(error));
        await whatsapp_adhkar().catch(error => console.log(error));
    });
    

}


await whatsapp_adhkar().catch(error => console.log(error));
