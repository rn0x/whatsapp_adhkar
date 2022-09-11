const { launch } = require('puppeteer');
const moment_hijri = require('moment-hijri');
const CrateHtml = require('./CrateHtml.js');
const css = require('./css.js');

/**
 * @example 

import Hijri_calendar from '@rn0x/hijri_calendar'

let filename = './example.png'
let title = 'أذكار ' 
let text = 'اللّهم اغفر لي، وإهدني، وأرزقني، وعافني، أعوذ بالله من ضيق المقام يوم القيامة'


* await Hijri_calendar(title, text, filename).then(e => {
*     console.log(e); // return image path
* });

or

let calendar = await Hijri_calendar(title, text, filename);

console.log(calendar);


 * @param {string} title - العنوان
 * @param {string} text - النص
 * @param {string} filename - مسار حفظ الصورة
 * @returns {string} - return image path
 **/

module.exports = async function Hijri_calendar(title, text, filename) {

    let browser = await launch();
    let page = await browser.newPage();
    let today = moment_hijri().locale('ar-SA').format('dddd'); // اليوم
    let Hijri = moment_hijri().locale('ar-SA').format('iD/iMMMM/iYYYY'); // التاريخ الهجري
    let Gregorian = moment_hijri().locale('ar-SA').format('LL'); // التاريخ الميلادي
    let Html = CrateHtml(today, Hijri, Gregorian, title, text); // return code html
    await page.setViewport({ width: 800, height: 100 });
    await page.setContent(Html, {
        waitUntil: 'load',
        timeout: 0
    }); // file index.html || code html 
    await page.addStyleTag({ content: css() }); // file css
    await page.screenshot({ path: filename, fullPage: true });
    await browser.close();
    return filename
}