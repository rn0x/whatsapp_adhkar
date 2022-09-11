const returnMenu = require('../lib/returnMenu.js');
const fs = require('fs-extra');
const Error = require('../lib/error.js');
const text_menu_quran = require('./text_menu_quran.js');

const quran_menu = {

    async exec({ from, client, body, id }) {

        if (body === '1') {

            returnMenu(from, 10)
            let text_menu = text_menu_quran('عبدالباسط عبدالصمد');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '2') {

            returnMenu(from, 11)
            let text_menu = text_menu_quran('عبدالله الكندري');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '3') {

            returnMenu(from, 12)
            let text_menu = text_menu_quran('عبدالله المطرود');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '4') {

            returnMenu(from, 13)
            let text_menu = text_menu_quran('عبدالرحمن العوسي');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '5') {

            returnMenu(from, 14)
            let text_menu = text_menu_quran('شيخ أبو بكر الشاطري');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '6') {

            returnMenu(from, 15)
            let text_menu = text_menu_quran('فارس عباد');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '7') {

            returnMenu(from, 16)
            let text_menu = text_menu_quran('إدريس أبكر');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '8') {

            returnMenu(from, 17)
            let text_menu = text_menu_quran('خالد الجليل');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '9') {

            returnMenu(from, 18)
            let text_menu = text_menu_quran('ماهر المعيقلي');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '10') {

            returnMenu(from, 19)
            let text_menu = text_menu_quran('محمود علي البنا');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '11') {

            returnMenu(from, 20)
            let text_menu = text_menu_quran('محمود خليل الحصري');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '12') {

            returnMenu(from, 21)
            let text_menu = text_menu_quran('محمد صديق المنشاوي');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '13') {

            returnMenu(from, 22)
            let text_menu = text_menu_quran('محمد اللحيدان');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '14') {

            returnMenu(from, 23)
            let text_menu = text_menu_quran('ناصر القطامي');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '15') {

            returnMenu(from, 24)
            let text_menu = text_menu_quran('سعد الغامدي');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '16') {

            returnMenu(from, 25)
            let text_menu = text_menu_quran('صلاح بو خاطر');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '17') {

            returnMenu(from, 26)
            let text_menu = text_menu_quran('وديع اليمني');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '18') {

            returnMenu(from, 27)
            let text_menu = text_menu_quran('ياسر الدوسري');
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: text_menu }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

    }

}

module.exports = {
    quran_menu: quran_menu
}