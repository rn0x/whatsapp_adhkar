const returnMenu = require('../lib/returnMenu.js');
const { video } = require('./video.js');
const { photo } = require('./photo.js');
const fs = require('fs-extra');
const Error = require('../lib/error.js');

const menu = {

  async exec({ from, client, body, isGroup, id }) {

    const new_user = fs.readJsonSync('./db/new_user.json');
    const group_user = fs.readJsonSync('./db/group_user.json');
    const LecturesJson = fs.readJsonSync('./menu/Lectures.json');

    if (body === '1') {

      returnMenu(from, 1)

      let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
      quran_menu += '1- أدريس أبكر \n'
      quran_menu += '2- ماهر المعيقلي \n'
      quran_menu += '3- عبدالله الموسى \n'
      quran_menu += '4- علي جابر \n'
      quran_menu += '5- عبدالرحمن السديس \n'
      quran_menu += '6- خالد الجليل \n\n\n'
      quran_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.sendMessage(from, { text: quran_menu }, { quoted: id }).catch((error) => Error(error));

    }

    else if (body === '2') {

      returnMenu(from, 6)

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

      await client.sendMessage(from, { text: adhkar_menu }, { quoted: id }).catch((error) => Error(error));

    }

    else if (body === '3') {

      let listvideo = video[Math.floor(Math.random() * video.length)]
      await client.sendMessage(from, { video: { url: listvideo } }, { quoted: id }).catch((error) => Error(error));

    }

    else if (body === '4') {

      let listphoto = photo[Math.floor(Math.random() * photo.length)]
      await client.sendMessage(from, { image: { url: listphoto } }, { quoted: id }).catch((error) => Error(error));

    }

    else if (body === '5') {

      returnMenu(from, 7)

      let sticker_menu = '1- ملصق عشوائي 🔄 \n'
      sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
      sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
      sticker_menu += '4- ملصقات مساء الخير 🌑 \n\n'
      sticker_menu += '5- صانع الملصقات 🪧 \n\n\n'
      sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
      await client.sendMessage(from, { text: sticker_menu }, { quoted: id }).catch((error) => Error(error));

    }

    else if (body === '6') {

      let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
      let msg = `✽${listlectures.Lectures}`
      msg += `${listlectures.Author ? `\n\n*الشيخ:* ${listlectures.Author} 🔊` : ''}`

      await client.sendMessage(from, { video: { url: listlectures.FilePath }, caption: msg }, { quoted: id }).catch((error) => Error(error));

    }

    else if (body === '7') {

      returnMenu(from, 9)
      fs.writeJsonSync(`./db/Group/${from}.json`, [])
      let menu_group = '1- نشر قروبك ✉️ \n'
      menu_group += '2- قائمة القروبات ⚜️\n'
      menu_group += '3- قروب عشوائي 🔄\n\n'
      menu_group += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.sendMessage(from, { text: menu_group }, { quoted: id }).catch((error) => Error(error));

    }

    else if (body === '8') {

      returnMenu(from, 12)
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

      await client.sendMessage(from, { text: msg }, { quoted: id }).catch((error) => Error(error));

    }
    else if (body === '9') {

      returnMenu(from, 15)
      let hisn_almuslim_json = fs.readJsonSync('./menu/hisn_almuslim.json')
      let key = Object.keys(hisn_almuslim_json);
      let msg = 'من فضلك قم بإرسال رقم الدعاء او الذكر من القائمة التالية ✉️\n\n'
      let number = 1

      for (let lop of key) {

        msg += `${number++}- ${lop}\n`

      }

      msg += '\n\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.sendMessage(from, { text: msg }, { quoted: id }).catch((error) => Error(error));

    }

    else if (body === 'dbjson') {

      await client.sendMessage(from, { document: './db/group_user.json', fileName: 'group_user.json' }, { quoted: id }).catch((error) => Error(error));
      await client.sendMessage(from, { document: './db/new_user.json', fileName: 'new_user.json' }, { quoted: id }).catch((error) => Error(error));
      await client.sendMessage(from, { document: './db/GroupsMenu.json', fileName: 'GroupsMenu.json' }, { quoted: id }).catch((error) => Error(error));

    }

    else if (!group_user.includes(from) && isGroup && from !== await client.user.id) {

      group_user.push(from)
      fs.writeJsonSync('./db/group_user.json', group_user)

    }

    else if (!new_user.includes(from) && !isGroup && from !== await client.user.id) {


      //  let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
      //  mesg += 'من فضلك قم بكتابة *رقم* الخدمة, ولمعرفة خدمات البوت أرسل كلمة خدمة ✉️'

      new_user.push(from)
      fs.writeJsonSync('./db/new_user.json', new_user)
      //  await client.sendMessage(from, { text: mesg }).catch((error) => Error(error));

    }

  }

};

module.exports = {
  menu: menu
}