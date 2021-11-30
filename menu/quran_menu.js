import { db_menu } from '../lib/db_menu.js';
import fs from 'fs-extra';

export const quran_menu = {

    async exec({ from, client, pushname, messages, MessageType, Mimetype }) {

        const body = messages.extendedTextMessage !== null ? messages.extendedTextMessage.text : messages.conversation

        if (body === '1'){

            db_menu[from].menu_name = 2;

            let quran_idr = fs.readFileSync('./media/text/quran_1.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, quran_idr, MessageType.text).catch((erro) => console.log(erro));
            await client.sendMessage(from, home, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '2'){

            db_menu[from].menu_name = 3;

            let quran_idr = fs.readFileSync('./media/text/quran_2.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, quran_idr, MessageType.text).catch((erro) => console.log(erro));
            await client.sendMessage(from, home, MessageType.text).catch((erro) => console.log(erro));

        }

        else if (body === '3'){

            db_menu[from].menu_name = 4;

            let quran_idr = fs.readFileSync('./media/text/quran_3.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, quran_idr, MessageType.text).catch((erro) => console.log(erro));
            await client.sendMessage(from, home, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '4'){ 
            
            db_menu[from].menu_name = 5;

            let quran_idr = fs.readFileSync('./media/text/quran_4.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, quran_idr, MessageType.text).catch((erro) => console.log(erro));
            await client.sendMessage(from, home, MessageType.text).catch((erro) => console.log(erro));     
            
        }

        else if (body === 'Hi' || body === 'hi' || body === 'خدمة' || body === 'خدمه' || body === '#'){

            db_menu[from].menu_name = 0;

            let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
            mesg += 'من فضلك قم بكتابة *رقم* الخدمة ✉️ \n\n\n'
            mesg += '1- قائمة القرآن الكريم 📖 \n'
            mesg += '2- قائمة الأذكار 📿 \n'
            mesg += '3- فيديو عشوائي 🎥 \n'
            mesg += '4- صورة عشوائية 🖼️ \n'
            mesg += '5- قائمة الملصقات 🪧 \n'
            mesg += '6- محاضرات عشوائية 🌾 \n\n\n\n'
            mesg += 'إحصائيات البوت \n'
            mesg += `عدد المحادثات الحالية : ${client.chats.length}\n`
            mesg += `عدد جهات الإتصال : ${Object.keys(client.contacts).length}\n\n`
            mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
            mesg += 'يمكنك متابعة البوت على تيليجرام عبر الحساب @adhk2r_bot 🤖'
            
            await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));
       
        }

    }

}