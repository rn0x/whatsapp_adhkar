import fs from 'fs-extra';
import CrateDatabase from '../module/CrateDatabase.js';

export default async function Hi(from, pushname, body, e) {

    if (body === 'hi' || body === 'Hi' || body === 'خدمة' || body === 'خدمه' || body === '#') {

        await CrateDatabase({ from: from, menu: 'main' });
        let message = `السلام عليكم ورحمه الله وبركاته \n`
        message += `${pushname} حياك الله \n\n`
        message += '▪️ لطلب مادة ما من المواد أدناه كل ما عليك إرسال *رقم* المادة باللغة العربية أو الإنجليزية \n\n'
        message += '*مثال: 1* \n\n'
        message += '1- القرآن الكريم \n'
        message += '2- الباحث القرآني \n'
        message += '3- الباحث الحديثي \n'
        message += '4- بطاقات القرآن الكريم (صور مصممة وصوتية) \n'
        message += '5- صحيح البخاري (صور مصممة) \n'
        message += '6- حصن المسلم \n'
        message += '7- التقويم الهجري \n'
        message += '8- فيديوهات عشوائية'
        await e.reply(message).catch(e => console.log(e));
    }
    
}