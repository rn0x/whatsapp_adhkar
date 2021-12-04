import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';


export const Group_Url = {
    

    async exec({ from, client, pushname, messages, MessageType }) {

        const type = Object.keys(messages)[0]
        const body = type === "conversation" ? messages.conversatio : type === "extendedTextMessage" ? messages.extendedTextMessage.text : type === "imageMessage" ? messages.imageMessage.caption : type === "videoMessage" ? messages.videoMessage.caption : ''
        const GroupsMenu = fs.readJsonSync('./db/GroupsMenu.json');


        if (body.length === 48 && body.includes('https://chat.whatsapp.com/') && GroupsMenu.some(e => e.url === body) === false){

            let db_groups = fs.readJsonSync(`./db/Group/${from}.json`);
            db_groups.push(body);
            fs.writeJsonSync(`./db/Group/${from}.json`,db_groups)

            let group_name = db_groups[0]
            let group_url = db_groups[1]
            let msg = 'تم نشر المجموعة بنجاح ✅ \n\n'
            msg += `إسم المجموعة: ${group_name} \n\n\n`
            msg += `${group_url}`
            let menu_group = '1- نشر قروبك ✉️ \n'
            menu_group += '2- قائمة القروبات ⚜️\n'
            menu_group += '3- قروب عشوائي 🔄\n\n'
            menu_group += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            GroupsMenu.push({name: group_name, url: group_url});
            fs.writeJsonSync('./db/GroupsMenu.json', GroupsMenu)
            await client.sendMessage(from, msg, MessageType.text).catch((erro) => console.log(erro));
            fs.writeJsonSync(`./db/Group/${from}.json`, [])
            MenuNmber(from, 9)
            await client.sendMessage(from, menu_group, MessageType.text).catch((erro) => console.log(erro));
        }


        else if (body === 'Hi' || body === 'hi' || body === 'خدمة' || body === 'خدمه' || body === '#'){

            MenuNmber(from, 0)

            let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
            mesg += 'من فضلك قم بكتابة *رقم* الخدمة ✉️ \n\n\n'
            mesg += '1- قائمة القرآن الكريم 📖 \n'
            mesg += '2- قائمة الأذكار 📿 \n'
            mesg += '3- فيديوهات قرآن عشوائية 🎥 \n'
            mesg += '4- صورة عشوائية 🖼️ \n'
            mesg += '5- قائمة الملصقات 🪧 \n'
            mesg += '6- محاضرات عشوائية 🌾 \n'
            mesg += '7- قائمة القروبات ⚜️ \n\n\n\n'
            mesg += 'إحصائيات البوت \n'
            mesg += `عدد المحادثات الحالية : ${client.chats.length}\n`
            mesg += `عدد جهات الإتصال : ${Object.keys(client.contacts).length}\n\n`
            mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
            mesg += 'يمكنك متابعة البوت على تيليجرام عبر الحساب @adhk2r_bot 🤖'
            fs.writeJsonSync(`./db/Group/${from}.json`, [])
            await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));

        }

        else {

            if (body.length !== 48 || body.includes('https://chat.whatsapp.com/') === false) {

                let msg = 'الرابط غير صحيح تأكد من كتابة الرابط بشكل صحيح وان لايحتوي على مسافات ⚠️ \n\n\n'
                msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
                await client.sendMessage(from, msg, MessageType.text).catch((erro) => console.log(erro));
            }

            if (GroupsMenu.some(e => e.url === body) === true) {

                let msg = 'لقد تم نشر هذه المجموعة بالفعل ⚠️\n\n\n'
                msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
                await client.sendMessage(from, msg, MessageType.text).catch((erro) => console.log(erro));
                fs.writeJsonSync('./lib/db_groups.json', [])

            }
        
        }

    }

}