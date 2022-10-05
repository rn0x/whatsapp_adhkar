import fs from 'fs-extra';
import path from 'path';

export default async function crateHtml({ quran: quran, tafser1: tafser1, tafser2: tafser2, english: english, name: name, username: username }) {


    let __dirname = path.resolve();
    let codeHtml = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    
        <img src="./image/logo.png" id="logo">
    
        <div id="Content">
    
            <p id="quran">${quran}</p>
            <div class="Content_q">
                <p class="Content_q_title">تفسير الجلالين</p>
                <p class="Content_q_text">${tafser1}</p>
            </div>
    
            <div class="Content_q">
                <p class="Content_q_title">تفسير الميسر</p>
                <p class="Content_q_text">${tafser2}</p>
            </div>
    
            <div class="Content_q">
                <p class="Content_q_title">شرح الآيات باللغة الإنجليزية</p>
                <p class="Content_q_text" id="Content_q_en">${english}</p>
            </div>
    
        </div>
    
        <div class="bottom">
            <p>${name}</p>
            <p>${username}</p>
        </div>
    
    
    </body>
    
    </html>`

    fs.writeFileSync(path.join(__dirname, './module/searchQuran/index.html'), codeHtml);

}