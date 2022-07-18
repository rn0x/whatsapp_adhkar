const {
    default: makeWASocket,
    DisconnectReason,
    useSingleFileAuthState,
    makeInMemoryStore,
    jidDecode
} = require('@adiwajshing/baileys');
const { Boom } = require('@hapi/boom');
const { state, saveState } = useSingleFileAuthState('session.json');
const pino = require('pino');
const fs = require('fs-extra');
const returnMenu = require('./lib/returnMenu.js');
const db = require('./lib/db.js');
const { menu_number } = require('./lib/menu_number.js');
const Hi = require('./menu/Hi.js');
const broadcast = require('./lib/broadcast.js');
const Error = require('./lib/error.js');


async function whatsapp_altaqwaa() {

    db();

    const store = makeInMemoryStore({
        logger: pino().child({
            level: 'silent',
            stream: 'store'
        })
    });

    const client = makeWASocket({
        logger: pino({
            level: 'silent'
        }),
        printQRInTerminal: true,
        browser: ['whatsapp_altaqwaa', 'Chrome', '1.0.0'],
        auth: state
    });

    store.bind(client.ev)

    client.setStatus = (status) => {
        client.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    client.public = true

    client.ev.on('connection.update', async (update) => {

        const { connection, lastDisconnect } = update

        if (connection === 'close') {

            let contact_status = new Boom(lastDisconnect?.error)?.output.statusCode

            // reconnect if not logged out
            if (contact_status === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete Session and Scan Again`);
                await client.logout().catch(e => {

                    console.log(e.output.payload.message);

                    if (e.output.payload.message === 'Connection Closed') {

                        fs.removeSync('./session.json');
                        whatsapp_altaqwaa().catch(error => Error(error));
                    }

                });
            } else if (contact_status === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting....");
                whatsapp_altaqwaa().catch(error => Error(error));
            } else if (contact_status === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server, reconnecting...");
                await client.logout().catch(e => {

                    console.log(e.output.payload.message);

                    if (e.output.payload.message === 'Connection Closed') {

                        fs.removeSync('./session.json');
                        whatsapp_altaqwaa().catch(error => Error(error));
                    }

                });
            } else if (contact_status === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                await client.logout().catch(e => console.log(e.output.payload.message));
            } else if (contact_status === DisconnectReason.loggedOut) {
                console.log(`Device Logged Out, Please Scan Again And Run.`);
                await client.logout().catch(e => {

                    console.log(e.output.payload.message);

                    if (e.output.payload.message === 'Connection Closed') {

                        fs.removeSync('./session.json');
                        whatsapp_altaqwaa().catch(error => Error(error));
                    }

                });
            } else if (contact_status === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                await client.logout().catch(e => console.log(e.output.payload.message));
                whatsapp_altaqwaa().catch(error => Error(error));
            } else if (contact_status === DisconnectReason.timedOut) {
                console.log("Connection TimedOut, Reconnecting...");
                whatsapp_altaqwaa().catch(error => Error(error));
            } else client.end(`Unknown DisconnectReason: ${contact_status}|${connection}`)

        }

        else if (connection === 'open') {

            console.log('opened connection');

        }

    });

    client.ev.on('messages.upsert', async m => {

        if (!m.messages[0].key.fromMe && m.type === 'notify' && m.messages[0].key.remoteJid !== "status@broadcast") {

            let type = Object.keys(m.messages[0].message || {})[0]
            let messages = m.messages[0].message
            let from = m.messages[0].key.remoteJid
            let body = type === "conversation" ? messages.conversation : type === "extendedTextMessage" ? messages.extendedTextMessage.text : type === "imageMessage" ? messages.imageMessage.caption : type === "videoMessage" ? messages.videoMessage.caption : ''
            let GetMenu = await getMenu(from).catch(error => Error(error));
            await Hi(client, body, from, m.messages[0].pushName ? m.messages[0].pushName : 'بدون إسم', m.messages[0]);

            await menu_number[GetMenu]?.menu_name.exec({
                body: body,
                messages: messages,
                download_msg: m.messages[0],
                from: from,
                id: m.messages[0],
                isGroup: from.endsWith('@g.us'),
                pushname: m.messages[0].pushName ? m.messages[0].pushName : 'بدون إسم',
                client: client,
            });

            //  await client.sendReadReceipt(from, m.messages[0].key.participant, [from]);
            await client.readMessages([m.messages[0].key]);
            console.log(`User: ${from}`);
        }

    });

    broadcast(client);

    client.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    client.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = client.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    client.ev.on('creds.update', saveState);

}


async function getMenu(from) {

    let db_menu = await fs.readJson(`./db/user/${from}.json`).catch(async e => await returnMenu(from, 0));

    if (Object.keys(db_menu || {}).includes(from)) {

        return db_menu[from].menu_name;

    }

    else {

        return 0
    }

}


whatsapp_altaqwaa().catch(error => Error(error));