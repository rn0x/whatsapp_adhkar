import fs from 'fs-extra';
import path from "path";

export default async function fixClient(__dirname) {
    const filePath = path.join(__dirname, 'node_modules', 'whatsapp-web.js', 'src', 'Client.js');
    const lineNum = 175;
    const newLine = 'const INTRO_IMG_SELECTOR = \'div[role=\\\'textbox\\\']\'; //\'[data-icon=\\\'chat\\\']\';';

    try {
        if (await checkFileExists(filePath)) {
            const data = await fs.readFile(filePath, 'utf8');
            if (!data.includes(newLine)) {
                await modifyFile(filePath, lineNum, newLine);
                console.log('تم تعديل الملف بنجاح!');
                console.log('قم بإعادة تشغيل البوت ... npm start');
                process.exit(1)
            }
        } else {
            console.log('الملف غير موجود');
        }
    } catch (error) {
        console.error('حدث خطأ:', error);
    }
}

async function checkFileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function modifyFile(filePath, lineNum, newLine) {
    const data = await fs.readFile(filePath, 'utf8');

    let lines = data.split('\n');
    lines[lineNum - 1] = newLine;

    await fs.writeFile(filePath, lines.join('\n'), 'utf8');
}