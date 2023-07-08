import fs from 'fs-extra';
import path from 'path';
import { launch } from 'puppeteer';
import crateHtml from './crateHtml.js';
import system_distros from "../system_distros.js";


export default async function screenshot({ quran: quran, tafser1: tafser1, tafser2: tafser2, english: english, name: name, username: username, filename: filename }) {

    await crateHtml({ quran: quran, tafser1: tafser1, tafser2: tafser2, english: english, name: name, username: username }).then(async () => {

        const system = await system_distros();
        let __dirname = path.resolve();
        let config = fs.readJSONSync(path.join(__dirname, './config.json'));
        let browser = await launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            executablePath: process.platform === "win32" || process.platform === "win64" ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" : process.platform === "linux" && system?.id !== 'alpine' ? "/usr/bin/google-chrome-stable" : process.platform === "darwin" ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" : config?.executablePath
        }).catch(error => console.log(error));
        let page = await browser.newPage();
        let html = `file:${path.join(__dirname, './module/searchQuran/index.html')}`;
        await page?.goto(html, { waitUntil: 'load' });
        await page?.setViewport({ width: 900, height: 200 });
        await page?.screenshot({ path: filename, fullPage: true });
        await browser?.close();

    });

    return {
        filename: filename
    }

}