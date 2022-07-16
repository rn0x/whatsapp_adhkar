const Error = require('../lib/error.js');

const albitaqat = {

    async exec({ from, client, body, id }) {

        switch (body) {

            case 'الفاتحة':
            case '1':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/001.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/001.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));

                break;
            case 'البقرة':
            case '2':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/002.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/002.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'آل عمران':
            case '3':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/003.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/003.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'النساء':
            case '4':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/004.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/004.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المائدة':
            case '5':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/005.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/005.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الأنعام':
            case '6':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/006.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/006.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الأعراف':
            case '7':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/007.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/007.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الأنفال':
            case '8':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/008.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/008.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'التوبة':
            case '9':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/009.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/009.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'يونس':
            case '10':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/010.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/010.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'هود':
            case '11':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/011.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/011.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'يوسف':
            case '12':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/012.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/012.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الرعد':
            case '13':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/013.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/013.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'إبراهيم':
            case '14':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/014.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/014.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الحجر':
            case '15':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/015.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/015.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'النحل':
            case '16':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/016.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/016.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الإسراء':
            case '17':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/017.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/017.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الكهف':
            case '18':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/018.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/018.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'مريم':
            case '19':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/019.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/019.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'طه':
            case '20':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/020.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/020.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الأنبياء':
            case '21':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/021.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/021.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الحج':
            case '22':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/022.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/022.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المؤمنون':
            case '23':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/023.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/023.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'النور':
            case '24':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/024.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/024.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الفرقان':
            case '25':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/025.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/025.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الشعراء':
            case '26':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/026.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/026.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'النمل':
            case '27':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/027.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/027.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'القصص':
            case '28':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/028.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/028.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'العنكبوت':
            case '29':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/029.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/029.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الروم':
            case '30':
                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/030.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/030.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'لقمان':
            case '31':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/031.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/031.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'السجدة':
            case '32':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/032.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/032.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الأحزاب':
            case '33':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/033.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/033.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'سبأ':
            case '34':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/034.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/034.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'فاطر':
            case '35':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/035.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/035.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'يس':
            case '36':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/036.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/036.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الصافات':
            case '37':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/037.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/037.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'ص':
            case '38':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/038.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/038.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الزمر':
            case '39':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/039.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/039.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'غافر':
            case '40':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/040.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/040.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'فصلت':
            case '41':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/041.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/041.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الشورى':
            case '42':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/042.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/042.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الزخرف':
            case '43':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/043.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/043.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الدخان':
            case '44':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/044.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/044.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الجاثية':
            case '45':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/045.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/045.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الأحقاف':
            case '46':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/046.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/046.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'محمد':
            case '47':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/047.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/047.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الفتح':
            case '48':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/048.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/048.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الحجرات':
            case '49':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/049.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/049.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'ق':
            case '50':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/050.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/050.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الذاريات':
            case '51':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/051.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/051.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الطور':
            case '52':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/052.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/052.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'النجم':
            case '53':


                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/053.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/053.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'القمر':
            case '54':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/054.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/054.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الرحمن':
            case '55':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/055.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/055.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الواقعة':
            case '56':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/056.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/056.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الحديد':
            case '57':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/057.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/057.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المجادلة':
            case '58':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/058.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/058.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الحشر':
            case '59':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/059.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/059.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الممتحنة':
            case '60':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/060.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/060.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الصف':
            case '61':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/061.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/061.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الجمعة':
            case '62':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/062.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/062.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المنافقون':
            case '63':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/063.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/063.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'التغابن':
            case '64':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/064.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/064.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الطلاق':
            case '65':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/065.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/065.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'التحريم':
            case '66':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/066.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/066.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الملك':
            case '67':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/067.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/067.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'القلم':
            case '68':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/068.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/068.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الحاقة':
            case '69':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/069.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/069.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المعارج':
            case '70':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/070.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/070.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'نوح':
            case '71':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/071.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/071.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الجن':
            case '72':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/072.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/072.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المزمل':
            case '73':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/073.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/073.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المدثر':
            case '74':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/074.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/074.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'القيامة':
            case '75':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/075.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/075.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الإنسان':
            case '76':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/076.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/076.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المرسلات':
            case '77':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/077.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/077.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'النبأ':
            case '78':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/078.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/078.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'النازعات':
            case '79':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/079.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/079.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'عبس':
            case '80':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/080.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/080.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'التكوير':
            case '81':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/081.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/081.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الانفطار':
            case '82':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/082.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/082.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المطففين':
            case '83':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/083.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/083.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الانشقاق':
            case '84':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/084.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/084.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'البروج':
            case '85':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/085.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/085.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الطارق':
            case '86':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/086.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/086.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الأعلى':
            case '87':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/087.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/087.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الغاشية':
            case '88':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/088.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/088.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الفجر':
            case '89':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/089.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/089.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'البلد':
            case '90':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/090.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/090.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الشمس':
            case '91':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/091.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/091.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الليل':
            case '92':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/092.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/092.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الضحى':
            case '93':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/093.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/093.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الشرح':
            case '94':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/094.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/094.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'التين':
            case '95':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/095.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/095.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'العلق':
            case '96':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/096.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/096.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'القدر':
            case '97':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/097.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/097.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'البينة':
            case '98':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/098.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/098.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الزلزلة':
            case '99':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/099.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/099.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'العاديات':
            case '100':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/100.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/100.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'القارعة':
            case '101':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/101.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/101.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'التكاثر':
            case '102':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/102.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/102.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'العصر':
            case '103':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/103.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/103.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الهمزة':
            case '104':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/104.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/104.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الفيل':
            case '105':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/105.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/105.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'قريش':
            case '106':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/106.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/106.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الماعون':
            case '107':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/107.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/107.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الكوثر':
            case '108':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/108.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/108.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الكافرون':
            case '109':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/109.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/109.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'النصر':
            case '110':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/110.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/110.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'المسد':
            case '111':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/111.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/111.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الإخلاص':
            case '112':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/112.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/112.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الفلق':
            case '113':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/113.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/113.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;
            case 'الناس':
            case '114':

                await client.sendMessage(from, { image: { url: "http://bot.altaqwaa.org/media/albitaqat/images/114.jpg" } }, { quoted: id }).catch((error) => Error(error));
                await client.sendMessage(from, { audio: { url: "http://bot.altaqwaa.org/media/albitaqat/mp3/114.mp3" }, mimetype: 'audio/mp4', ptt: true }, { quoted: id }).catch((error) => Error(error));
                break;


        }

    }
};

module.exports = {
    albitaqat: albitaqat
}