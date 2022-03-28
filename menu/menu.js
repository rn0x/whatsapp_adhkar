import MenuNmber from '../lib/MenuNmber.js';
import { video } from './video.js';
import { photo } from './photo.js';
import fs from 'fs-extra';
import Error from './error.js';

export const menu = {

  async exec({ from, client, pushname, body, isGroup, id }) {

    const new_user = fs.readJsonSync('./db/new_user.json');
    const group_user = fs.readJsonSync('./db/group_user.json');
    const LecturesJson = fs.readJsonSync('./menu/Lectures.json');

    if (body === '1') {

      MenuNmber(from, 1)

      let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
      quran_menu += '1- أدريس أبكر \n'
      quran_menu += '2- ماهر المعيقلي \n'
      quran_menu += '3- عبدالله الموسى \n'
      quran_menu += '4- علي جابر \n'
      quran_menu += '5- عبدالرحمن السديس \n'
      quran_menu += '6- خالد الجليل \n\n\n'
      quran_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.reply(from, quran_menu, id).catch((error) => Error(error));

    }

    else if (body === '2') {

      MenuNmber(from, 6)

      let adhkar_menu = '1- أذكار الصباح ☀️ \n'
      adhkar_menu += '2- أذكار المساء 🌑 \n'
      adhkar_menu += '3- أذكار النوم 😴 \n'
      adhkar_menu += '4- أذكار عشوائية 🔄 \n'
      adhkar_menu += '5- أدعية نبوية 🤲 \n'
      adhkar_menu += '6- أذكار عند سماع الآذان 📢 \n'
      adhkar_menu += '7- أذكار المسجد 🕌 \n'
      adhkar_menu += '8- أذكار الوضوء 💦 \n'
      adhkar_menu += '9- أذكار دخول وخروج المنزل 🏠\n'
      adhkar_menu += '10- أذكار الخلاء 🚻 \n'
      adhkar_menu += '11- أذكار الطعام 🥣 \n'
      adhkar_menu += '12- دُعَاءُ خَتْمِ القُرْآنِ الكَريمِ 📖 \n\n\n'
      adhkar_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.reply(from, adhkar_menu, id).catch((error) => Error(error));

    }

    else if (body === '3') {

      let listvideo = video[Math.floor(Math.random() * video.length)]
      await client.sendFileFromUrl(from, listvideo, id).catch((error) => Error(error));

    }

    else if (body === '4') {

      let listphoto = photo[Math.floor(Math.random() * photo.length)]
      await client.sendFileFromUrl(from, listphoto, id).catch((error) => Error(error));

    }

    else if (body === '5') {

      MenuNmber(from, 7)

      let sticker_menu = '1- ملصق عشوائي 🔄 \n'
      sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
      sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
      sticker_menu += '4- ملصقات مساء الخير 🌑 \n\n'
      sticker_menu += '⚠️ لتغير حقوق الملصق قم بإرسال كلمة Me متبوعة بالحقوق \n```Me Bot Adhkar```\n\n\n'
      sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
      await client.reply(from, sticker_menu, id).catch((error) => Error(error));

    }

    else if (body === '6') {

      let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
      let msg = `✽${listlectures.Lectures}`
      msg += `${listlectures.Author ? `\n\n*الشيخ:* ${listlectures.Author} 🔊` : ''}`

      await client.sendFileFromUrl(from, listlectures.FilePath, 'video.mp4', msg).catch((error) => Error(error));

    }

    else if (body === '7') {

      MenuNmber(from, 9)
      fs.writeJsonSync(`./db/Group/${from}.json`, [])
      let menu_group = '1- نشر قروبك ✉️ \n'
      menu_group += '2- قائمة القروبات ⚜️\n'
      menu_group += '3- قروب عشوائي 🔄\n\n'
      menu_group += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.reply(from, menu_group, id).catch((error) => Error(error));

    }

    else if (body === '8') {

      MenuNmber(from, 12)
      let msg = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مقروؤاً ومرئياً \n\n'
      msg += '*محتوياتُ (البِطَاقَات):*\n\n'
      msg += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
      msg += '1- آيَـــــــــــــــاتُـــــها \n'
      msg += '2- مَعــــــنَـى اسْـــــــمِها \n'
      msg += '3- سَبَبُ تَسْمِيَتِها \n'
      msg += '4- أَسْـــــمَاؤُهـا \n'
      msg += '5- مَقْصِدُها العَامُّ \n'
      msg += '6- سَبَبُ نُزُولِهَا \n'
      msg += '7- فَضْــــــلُها \n'
      msg += '8- مُنَــاسَــبَاتُــها \n\n'
      msg += '⚠️ لإرسال البطاقة صورة وصوت قم بإرسال رقم السورة او إسم السورة \n\n\n'
      msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.reply(from, msg, id).catch((error) => Error(error));

    }
    else if (body === '9') {

      MenuNmber(from, 15)
      let hisn_almuslim_json = fs.readJsonSync('./menu/hisn_almuslim.json')
      let key = Object.keys(hisn_almuslim_json);
      let msg = 'من فضلك قم بإرسال رقم الدعاء او الذكر من القائمة التالية ✉️\n\n'
      let number = 1
      
      for (let lop of key) {
      
        msg += `${number ++}- ${lop}\n`
          
      }
      
      msg += '\n\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.reply(from, msg , id).catch((error) => Error(error));

    }

    else if (body === 'dbjson') {

      await client.sendFile(from, './db/group_user.json', 'group_user.json', '', id).catch((error) => Error(error));
      await client.sendFile(from, './db/new_user.json', 'new_user.json', '', id).catch((error) => Error(error));
      await client.sendFile(from, './db/GroupsMenu.json', 'GroupsMenu.json', '', id).catch((error) => Error(error));

    }

    else if (!group_user.includes(from) && isGroup) {

      group_user.push(from)
      fs.writeJsonSync('./db/group_user.json', group_user, { spaces: '\t' })

    }

    else if (!new_user.includes(from) && !isGroup) {


      let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
      mesg += 'من فضلك قم بكتابة *رقم* الخدمة, ولمعرفة خدمات البوت أرسل كلمة خدمة ✉️'

      new_user.push(from)
      fs.writeJsonSync('./db/new_user.json', new_user, { spaces: '\t' })
      await client.sendText(from, mesg).catch((error) => Error(error));

    }

  }

};