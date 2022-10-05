import path from 'path';
import { launch } from 'puppeteer';
import crateHtml from './crateHtml.js';

export default async function screenshot({ quran: quran, tafser1: tafser1, tafser2: tafser2, english: english, name: name, username: username, filename: filename }) {

    await crateHtml({ quran: quran, tafser1: tafser1, tafser2: tafser2, english: english, name: name, username: username }).then(async () => {

        let __dirname = path.resolve();
        let browser = await launch({
            executablePath: process.platform === "win32" || process.platform === "win64" ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" : process.platform === "linux" ? "/usr/bin/google-chrome-stable" : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        });
        let page = await browser.newPage();
        let html = `file:${path.join(__dirname, './module/searchQuran/index.html')}`;
        await page.goto(html, { waitUntil: 'load' });
        await page.setViewport({ width: 900, height: 200 });
        await page.screenshot({ path: filename, fullPage: true });
        await browser.close();

    });

    return {
        filename: filename
    }

}