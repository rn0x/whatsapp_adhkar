import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';


export const Group_Name = {
    

    async exec({ from, client, pushname, body, MessageType }) {

        

        if (body.length <= 30){

            let group_name = 'من فضلك قم بكتابة رابط المجموعة 💬'
            let db_groups = fs.readJsonSync(`./db/Group/${from}.json`);
            db_groups.push(body);
            fs.writeJsonSync(`./db/Group/${from}.json`,db_groups)

            await client.sendMessage(from, group_name, MessageType.text).catch((erro) => console.log(erro));
            MenuNmber(from, 11)
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
            mesg += '7- قائمة القروبات ⚜️ \n'
            mesg += '8- بطاقات القرآن 🎴 \n\n\n\n'
            mesg += 'إحصائيات البوت \n'
            mesg += `عدد المحادثات الحالية : ${client.chats.length}\n`
            mesg += `عدد جهات الإتصال : ${Object.keys(client.contacts).length}\n\n`
            mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
            mesg += 'يمكنك متابعة البوت على تيليجرام عبر الحساب @adhk2r_bot 🤖'
            fs.writeJsonSync(`./db/Group/${from}.json`, [])
            await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));

        }

        else {

            let msg = 'يجب أن يكون الإسم أقل من 30 حرف ⚠️\n\n\n'
            msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
     
            await client.sendMessage(from, msg, MessageType.text).catch((erro) => console.log(erro));
        
        }

    }

}