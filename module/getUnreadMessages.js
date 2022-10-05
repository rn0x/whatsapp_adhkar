import CrateDatabase from './CrateDatabase.js';
import getMenu from './getMenu.js';
import Hi from '../menu/Hi.js';
import menu from './menu.js';

export default async function getUnreadMessages(client, MessageMedia) {

    try {

        let getChat = await client.getChats();
        for (let item of getChat) {

            if (item.unreadCount !== 0) {

                let fetchMessages = await item.fetchMessages({ limit: item.unreadCount });
                for (let item2 of fetchMessages) {
                    if (item2?.ack === 1) {
                        //console.log(item2?.ack);
                        let chat = await item2?.getChat();
                        let contact = await item2?.getContact();
                        let download = await item2?.downloadMedia();
                        let quotedMsg = await item2.getQuotedMessage();
                        let body = item2?.body;
                        let message_type = item2?.type;
                        let from = item2?.from;
                        let chatId = chat?.id?._serialized;
                        let hasMedia = item2.hasMedia;
                        let message_id = item2?.id?._serialized;
                        let isGroup = chat?.isGroup;
                        let pushname = isGroup ? chat?.name : contact?.pushname;
                        let number = isGroup ? chat?.id?.user : contact?.number;
                        let mimetype = download?.mimetype;
                        let data = download?.data;
                        let filename = download?.filename;
                        await CrateDatabase({ from: isGroup ? chatId : from, pushname: pushname, number: number, isGroup: isGroup }).catch(error => console.log(error));
                        await Hi(from, pushname, body, item2);
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
                            e: item2,
                            MessageMedia, MessageMedia,
                            client: client
                        });

                        await item?.sendSeen()
                        console.log(`${from} - ${mimetype ? mimetype : 'message'}`);

                    }

                }

            }
        }

    } catch (error) {

        console.log(error);
    }

}