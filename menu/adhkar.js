import { db_menu } from '../lib/db_menu.js';
import { adhkar_all } from '../menu/adhkar_all.js';
import fs from 'fs-extra';


export const adhkar = {
    

    async exec({ from, client, pushname, messages, MessageType }) {

        const body = messages.extendedTextMessage !== null ? messages.extendedTextMessage.text : messages.conversation

        if (body === '1'){

            let adhkar_sbh = fs.readFileSync('./media/text/adhkar_sbh.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_sbh, MessageType.text).catch((erro) => console.log(erro));
        }

        else if (body === '2'){

            let adhkar_msa = fs.readFileSync('./media/text/adhkar_msa.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_msa, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '3'){

            let adhkar_nom = fs.readFileSync('./media/text/adhkar_nom.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_nom, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '4'){

            let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
            await client.sendMessage(from, listadk, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '5'){

            let ad3yh_nboyh = fs.readFileSync('./media/text/ad3yh_nboyh.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, ad3yh_nboyh, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '6'){

            let adhkar_al2dan = fs.readFileSync('./media/text/adhkar_al2dan.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_al2dan, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '7'){

            let adhkar_almsgd = fs.readFileSync('./media/text/adhkar_almsgd.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_almsgd, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '8'){

            let adhkar_alwdo2 = fs.readFileSync('./media/text/adhkar_alwdo2.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_alwdo2, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '9'){

            let adhkar_home = fs.readFileSync('./media/text/adhkar_home.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_home, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '10'){

            let adhkar_al5la = fs.readFileSync('./media/text/adhkar_al5la.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_al5la, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '11'){

            let adhkar_food = fs.readFileSync('./media/text/adhkar_food.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhkar_food, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === '12'){

            let adhka_5tm = fs.readFileSync('./media/text/adhka_5tm.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, adhka_5tm, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === 'Hi' || body === 'hi' || body === 'خدمة' || body === 'خدمه' || body === '#'){

            db_menu[from].menu_name = 0;

            let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
            mesg += 'من فضلك قم بكتابة *رقم* الخدمة ✉️ \n\n\n'
            mesg += '1- قائمة القرآن الكريم 📖 \n'
            mesg += '2- قائمة الأذكار 📿 \n'
            mesg += '3- فيديو عشوائي 🎥 \n'
            mesg += '4- صورة عشوائية 🖼️ \n'
            mesg += '5- قائمة الملصقات 🪧 \n\n\n\n'
            mesg += 'إحصائيات البوت \n'
            mesg += `عدد المحادثات الحالية : ${client.chats.length}\n`
            mesg += `عدد جهات الإتصال : ${Object.keys(client.contacts).length}\n\n`
            mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
            mesg += 'يمكنك متابعة البوت على تيليجرام عبر الرابط https://t.me/adhk2r_bot 🤖'
        
            await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));

        }

    }


}