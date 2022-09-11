const fs = require('fs-extra');
const path = require('path');

module.exports = function CrateHtml(today, Hijri, Gregorian, title, text) {
	
    let __dirname = path.resolve();
    let logo = fs.readFileSync(`${__dirname}/lib/Hijri_calendar/image/logo.png`);
    let html = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <p id="Calendar_top">التقويم الهجري</p>
        <div id="date">
            <p id="today">${today}</p>
            <div id="data_block">
                <p>${Hijri}</p>
                <p>${Gregorian}</p>
            </div>
        </div>
        <div id="d3a">
            <p id="d3a_top">${title}</p>
            <p id="d3a_text">${text}</p>
        </div>
        <div id="bottom">
            <p id="telegram">Telegram : @tqw24h</p>
            <img id="logo" src="data:image/png;base64, ${logo.toString('base64')}">
        </div>
    </body>
    </html>`
    return html
}