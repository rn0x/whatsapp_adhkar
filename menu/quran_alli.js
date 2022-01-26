import MenuNmber from '../lib/MenuNmber.js';
import { qurantext } from './qurantext.js';

export const quran_alli = {

    async exec({ from, client, body, id }) {



        switch (body) {

            case 'الفاتحة':
            case '1':

                await client.reply(from, qurantext.q1, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/001.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));

                break;
            case 'البقرة':
            case '2':

                let msg_2 = 'لايمكن إرسال المقطع الصوتي لان حجمة كبير جداً !\n'
                msg_2 += '*يمكن تحميله من خلال الرابط التالي :*\n\n'
                msg_2 +='https://server2.altaqwaa.org/Quran-mp3/Ali_Jaber/mp3/002.mp3'
                await client.reply(from, qurantext.q2, id).catch((erro) => console.log(erro));
                await client.reply(from, msg_2, id).catch((erro) => console.log(erro));
                break;
            case 'آل عمران':
            case '3':

                let msg_3 = 'لايمكن إرسال المقطع الصوتي لان حجمة كبير جداً !\n'
                msg_3 += '*يمكن تحميله من خلال الرابط التالي :*\n\n'
                msg_3 +='https://server2.altaqwaa.org/Quran-mp3/Ali_Jaber/mp3/003.mp3'
                await client.reply(from, qurantext.q3, id).catch((erro) => console.log(erro));
                await client.reply(from, msg_3, id).catch((erro) => console.log(erro));
                break;
            case 'النساء':
            case '4':

                await client.reply(from, qurantext.q4, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/004.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المائدة':
            case '5':

                await client.reply(from, qurantext.q5, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/005.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الأنعام':
            case '6':

                await client.reply(from, qurantext.q6, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/006.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الأعراف':
            case '7':

                await client.reply(from, qurantext.q7, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/007.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الأنفال':
            case '8':

                await client.reply(from, qurantext.q8, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/008.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'التوبة':
            case '9':

                await client.reply(from, qurantext.q9, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/009.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'يونس':
            case '10':

                await client.reply(from, qurantext.q10, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/010.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'هود':
            case '11':

                await client.reply(from, qurantext.q11, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/011.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'يوسف':
            case '12':

                await client.reply(from, qurantext.q12, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/012.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الرعد':
            case '13':

                await client.reply(from, qurantext.q13, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/013.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'إبراهيم':
            case '14':

                await client.reply(from, qurantext.q14, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/014.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الحجر':
            case '15':

                await client.reply(from, qurantext.q15, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/015.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'النحل':
            case '16':

                await client.reply(from, qurantext.q16, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/016.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الإسراء':
            case '17':

                await client.reply(from, qurantext.q17, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/017.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الكهف':
            case '18':

                await client.reply(from, qurantext.q18, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/018.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'مريم':
            case '19':

                await client.reply(from, qurantext.q19, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/019.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'طه':
            case '20':

                await client.reply(from, qurantext.q20, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/020.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الأنبياء':
            case '21':

                await client.reply(from, qurantext.q21, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/021.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الحج':
            case '22':

                await client.reply(from, qurantext.q22, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/022.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المؤمنون':
            case '23':

                await client.reply(from, qurantext.q23, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/023.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'النور':
            case '24':

                await client.reply(from, qurantext.q24, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/024.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الفرقان':
            case '25':

                await client.reply(from, qurantext.q25, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/025.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الشعراء':
            case '26':

                await client.reply(from, qurantext.q26, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/026.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'النمل':
            case '27':

                await client.reply(from, qurantext.q27, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/027.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'القصص':
            case '28':

                await client.reply(from, qurantext.q28, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/028.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'العنكبوت':
            case '29':

                await client.reply(from, qurantext.q29, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/029.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الروم':
            case '30':
                await client.reply(from, qurantext.q30, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/030.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'لقمان':
            case '31':

                await client.reply(from, qurantext.q31, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/031.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'السجدة':
            case '32':

                await client.reply(from, qurantext.q32, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/032.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الأحزاب':
            case '33':

                await client.reply(from, qurantext.q33, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/033.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'سبأ':
            case '34':

                await client.reply(from, qurantext.q34, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/034.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'فاطر':
            case '35':

                await client.reply(from, qurantext.q35, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/035.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'يس':
            case '36':

                await client.reply(from, qurantext.q36, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/036.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الصافات':
            case '37':

                await client.reply(from, qurantext.q37, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/037.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'ص':
            case '38':

                await client.reply(from, qurantext.q38, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/038.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الزمر':
            case '39':

                await client.reply(from, qurantext.q39, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/039.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'غافر':
            case '40':

                await client.reply(from, qurantext.q40, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/040.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'فصلت':
            case '41':

                await client.reply(from, qurantext.q41, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/041.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الشورى':
            case '42':

                await client.reply(from, qurantext.q42, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/042.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الزخرف':
            case '43':

                await client.reply(from, qurantext.q43, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/043.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الدخان':
            case '44':

                await client.reply(from, qurantext.q44, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/044.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الجاثية':
            case '45':

                await client.reply(from, qurantext.q45, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/045.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الأحقاف':
            case '46':

                await client.reply(from, qurantext.q46, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/046.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'محمد':
            case '47':

                await client.reply(from, qurantext.q47, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/047.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الفتح':
            case '48':

                await client.reply(from, qurantext.q48, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/048.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الحجرات':
            case '49':

                await client.reply(from, qurantext.q49, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/049.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'ق':
            case '50':

                await client.reply(from, qurantext.q50, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/050.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الذاريات':
            case '51':

                await client.reply(from, qurantext.q51, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/051.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الطور':
            case '52':

                await client.reply(from, qurantext.q52, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/052.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'النجم':
            case '53':


                await client.reply(from, qurantext.q53, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/053.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'القمر':
            case '54':

                await client.reply(from, qurantext.q54, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/054.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الرحمن':
            case '55':

                await client.reply(from, qurantext.q55, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/055.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الواقعة':
            case '56':

                await client.reply(from, qurantext.q56, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/056.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الحديد':
            case '57':

                await client.reply(from, qurantext.q57, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/057.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المجادلة':
            case '58':

                await client.reply(from, qurantext.q58, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/058.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الحشر':
            case '59':

                await client.reply(from, qurantext.q59, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/059.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الممتحنة':
            case '60':

                await client.reply(from, qurantext.q60, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/060.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الصف':
            case '61':

                await client.reply(from, qurantext.q61, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/061.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الجمعة':
            case '62':

                await client.reply(from, qurantext.q62, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/062.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المنافقون':
            case '63':

                await client.reply(from, qurantext.q63, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/063.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'التغابن':
            case '64':

                await client.reply(from, qurantext.q64, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/064.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الطلاق':
            case '65':

                await client.reply(from, qurantext.q65, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/065.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'التحريم':
            case '66':

                await client.reply(from, qurantext.q66, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/066.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الملك':
            case '67':

                await client.reply(from, qurantext.q67, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/067.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'القلم':
            case '68':

                await client.reply(from, qurantext.q68, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/068.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الحاقة':
            case '69':

                await client.reply(from, qurantext.q69, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/069.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المعارج':
            case '70':

                await client.reply(from, qurantext.q70, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/070.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'نوح':
            case '71':

                await client.reply(from, qurantext.q71, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/071.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الجن':
            case '72':

                await client.reply(from, qurantext.q72, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/072.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المزمل':
            case '73':

                await client.reply(from, qurantext.q73, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/073.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المدثر':
            case '74':

                await client.reply(from, qurantext.q74, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/074.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'القيامة':
            case '75':

                await client.reply(from, qurantext.q75, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/075.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الإنسان':
            case '76':

                await client.reply(from, qurantext.q76, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/076.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المرسلات':
            case '77':

                await client.reply(from, qurantext.q77, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/077.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'النبأ':
            case '78':

                await client.reply(from, qurantext.q78, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/078.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'النازعات':
            case '79':

                await client.reply(from, qurantext.q79, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/079.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'عبس':
            case '80':

                await client.reply(from, qurantext.q80, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/080.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'التكوير':
            case '81':

                await client.reply(from, qurantext.q81, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/081.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الانفطار':
            case '82':

                await client.reply(from, qurantext.q82, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/082.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المطففين':
            case '83':

                await client.reply(from, qurantext.q83, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/083.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الانشقاق':
            case '84':

                await client.reply(from, qurantext.q84, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/084.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'البروج':
            case '85':

                await client.reply(from, qurantext.q85, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/085.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الطارق':
            case '86':

                await client.reply(from, qurantext.q86, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/086.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الأعلى':
            case '87':

                await client.reply(from, qurantext.q87, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/087.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الغاشية':
            case '88':

                await client.reply(from, qurantext.q88, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/088.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الفجر':
            case '89':

                await client.reply(from, qurantext.q89, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/089.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'البلد':
            case '90':

                await client.reply(from, qurantext.q90, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/090.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الشمس':
            case '91':

                await client.reply(from, qurantext.q91, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/091.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الليل':
            case '92':

                await client.reply(from, qurantext.q92, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/092.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الضحى':
            case '93':

                await client.reply(from, qurantext.q93, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/093.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الشرح':
            case '94':

                await client.reply(from, qurantext.q94, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/094.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'التين':
            case '95':

                await client.reply(from, qurantext.q95, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/095.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'العلق':
            case '96':

                await client.reply(from, qurantext.q96, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/096.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'القدر':
            case '97':

                await client.reply(from, qurantext.q97, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/097.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'البينة':
            case '98':

                await client.reply(from, qurantext.q98, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/098.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الزلزلة':
            case '99':

                await client.reply(from, qurantext.q99, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/099.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'العاديات':
            case '100':

                await client.reply(from, qurantext.q100, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/100.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'القارعة':
            case '101':

                await client.reply(from, qurantext.q101, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/101.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'التكاثر':
            case '102':

                await client.reply(from, qurantext.q102, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/102.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'العصر':
            case '103':

                await client.reply(from, qurantext.q103, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/103.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الهمزة':
            case '104':

                await client.reply(from, qurantext.q104, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/104.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الفيل':
            case '105':

                await client.reply(from, qurantext.q105, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/105.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'قريش':
            case '106':

                await client.reply(from, qurantext.q106, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/106.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الماعون':
            case '107':

                await client.reply(from, qurantext.q107, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/107.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الكوثر':
            case '108':

                await client.reply(from, qurantext.q108, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/108.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الكافرون':
            case '109':

                await client.reply(from, qurantext.q109, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/109.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'النصر':
            case '110':

                await client.reply(from, qurantext.q110, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/110.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'المسد':
            case '111':

                await client.reply(from, qurantext.q111, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/111.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الإخلاص':
            case '112':

                await client.reply(from, qurantext.q112, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/112.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الفلق':
            case '113':

                await client.reply(from, qurantext.q113, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/113.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;
            case 'الناس':
            case '114':

                await client.reply(from, qurantext.q114, id).catch((erro) => console.log(erro));
                await client.sendFile(from, "http://bot.altaqwaa.org/media/quran_mp3/quran_alli/114.mp3", 'file.mp3', 'file.mp3', id).catch((erro) => console.log(erro));
                break;


        }

        if (body === "*") {

            MenuNmber(from, 1)

            let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
            quran_menu += '1- أدريس أبكر \n'
            quran_menu += '2- ماهر المعيقلي \n'
            quran_menu += '3- عبدالله الموسى \n'
            quran_menu += '4- علي جابر \n'
            quran_menu += '5- عبدالرحمن السديس \n'
            quran_menu += '6- خالد الجليل \n\n\n'
            quran_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await client.reply(from, quran_menu, id).catch((erro) => console.log(erro));

        }

    }
};