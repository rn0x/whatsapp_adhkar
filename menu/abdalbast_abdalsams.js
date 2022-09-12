const returnMenu = require('../lib/returnMenu.js');
const Error = require('../lib/error.js');


const abdalbast_abdalsams = {

    async exec({ from, client, body, id }) {

        if (body === 'الفاتحة'|| body === '1' || body === '١' ) { 

            let message = 'إسم السورة بالعربي: الفاتحة \n'
            message += 'إسم السورة بالإنجليزي: The Opening \n'
            message += 'رقم السورة: 1 \n'
            message += 'عدد الآيات: 7 \n'
            message += 'عدد الكلمات: 139 \n'
            message += 'عدد الحروف: 139 \n'
            message += 'مكان النزول: مكية'

            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/001.mp3" }, fileName: '001.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
            
        
        }

        else if (body === 'البقرة' || body === '2' || body === '٢') { 

            let message = 'إسم السورة بالعربي: البقرة \n'
            message += 'إسم السورة بالإنجليزي: The Cow \n'
            message += 'رقم السورة: 2 \n'
            message += 'عدد الآيات: 286 \n'
            message += 'عدد الكلمات: 6144 \n'
            message += 'عدد الحروف: 25613 \n'
            message += 'مكان النزول: مدنية'

            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/002.mp3" }, fileName: '002.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'آل عمران' || body === '3' || body === '٣' ) {

            let message = 'إسم السورة بالعربي: آل عمران \n'
            message += 'إسم السورة بالإنجليزي: The Family of Imraan \n'
            message += 'رقم السورة: 3 \n'
            message += 'عدد الآيات: 200 \n'
            message += 'عدد الكلمات: 3503 \n'
            message += 'عدد الحروف: 14605 \n'
            message += 'مكان النزول: مدنية'

            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/003.mp3" }, fileName: '003.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'النساء' || body === '4' || body === '٤') {

            let message = 'إسم السورة بالعربي: النساء \n'
            message += 'إسم السورة بالإنجليزي: The Women \n'
            message += 'رقم السورة: 4 \n'
            message += 'عدد الآيات: 176 \n'
            message += 'عدد الكلمات: 3745 \n'
            message += 'عدد الحروف: 16030 \n'
            message += 'مكان النزول: مدنية'

            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/004.mp3" }, fileName: '004.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المائدة' || body === '5' || body === '٥') {

            let message = 'إسم السورة بالعربي: المائدة \n'
            message += 'إسم السورة بالإنجليزي: The Table \n'
            message += 'رقم السورة: 5 \n'
            message += 'عدد الآيات: 120 \n'
            message += 'عدد الكلمات: 2837 \n'
            message += 'عدد الحروف: 11892 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/005.mp3" }, fileName: '005.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الأنعام' || body === '6' || body === '٦') {

            let message = 'إسم السورة بالعربي: الأنعام \n'
            message += 'إسم السورة بالإنجليزي: The Cattle \n'
            message += 'رقم السورة: 6 \n'
            message += 'عدد الآيات: 165 \n'
            message += 'عدد الكلمات: 3055 \n'
            message += 'عدد الحروف: 12418 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/006.mp3" }, fileName: '006.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الأعراف' || body === '7'|| body === '٧') {

            let message = 'إسم السورة بالعربي: الأعراف \n'
            message += 'إسم السورة بالإنجليزي: The Heights \n'
            message += 'رقم السورة: 7 \n'
            message += 'عدد الآيات: 206 \n'
            message += 'عدد الكلمات: 3344 \n'
            message += 'عدد الحروف: 14071 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/007.mp3" }, fileName: '007.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الأنفال' || body === '8' || body === '٨') {

            let message = 'إسم السورة بالعربي: الأنفال \n'
            message += 'إسم السورة بالإنجليزي: The Spoils of War \n'
            message += 'رقم السورة: 8 \n'
            message += 'عدد الآيات: 75 \n'
            message += 'عدد الكلمات: 1243 \n'
            message += 'عدد الحروف: 5299 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/008.mp3" }, fileName: '008.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'التوبة' || body === '9' || body === '٩') {

            let message = 'إسم السورة بالعربي: التوبة \n'
            message += 'إسم السورة بالإنجليزي: The Repentance \n'
            message += 'رقم السورة: 9 \n'
            message += 'عدد الآيات: 129 \n'
            message += 'عدد الكلمات: 2506 \n'
            message += 'عدد الحروف: 10873 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/009.mp3" }, fileName: '009.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'يونس' || body === '10' || body === '١٠') {

            let message = 'إسم السورة بالعربي: يونس \n'
            message += 'إسم السورة بالإنجليزي: Jonas \n'
            message += 'رقم السورة: 10 \n'
            message += 'عدد الآيات: 109 \n'
            message += 'عدد الكلمات: 1841 \n'
            message += 'عدد الحروف: 7425 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/010.mp3" }, fileName: '010.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'هود' || body === '11' || body === '١١') {

            let message = 'إسم السورة بالعربي: هود \n'
            message += 'إسم السورة بالإنجليزي: Hud \n'
            message += 'رقم السورة: 11 \n'
            message += 'عدد الآيات: 123 \n'
            message += 'عدد الكلمات: 1947 \n'
            message += 'عدد الحروف: 7633 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/011.mp3" }, fileName: '011.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'يوسف' || body === '12' || body === '١٢') {

            let message = 'إسم السورة بالعربي: يوسف \n'
            message += 'إسم السورة بالإنجليزي: Joseph \n'
            message += 'رقم السورة: 12 \n'
            message += 'عدد الآيات: 111 \n'
            message += 'عدد الكلمات: 1795 \n'
            message += 'عدد الحروف: 7125 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/012.mp3" }, fileName: '012.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الرعد' || body === '13' || body === '١٣') {

            let message = 'إسم السورة بالعربي: الرعد \n'
            message += 'إسم السورة بالإنجليزي: The Thunder \n'
            message += 'رقم السورة: 13 \n'
            message += 'عدد الآيات: 43 \n'
            message += 'عدد الكلمات: 854 \n'
            message += 'عدد الحروف: 3450 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/013.mp3" }, fileName: '013.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'إبراهيم' || body === '14' || body === '١٤') {

            let message = 'إسم السورة بالعربي: إبراهيم \n'
            message += 'إسم السورة بالإنجليزي: Abraham \n'
            message += 'رقم السورة: 14 \n'
            message += 'عدد الآيات: 52 \n'
            message += 'عدد الكلمات: 831 \n'
            message += 'عدد الحروف: 3461 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/014.mp3" }, fileName: '014.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الحجر' || body === '15' || body === '١٥') {

            let message = 'إسم السورة بالعربي: الحجر \n'
            message += 'إسم السورة بالإنجليزي: The Rock \n'
            message += 'رقم السورة: 15 \n'
            message += 'عدد الآيات: 99 \n'
            message += 'عدد الكلمات: 658 \n'
            message += 'عدد الحروف: 2797 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/015.mp3" }, fileName: '015.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'النحل' || body === '16' || body === '١٦') {

            let message = 'إسم السورة بالعربي: النحل \n'
            message += 'إسم السورة بالإنجليزي: The Bee \n'
            message += 'رقم السورة: 16 \n'
            message += 'عدد الآيات: 128 \n'
            message += 'عدد الكلمات: 1845 \n'
            message += 'عدد الحروف: 7642 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/016.mp3" }, fileName: '016.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الإسراء' || body === '17' || body === '١٧') {

            let message = 'إسم السورة بالعربي: الإسراء \n'
            message += 'إسم السورة بالإنجليزي: The Night Journey \n'
            message += 'رقم السورة: 17 \n'
            message += 'عدد الآيات: 111 \n'
            message += 'عدد الكلمات: 1559 \n'
            message += 'عدد الحروف: 6480 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/017.mp3" }, fileName: '017.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الكهف' || body === '18' || body === '١٩') {

            let message = 'إسم السورة بالعربي: الكهف \n'
            message += 'إسم السورة بالإنجليزي: The Cave \n'
            message += 'رقم السورة: 18 \n'
            message += 'عدد الآيات: 110 \n'
            message += 'عدد الكلمات: 1583 \n'
            message += 'عدد الحروف: 6425 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/018.mp3" }, fileName: '018.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }
        else if (body === 'مريم' || body === '19' || body === '١٩') {

            let message = 'إسم السورة بالعربي: مريم \n'
            message += 'إسم السورة بالإنجليزي: Mary \n'
            message += 'رقم السورة: 19 \n'
            message += 'عدد الآيات: 98 \n'
            message += 'عدد الكلمات: 972 \n'
            message += 'عدد الحروف: 3835 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/019.mp3" }, fileName: '019.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'طه' || body === '20' || body === '٢٠') {

            let message = 'إسم السورة بالعربي: طه \n'
            message += 'إسم السورة بالإنجليزي: Taahaa \n'
            message += 'رقم السورة: 20 \n'
            message += 'عدد الآيات: 135 \n'
            message += 'عدد الكلمات: 1354 \n'
            message += 'عدد الحروف: 5288 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/020.mp3" }, fileName: '020.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الأنبياء' || body === '21' || body === '٢١') {

            let message = 'إسم السورة بالعربي: الأنبياء \n'
            message += 'إسم السورة بالإنجليزي: The Prophets \n'
            message += 'رقم السورة: 21 \n'
            message += 'عدد الآيات: 112 \n'
            message += 'عدد الكلمات: 1174 \n'
            message += 'عدد الحروف: 4925 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/021.mp3" }, fileName: '021.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الحج' || body === '22' || body === '٢٢') {

            let message = 'إسم السورة بالعربي: الحج \n'
            message += 'إسم السورة بالإنجليزي: The Pilgrimage \n'
            message += 'رقم السورة: 22 \n'
            message += 'عدد الآيات: 78 \n'
            message += 'عدد الكلمات: 1279 \n'
            message += 'عدد الحروف: 5196 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/022.mp3" }, fileName: '022.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المؤمنون' || body === '23' || body === '٢٣') {

            let message = 'إسم السورة بالعربي: المؤمنون \n'
            message += 'إسم السورة بالإنجليزي: The Believers \n'
            message += 'رقم السورة: 23 \n'
            message += 'عدد الآيات: 118 \n'
            message += 'عدد الكلمات: 1840 \n'
            message += 'عدد الحروف: 4802 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/023.mp3" }, fileName: '023.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'النور' || body === '24' || body === '٢٤') {

            let message = 'إسم السورة بالعربي: النور \n'
            message += 'إسم السورة بالإنجليزي: The Light \n'
            message += 'رقم السورة: 24 \n'
            message += 'عدد الآيات: 64 \n'
            message += 'عدد الكلمات: 1317 \n'
            message += 'عدد الحروف: 5596 \n'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/024.mp3" }, fileName: '024.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الفرقان' || body === '25' || body === '٢٥') {

            let message = 'إسم السورة بالعربي: الفرقان \n'
            message += 'إسم السورة بالإنجليزي: The Criterion \n'
            message += 'رقم السورة: 25 \n'
            message += 'عدد الآيات: 77 \n'
            message += 'عدد الكلمات: 896 \n'
            message += 'عدد الحروف: 3786 \n'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/025.mp3" }, fileName: '025.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الشعراء' || body === '26' || body === '٢٦') {

            let message = 'إسم السورة بالعربي: الشعراء \n'
            message += 'إسم السورة بالإنجليزي: The Poets \n'
            message += 'رقم السورة: 26 \n'
            message += 'عدد الآيات: 227 \n'
            message += 'عدد الكلمات: 1322 \n'
            message += 'عدد الحروف: 5517 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/026.mp3" }, fileName: '026.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'النمل' || body === '27' || body === '٢٧') {

            let message = 'إسم السورة بالعربي: النمل \n'
            message += 'إسم السورة بالإنجليزي: The Ant \n'
            message += 'رقم السورة: 27 \n'
            message += 'عدد الآيات: 93 \n'
            message += 'عدد الكلمات: 1165 \n'
            message += 'عدد الحروف: 4679 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/027.mp3" }, fileName: '027.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'القصص' || body === '28' || body === '٢٨') {

            let message = 'إسم السورة بالعربي: القصص \n'
            message += 'إسم السورة بالإنجليزي: The Stories \n'
            message += 'رقم السورة: 28 \n'
            message += 'عدد الآيات: 88 \n'
            message += 'عدد الكلمات: 1441 \n'
            message += 'عدد الحروف: 5791 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/028.mp3" }, fileName: '028.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'العنكبوت' || body === '29' || body === '٢٩') {

            let message = 'إسم السورة بالعربي: العنكبوت \n'
            message += 'إسم السورة بالإنجليزي: The Spider \n'
            message += 'رقم السورة: 29 \n'
            message += 'عدد الآيات: 69 \n'
            message += 'عدد الكلمات: 982 \n'
            message += 'عدد الحروف: 4200 \n'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/029.mp3" }, fileName: '029.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الروم' || body === '30' || body === '٣٠') {

            let message = 'إسم السورة بالعربي: الروم \n'
            message += 'إسم السورة بالإنجليزي: The Romans \n'
            message += 'رقم السورة: 30 \n'
            message += 'عدد الآيات: 60 \n'
            message += 'عدد الكلمات: 819 \n'
            message += 'عدد الحروف: 3388 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/030.mp3" }, fileName: '030.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'لقمان' || body === '31' || body === '٣١') {

            let message = 'إسم السورة بالعربي: لقمان \n'
            message += 'إسم السورة بالإنجليزي: Luqman \n'
            message += 'رقم السورة: 31 \n'
            message += 'عدد الآيات: 34 \n'
            message += 'عدد الكلمات: 550 \n'
            message += 'عدد الحروف: 2121 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/031.mp3" }, fileName: '031.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'السجدة' || body === '32' || body === '٣٢') {

            let message = 'إسم السورة بالعربي: السجدة \n'
            message += 'إسم السورة بالإنجليزي: The Prostration \n'
            message += 'رقم السورة: 32 \n'
            message += 'عدد الآيات: 30 \n'
            message += 'عدد الكلمات: 374 \n'
            message += 'عدد الحروف: 1523 \n'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/032.mp3" }, fileName: '032.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الأحزاب' || body === '33' || body === '٣٣') {

            let message = 'إسم السورة بالعربي: الأحزاب \n'
            message += 'إسم السورة بالإنجليزي: The Clans \n'
            message += 'رقم السورة: 33 \n'
            message += 'عدد الآيات: 73 \n'
            message += 'عدد الكلمات: 1303 \n'
            message += 'عدد الحروف: 5618 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/033.mp3" }, fileName: '033.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'سبأ' || body === '34' || body === '٣٤') {

            let message = 'إسم السورة بالعربي: سبأ \n'
            message += 'إسم السورة بالإنجليزي: Sheba \n'
            message += 'رقم السورة: 34 \n'
            message += 'عدد الآيات: 54 \n'
            message += 'عدد الكلمات: 884 \n'
            message += 'عدد الحروف: 3510 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/034.mp3" }, fileName: '034.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'فاطر' || body === '35' || body === '٣٥') {

            let message = 'إسم السورة بالعربي: فاطر \n'
            message += 'إسم السورة بالإنجليزي: The Originator \n'
            message += 'رقم السورة: 35 \n'
            message += 'عدد الآيات: 45 \n'
            message += 'عدد الكلمات: 780 \n'
            message += 'عدد الحروف: 3159 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/035.mp3" }, fileName: '035.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'يس' || body === '36' || body === '٣٦') {

            let message = 'إسم السورة بالعربي: يس \n'
            message += 'إسم السورة بالإنجليزي: Yaseen \n'
            message += 'رقم السورة: 36 \n'
            message += 'عدد الآيات: 83 \n'
            message += 'عدد الكلمات: 733 \n'
            message += 'عدد الحروف: 2988 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/036.mp3" }, fileName: '036.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الصافات' || body === '37' || body === '٣٧') {

            let message = 'إسم السورة بالعربي: الصافات \n'
            message += 'إسم السورة بالإنجليزي: Those drawn up in Ranks \n'
            message += 'رقم السورة: 37 \n'
            message += 'عدد الآيات: 182 \n'
            message += 'عدد الكلمات: 865 \n'
            message += 'عدد الحروف: 3790 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/037.mp3" }, fileName: '037.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'ص' || body === '38' || body === '٣٨') {

            let message = 'إسم السورة بالعربي: ص \n'
            message += 'إسم السورة بالإنجليزي: The letter Saad \n'
            message += 'رقم السورة: 38 \n'
            message += 'عدد الآيات: 88 \n'
            message += 'عدد الكلمات: 735 \n'
            message += 'عدد الحروف: 2991 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/038.mp3" }, fileName: '038.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الزمر' || body === '39' || body === '٣٩') {

            let message = 'إسم السورة بالعربي: الزمر \n'
            message += 'إسم السورة بالإنجليزي: The Groups \n'
            message += 'رقم السورة: 39 \n'
            message += 'عدد الآيات: 75 \n'
            message += 'عدد الكلمات: 1177 \n'
            message += 'عدد الحروف: 4741 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/039.mp3" }, fileName: '039.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'غافر' || body === '40' || body === '٤٠') {

            let message = 'إسم السورة بالعربي: غافر \n'
            message += 'إسم السورة بالإنجليزي: The Forgiver \n'
            message += 'رقم السورة: 40 \n'
            message += 'عدد الآيات: 85 \n'
            message += 'عدد الكلمات: 1228 \n'
            message += 'عدد الحروف: 4984 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/040.mp3" }, fileName: '040.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'فصلت' || body === '41' || body === '٤١') {

            let message = 'إسم السورة بالعربي: فصلت \n'
            message += 'إسم السورة بالإنجليزي: Explained in detail \n'
            message += 'رقم السورة: 41 \n'
            message += 'عدد الآيات: 54 \n'
            message += 'عدد الكلمات: 796 \n'
            message += 'عدد الحروف: 3282 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/041.mp3" }, fileName: '041.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الشورى' || body === '42' || body === '٤٢') {

            let message = 'إسم السورة بالعربي: الشورى \n'
            message += 'إسم السورة بالإنجليزي: Consultation \n'
            message += 'رقم السورة: 42 \n'
            message += 'عدد الآيات: 53 \n'
            message += 'عدد الكلمات: 860 \n'
            message += 'عدد الحروف: 3431 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/042.mp3" }, fileName: '042.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الزخرف' || body === '43' || body === '٤٣') {

            let message = 'إسم السورة بالعربي: الزخرف \n'
            message += 'إسم السورة بالإنجليزي: Ornaments of gold \n'
            message += 'رقم السورة: 43 \n'
            message += 'عدد الآيات: 89 \n'
            message += 'عدد الكلمات: 825 \n'
            message += 'عدد الحروف: 3703 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/043.mp3" }, fileName: '043.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الدخان' || body === '44' || body === '٤٤') {

            let message = 'إسم السورة بالعربي: الدخان \n'
            message += 'إسم السورة بالإنجليزي: The Smoke \n'
            message += 'رقم السورة: 44 \n'
            message += 'عدد الآيات: 59 \n'
            message += 'عدد الكلمات: 346 \n'
            message += 'عدد الحروف: 1439 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/044.mp3" }, fileName: '044.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الجاثية' || body === '45' || body === '٤٥') {

            let message = 'إسم السورة بالعربي: الجاثية \n'
            message += 'إسم السورة بالإنجليزي: Crouching \n'
            message += 'رقم السورة: 45 \n'
            message += 'عدد الآيات: 37 \n'
            message += 'عدد الكلمات: 488 \n'
            message += 'عدد الحروف: 2014 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/045.mp3" }, fileName: '045.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الأحقاف' || body === '46' || body === '٤٦') {

            let message = 'إسم السورة بالعربي: الأحقاف \n'
            message += 'إسم السورة بالإنجليزي: The Dunes \n'
            message += 'رقم السورة: 46 \n'
            message += 'عدد الآيات: 35 \n'
            message += 'عدد الكلمات: 646 \n'
            message += 'عدد الحروف: 2602 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/046.mp3" }, fileName: '046.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'محمد' || body === '47' || body === '٤٧') {

            let message = 'إسم السورة بالعربي: محمد \n'
            message += 'إسم السورة بالإنجليزي: Muhammad \n'
            message += 'رقم السورة: 47 \n'
            message += 'عدد الآيات: 38 \n'
            message += 'عدد الكلمات: 542 \n'
            message += 'عدد الحروف: 2360 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/047.mp3" }, fileName: '047.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الفتح' || body === '48' || body === '٤٨') {

            let message = 'إسم السورة بالعربي: الفتح \n'
            message += 'إسم السورة بالإنجليزي: The Victory \n'
            message += 'رقم السورة: 48 \n'
            message += 'عدد الآيات: 29 \n'
            message += 'عدد الكلمات: 560 \n'
            message += 'عدد الحروف: 2456 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/048.mp3" }, fileName: '048.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الحجرات' || body === '49' || body === '٤٩') {

            let message = 'إسم السورة بالعربي: الحجرات \n'
            message += 'إسم السورة بالإنجليزي: The Inner Apartments \n'
            message += 'رقم السورة: 49 \n'
            message += 'عدد الآيات: 18 \n'
            message += 'عدد الكلمات: 353 \n'
            message += 'عدد الحروف: 1493 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/049.mp3" }, fileName: '049.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }


        else if (body === 'ق' || body === '50' || body === '٥٠') {

            let message = 'إسم السورة بالعربي: ق \n'
            message += 'إسم السورة بالإنجليزي: The letter Qaaf \n'
            message += 'رقم السورة: 50 \n'
            message += 'عدد الآيات: 45 \n'
            message += 'عدد الكلمات: 373 \n'
            message += 'عدد الحروف: 1473 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/050.mp3" }, fileName: '050.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الذاريات' || body === '51' || body === '٥١') {

            let message = 'إسم السورة بالعربي: الذاريات \n'
            message += 'إسم السورة بالإنجليزي: The Winnowing Winds \n'
            message += 'رقم السورة: 51 \n'
            message += 'عدد الآيات: 60 \n'
            message += 'عدد الكلمات: 360 \n'
            message += 'عدد الحروف: 1510 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/051.mp3" }, fileName: '051.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الطور' || body === '52' || body === '٥٢') {

            let message = 'إسم السورة بالعربي: الطور \n'
            message += 'إسم السورة بالإنجليزي: The Mount \n'
            message += 'رقم السورة: 52 \n'
            message += 'عدد الآيات: 49 \n'
            message += 'عدد الكلمات: 312 \n'
            message += 'عدد الحروف: 1293 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/052.mp3" }, fileName: '052.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'النجم' || body === '53' || body === '٥٣') {

            let message = 'إسم السورة بالعربي: النجم \n'
            message += 'إسم السورة بالإنجليزي: The Star \n'
            message += 'رقم السورة: 53 \n'
            message += 'عدد الآيات: 62 \n'
            message += 'عدد الكلمات: 359 \n'
            message += 'عدد الحروف: 1405 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/053.mp3" }, fileName: '053.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'القمر' || body === '54' || body === '٥٤') {

            let message = 'إسم السورة بالعربي: القمر \n'
            message += 'إسم السورة بالإنجليزي: The Moon \n'
            message += 'رقم السورة: 54 \n'
            message += 'عدد الآيات: 55 \n'
            message += 'عدد الكلمات: 342 \n'
            message += 'عدد الحروف: 1438 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/054.mp3" }, fileName: '054.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الرحمن' || body === '55' || body === '٥٥') {

            let message = 'إسم السورة بالعربي: الرحمن \n'
            message += 'إسم السورة بالإنجليزي: The Beneficent \n'
            message += 'رقم السورة: 55 \n'
            message += 'عدد الآيات: 78 \n'
            message += 'عدد الكلمات: 352 \n'
            message += 'عدد الحروف: 1585 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/055.mp3" }, fileName: '055.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الواقعة' || body === '56' || body === '٥٦') {

            let message = 'إسم السورة بالعربي: الواقعة \n'
            message += 'إسم السورة بالإنجليزي: The Inevitable \n'
            message += 'رقم السورة: 56 \n'
            message += 'عدد الآيات: 96 \n'
            message += 'عدد الكلمات: 379 \n'
            message += 'عدد الحروف: 1692 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/056.mp3" }, fileName: '056.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الحديد' || body === '57' || body === '٥٧') {

            let message = 'إسم السورة بالعربي: الحديد \n'
            message += 'إسم السورة بالإنجليزي: The Iron \n'
            message += 'رقم السورة: 57 \n'
            message += 'عدد الآيات: 29 \n'
            message += 'عدد الكلمات: 575 \n'
            message += 'عدد الحروف: 2475 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/057.mp3" }, fileName: '057.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المجادلة' || body === '58' || body === '٥٨') {

            let message = 'إسم السورة بالعربي: المجادلة \n'
            message += 'إسم السورة بالإنجليزي: The Pleading Woman \n'
            message += 'رقم السورة: 58 \n'
            message += 'عدد الآيات: 22 \n'
            message += 'عدد الكلمات: 475 \n'
            message += 'عدد الحروف: 1991 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/058.mp3" }, fileName: '058.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الحشر' || body === '59' || body === '٥٩') {

            let message = 'إسم السورة بالعربي: الحشر \n'
            message += 'إسم السورة بالإنجليزي: The Exile \n'
            message += 'رقم السورة: 59 \n'
            message += 'عدد الآيات: 24 \n'
            message += 'عدد الكلمات: 447 \n'
            message += 'عدد الحروف: 1913 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/059.mp3" }, fileName: '059.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الممتحنة' || body === '60' || body === '٦٠') {

            let message = 'إسم السورة بالعربي: الممتحنة \n'
            message += 'إسم السورة بالإنجليزي: She that is to be examined \n'
            message += 'رقم السورة: 60 \n'
            message += 'عدد الآيات: 13 \n'
            message += 'عدد الكلمات: 352 \n'
            message += 'عدد الحروف: 1519 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/060.mp3" }, fileName: '060.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الصف' || body === '61' || body === '٦١') {

            let message = 'إسم السورة بالعربي: الصف \n'
            message += 'إسم السورة بالإنجليزي: The Ranks \n'
            message += 'رقم السورة: 61 \n'
            message += 'عدد الآيات: 14 \n'
            message += 'عدد الكلمات: 226 \n'
            message += 'عدد الحروف: 936 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/061.mp3" }, fileName: '061.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الجمعة' || body === '62' || body === '٦٢') {

            let message = 'إسم السورة بالعربي: الجمعة \n'
            message += 'إسم السورة بالإنجليزي: Friday \n'
            message += 'رقم السورة: 62 \n'
            message += 'عدد الآيات: 11 \n'
            message += 'عدد الكلمات: 177 \n'
            message += 'عدد الحروف: 749 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/062.mp3" }, fileName: '062.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المنافقون' || body === '63' || body === '٦٣') {

            let message = 'إسم السورة بالعربي: المنافقون \n'
            message += 'إسم السورة بالإنجليزي: The Hypocrites \n'
            message += 'رقم السورة: 63 \n'
            message += 'عدد الآيات: 11 \n'
            message += 'عدد الكلمات: 180 \n'
            message += 'عدد الحروف: 780 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/063.mp3" }, fileName: '063.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'التغابن' || body === '64' || body === '٦٤') {

            let message = 'إسم السورة بالعربي: التغابن \n'
            message += 'إسم السورة بالإنجليزي: Mutual Disillusion \n'
            message += 'رقم السورة: 64 \n'
            message += 'عدد الآيات: 18 \n'
            message += 'عدد الكلمات: 242 \n'
            message += 'عدد الحروف: 1066 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/064.mp3" }, fileName: '064.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الطلاق' || body === '65' || body === '٦٥') {

            let message = 'إسم السورة بالعربي: الطلاق \n'
            message += 'إسم السورة بالإنجليزي: Divorce \n'
            message += 'رقم السورة: 65 \n'
            message += 'عدد الآيات: 12 \n'
            message += 'عدد الكلمات: 279 \n'
            message += 'عدد الحروف: 1170 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/065.mp3" }, fileName: '065.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'التحريم' || body === '66' || body === '٦٦') {

            let message = 'إسم السورة بالعربي: التحريم \n'
            message += 'إسم السورة بالإنجليزي: The Prohibition \n'
            message += 'رقم السورة: 66 \n'
            message += 'عدد الآيات: 12 \n'
            message += 'عدد الكلمات: 254 \n'
            message += 'عدد الحروف: 1067 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/066.mp3" }, fileName: '066.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الملك' || body === '67' || body === '٦٧') {

            let message = 'إسم السورة بالعربي: الملك \n'
            message += 'إسم السورة بالإنجليزي: The Sovereignty \n'
            message += 'رقم السورة: 67 \n'
            message += 'عدد الآيات: 30 \n'
            message += 'عدد الكلمات: 337 \n'
            message += 'عدد الحروف: 1316 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/067.mp3" }, fileName: '067.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'القلم' || body === '68' || body === '٦٨') {

            let message = 'إسم السورة بالعربي: القلم \n'
            message += 'إسم السورة بالإنجليزي: The Pen \n'
            message += 'رقم السورة: 68 \n'
            message += 'عدد الآيات: 52 \n'
            message += 'عدد الكلمات: 301 \n'
            message += 'عدد الحروف: 1258 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/068.mp3" }, fileName: '068.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الحاقة' || body === '69' || body === '٦٩') {

            let message = 'إسم السورة بالعربي: الحاقة \n'
            message += 'إسم السورة بالإنجليزي: The Reality \n'
            message += 'رقم السورة: 69 \n'
            message += 'عدد الآيات: 52 \n'
            message += 'عدد الكلمات: 261 \n'
            message += 'عدد الحروف: 1107 \n'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/069.mp3" }, fileName: '069.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المعارج' || body === '70' || body === '٧٠') {

            let message = 'إسم السورة بالعربي: المعارج \n'
            message += 'إسم السورة بالإنجليزي: The Ascending Stairways \n'
            message += 'رقم السورة: 70 \n'
            message += 'عدد الآيات: 44 \n'
            message += 'عدد الكلمات: 217 \n'
            message += 'عدد الحروف: 947 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/070.mp3" }, fileName: '070.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'نوح' || body === '71' || body === '٧١') {

            let message = 'إسم السورة بالعربي: نوح \n'
            message += 'إسم السورة بالإنجليزي: Nooh \n'
            message += 'رقم السورة: 71 \n'
            message += 'عدد الآيات: 28 \n'
            message += 'عدد الكلمات: 227 \n'
            message += 'عدد الحروف: 950 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/071.mp3" }, fileName: '071.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الجن' || body === '72' || body === '٧٢') {

            let message = 'إسم السورة بالعربي: الجن \n'
            message += 'إسم السورة بالإنجليزي: the Jinn \n'
            message += 'رقم السورة: 72 \n'
            message += 'عدد الآيات: 28 \n'
            message += 'عدد الكلمات: 286 \n'
            message += 'عدد الحروف: 1089 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/072.mp3" }, fileName: '072.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المزمل' || body === '73' || body === '٧٣') {

            let message = 'إسم السورة بالعربي: المزمل \n'
            message += 'إسم السورة بالإنجليزي: The Enshrouded One \n'
            message += 'رقم السورة: 73 \n'
            message += 'عدد الآيات: 20 \n'
            message += 'عدد الكلمات: 200 \n'
            message += 'عدد الحروف: 840 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/073.mp3" }, fileName: '073.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المدثر' || body === '74' || body === '٧٤') {

            let message = 'إسم السورة بالعربي: المدثر \n'
            message += 'إسم السورة بالإنجليزي: The Cloaked One \n'
            message += 'رقم السورة: 74 \n'
            message += 'عدد الآيات: 56 \n'
            message += 'عدد الكلمات: 256 \n'
            message += 'عدد الحروف: 1015 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/074.mp3" }, fileName: '074.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'القيامة' || body === '75' || body === '٧٥') {

            let message = 'إسم السورة بالعربي: القيامة \n'
            message += 'إسم السورة بالإنجليزي: The Resurrection \n'
            message += 'رقم السورة: 75 \n'
            message += 'عدد الآيات: 40 \n'
            message += 'عدد الكلمات: 164 \n'
            message += 'عدد الحروف: 664 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/075.mp3" }, fileName: '075.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الإنسان' || body === '76' || body === '٧٦') {

            let message = 'إسم السورة بالعربي: الإنسان \n'
            message += 'إسم السورة بالإنجليزي: Man \n'
            message += 'رقم السورة: 76 \n'
            message += 'عدد الآيات: 31 \n'
            message += 'عدد الكلمات: 243 \n'
            message += 'عدد الحروف: 1165 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/076.mp3" }, fileName: '076.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المرسلات' || body === '77' || body === '٧٧') {

            let message = 'إسم السورة بالعربي: المرسلات \n'
            message += 'إسم السورة بالإنجليزي: The Emissaries \n'
            message += 'رقم السورة: 77 \n'
            message += 'عدد الآيات: 50 \n'
            message += 'عدد الكلمات: 181 \n'
            message += 'عدد الحروف: 815 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/077.mp3" }, fileName: '077.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'النبأ' || body === '78' || body === '٧٨') {

            let message = 'إسم السورة بالعربي: النبأ \n'
            message += 'إسم السورة بالإنجليزي: The Emissaries \n'
            message += 'رقم السورة: 78 \n'
            message += 'عدد الآيات: 40 \n'
            message += 'عدد الكلمات: 174 \n'
            message += 'عدد الحروف: 766 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/078.mp3" }, fileName: '078.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'النازعات' || body === '79' || body === '٧٩') {

            let message = 'إسم السورة بالعربي: النازعات \n'
            message += 'إسم السورة بالإنجليزي: Those who drag forth \n'
            message += 'رقم السورة: 79 \n'
            message += 'عدد الآيات: 46 \n'
            message += 'عدد الكلمات: 179 \n'
            message += 'عدد الحروف: 762 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/079.mp3" }, fileName: '079.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'عبس' || body === '80' || body === '٨٠') {

            let message = 'إسم السورة بالعربي: عبس \n'
            message += 'إسم السورة بالإنجليزي: He frowned \n'
            message += 'رقم السورة: 80 \n'
            message += 'عدد الآيات: 42 \n'
            message += 'عدد الكلمات: 133 \n'
            message += 'عدد الحروف: 538 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/080.mp3" }, fileName: '080.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'التكوير' || body === '81' || body === '٨١') {

            let message = 'إسم السورة بالعربي: التكوير \n'
            message += 'إسم السورة بالإنجليزي: The Overthrowing \n'
            message += 'رقم السورة: 81 \n'
            message += 'عدد الآيات: 29 \n'
            message += 'عدد الكلمات: 104 \n'
            message += 'عدد الحروف: 425 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/081.mp3" }, fileName: '081.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الانفطار' || body === '82' || body === '٨٢') {

            let message = 'إسم السورة بالعربي: الانفطار \n'
            message += 'إسم السورة بالإنجليزي: The Cleaving \n'
            message += 'رقم السورة: 82 \n'
            message += 'عدد الآيات: 19 \n'
            message += 'عدد الكلمات: 81 \n'
            message += 'عدد الحروف: 326 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/082.mp3" }, fileName: '082.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المطففين' || body === '83' || body === '٨٣') {

            let message = 'إسم السورة بالعربي: المطففين \n'
            message += 'إسم السورة بالإنجليزي: Defrauding \n'
            message += 'رقم السورة: 83 \n'
            message += 'عدد الآيات: 36 \n'
            message += 'عدد الكلمات: 169 \n'
            message += 'عدد الحروف: 740 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/083.mp3" }, fileName: '083.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الانشقاق' || body === '84' || body === '٨٤') {

            let message = 'إسم السورة بالعربي: الانشقاق \n'
            message += 'إسم السورة بالإنجليزي: The Splitting Open \n'
            message += 'رقم السورة: 84 \n'
            message += 'عدد الآيات: 25 \n'
            message += 'عدد الكلمات: 108 \n'
            message += 'عدد الحروف: 436 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/084.mp3" }, fileName: '084.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'البروج' || body === '85' || body === '٨٥') {

            let message = 'إسم السورة بالعربي: البروج \n'
            message += 'إسم السورة بالإنجليزي: The Constellations \n'
            message += 'رقم السورة: 85 \n'
            message += 'عدد الآيات: 22 \n'
            message += 'عدد الكلمات: 109 \n'
            message += 'عدد الحروف: 459 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/085.mp3" }, fileName: '085.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الطارق' || body === '86' || body === '٨٦') {

            let message = 'إسم السورة بالعربي: الطارق \n'
            message += 'إسم السورة بالإنجليزي: The Morning Star \n'
            message += 'رقم السورة: 86 \n'
            message += 'عدد الآيات: 17 \n'
            message += 'عدد الكلمات: 61 \n'
            message += 'عدد الحروف: 249 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/086.mp3" }, fileName: '086.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الأعلى' || body === '87' || body === '٨٧') {

            let message = 'إسم السورة بالعربي: الأعلى \n'
            message += 'إسم السورة بالإنجليزي: The Most High \n'
            message += 'رقم السورة: 87 \n'
            message += 'عدد الآيات: 19 \n'
            message += 'عدد الكلمات: 72 \n'
            message += 'عدد الحروف: 293 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/087.mp3" }, fileName: '087.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الغاشية' || body === '88' || body === '٨٨') {

            let message = 'إسم السورة بالعربي: الغاشية \n'
            message += 'إسم السورة بالإنجليزي: The Overwhelming \n'
            message += 'رقم السورة: 88 \n'
            message += 'عدد الآيات: 26 \n'
            message += 'عدد الكلمات: 92 \n'
            message += 'عدد الحروف: 378 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/088.mp3" }, fileName: '088.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الفجر' || body === '89' || body === '٨٩') {

            let message = 'إسم السورة بالعربي: الفجر \n'
            message += 'إسم السورة بالإنجليزي: The Dawn \n'
            message += 'رقم السورة: 89 \n'
            message += 'عدد الآيات: 30 \n'
            message += 'عدد الكلمات: 139 \n'
            message += 'عدد الحروف: 573 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/089.mp3" }, fileName: '089.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'البلد' || body === '90' || body === '٩٠') {

            let message = 'إسم السورة بالعربي: البلد \n'
            message += 'إسم السورة بالإنجليزي: The City \n'
            message += 'رقم السورة: 90 \n'
            message += 'عدد الآيات: 20 \n'
            message += 'عدد الكلمات: 82 \n'
            message += 'عدد الحروف: 335 \n'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/090.mp3" }, fileName: '090.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الشمس' || body === '91' || body === '٩١') {

            let message = 'إسم السورة بالعربي: الشمس \n'
            message += 'إسم السورة بالإنجليزي: The Sun \n'
            message += 'رقم السورة: 91 \n'
            message += 'عدد الآيات: 15 \n'
            message += 'عدد الكلمات: 54 \n'
            message += 'عدد الحروف: 249 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/091.mp3" }, fileName: '091.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الليل' || body === '92' || body === '٩٢') {

            let message = 'إسم السورة بالعربي: الليل \n'
            message += 'إسم السورة بالإنجليزي: The Night \n'
            message += 'رقم السورة: 92 \n'
            message += 'عدد الآيات: 21 \n'
            message += 'عدد الكلمات: 71 \n'
            message += 'عدد الحروف: 312 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/092.mp3" }, fileName: '092.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الضحى' || body === '93' || body === '٩٣') {

            let message = 'إسم السورة بالعربي: الضحى \n'
            message += 'إسم السورة بالإنجليزي: The Morning Hours \n'
            message += 'رقم السورة: 93 \n'
            message += 'عدد الآيات: 11 \n'
            message += 'عدد الكلمات: 40 \n'
            message += 'عدد الحروف: 164 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/093.mp3" }, fileName: '093.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الشرح' || body === '94' || body === '٩٤') {

            let message = 'إسم السورة بالعربي: الشرح \n'
            message += 'إسم السورة بالإنجليزي: The Consolation \n'
            message += 'رقم السورة: 94 \n'
            message += 'عدد الآيات: 8 \n'
            message += 'عدد الكلمات: 27 \n'
            message += 'عدد الحروف: 102 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/094.mp3" }, fileName: '094.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'التين' || body === '95' || body === '٩٥') {

            let message = 'إسم السورة بالعربي: التين \n'
            message += 'إسم السورة بالإنجليزي: The Fig \n'
            message += 'رقم السورة: 95 \n'
            message += 'عدد الآيات: 8 \n'
            message += 'عدد الكلمات: 34 \n'
            message += 'عدد الحروف: 156 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/095.mp3" }, fileName: '095.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'العلق' || body === '96' || body === '٩٦') {

            let message = 'إسم السورة بالعربي: العلق \n'
            message += 'إسم السورة بالإنجليزي: The Clot \n'
            message += 'رقم السورة: 96 \n'
            message += 'عدد الآيات: 19 \n'
            message += 'عدد الكلمات: 72 \n'
            message += 'عدد الحروف: 281 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/096.mp3" }, fileName: '096.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'القدر' || body === '97' || body === '٩٧') {

            let message = 'إسم السورة بالعربي: القدر \n'
            message += 'إسم السورة بالإنجليزي: The Power, Fate \n'
            message += 'رقم السورة: 97 \n'
            message += 'عدد الآيات: 5 \n'
            message += 'عدد الكلمات: 30 \n'
            message += 'عدد الحروف: 112 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/097.mp3" }, fileName: '097.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'البينة' || body === '98' || body === '٩٨') {

            let message = 'إسم السورة بالعربي: البينة \n'
            message += 'إسم السورة بالإنجليزي: The Evidence \n'
            message += 'رقم السورة: 98 \n'
            message += 'عدد الآيات: 8 \n'
            message += 'عدد الكلمات: 94 \n'
            message += 'عدد الحروف: 412 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/098.mp3" }, fileName: '098.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الزلزلة' || body === '99' || body === '٩٩') {

            let message = 'إسم السورة بالعربي: الزلزلة \n'
            message += 'إسم السورة بالإنجليزي: The Earthquakee \n'
            message += 'رقم السورة: 99 \n'
            message += 'عدد الآيات: 8 \n'
            message += 'عدد الكلمات: 36 \n'
            message += 'عدد الحروف: 156 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/099.mp3" }, fileName: '099.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'العاديات' || body === '100' || body === '١٠٠') {

            let message = 'إسم السورة بالعربي: العاديات \n'
            message += 'إسم السورة بالإنجليزي: The Chargers \n'
            message += 'رقم السورة: 100 \n'
            message += 'عدد الآيات: 11 \n'
            message += 'عدد الكلمات: 40 \n'
            message += 'عدد الحروف: 164 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/100.mp3" }, fileName: '100.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }
        else if (body === 'القارعة' || body === '101' || body === '١٠١') {

            let message = 'إسم السورة بالعربي: القارعة \n'
            message += 'إسم السورة بالإنجليزي: The Calamity \n'
            message += 'رقم السورة: 101 \n'
            message += 'عدد الآيات: 11 \n'
            message += 'عدد الكلمات: 36 \n'
            message += 'عدد الحروف: 158 \n'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/101.mp3" }, fileName: '101.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'التكاثر' || body === '102' || body === '١٠٢') {

            let message = 'إسم السورة بالعربي: التكاثر \n'
            message += 'إسم السورة بالإنجليزي: Competition \n'
            message += 'رقم السورة: 102 \n'
            message += 'عدد الآيات: 8 \n'
            message += 'عدد الكلمات: 28 \n'
            message += 'عدد الحروف: 122 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/102.mp3" }, fileName: '102.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'العصر' || body === '103' || body === '١٠٣') {

            let message = 'إسم السورة بالعربي: العصر \n'
            message += 'إسم السورة بالإنجليزي: The Declining Day, Epoch \n'
            message += 'رقم السورة: 103 \n'
            message += 'عدد الآيات: 3 \n'
            message += 'عدد الكلمات: 14 \n'
            message += 'عدد الحروف: 70 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/103.mp3" }, fileName: '103.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الهمزة' || body === '104' || body === '١٠٤') {

            let message = 'إسم السورة بالعربي: الهمزة \n'
            message += 'إسم السورة بالإنجليزي: The Traducer \n'
            message += 'رقم السورة: 104 \n'
            message += 'عدد الآيات: 9 \n'
            message += 'عدد الكلمات: 33 \n'
            message += 'عدد الحروف: 133 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/104.mp3" }, fileName: '104.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الفيل' || body === '105' || body === '١٠٥') {

            let message = 'إسم السورة بالعربي: الفيل \n'
            message += 'إسم السورة بالإنجليزي: The Elephant \n'
            message += 'رقم السورة: 105 \n'
            message += 'عدد الآيات: 5 \n'
            message += 'عدد الكلمات: 23 \n'
            message += 'عدد الحروف: 96 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/105.mp3" }, fileName: '105.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'قريش' || body === '106' || body === '١٠٦') {

            let message = 'إسم السورة بالعربي: قريش \n'
            message += 'إسم السورة بالإنجليزي: Quraysh \n'
            message += 'رقم السورة: 106 \n'
            message += 'عدد الآيات: 4 \n'
            message += 'عدد الكلمات: 17 \n'
            message += 'عدد الحروف: 73 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/106.mp3" }, fileName: '106.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الماعون' || body === '107' || body === '١٠٧') {

            let message = 'إسم السورة بالعربي: الماعون \n'
            message += 'إسم السورة بالإنجليزي: Almsgiving \n'
            message += 'رقم السورة: 107 \n'
            message += 'عدد الآيات: 7 \n'
            message += 'عدد الكلمات: 25 \n'
            message += 'عدد الحروف: 112 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/107.mp3" }, fileName: '107.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الكوثر' || body === '108' || body === '١٠٨') {

            let message = 'إسم السورة بالعربي: الكوثر \n'
            message += 'إسم السورة بالإنجليزي: Abundance \n'
            message += 'رقم السورة: 108 \n'
            message += 'عدد الآيات: 3 \n'
            message += 'عدد الكلمات: 10 \n'
            message += 'عدد الحروف: 42 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/108.mp3" }, fileName: '108.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الكافرون' || body === '109' || body === '١٠٩') {

            let message = 'إسم السورة بالعربي: الكافرون \n'
            message += 'إسم السورة بالإنجليزي: The Disbelievers \n'
            message += 'رقم السورة: 109 \n'
            message += 'عدد الآيات: 6 \n'
            message += 'عدد الكلمات: 27 \n'
            message += 'عدد الحروف: 95 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/109.mp3" }, fileName: '109.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'النصر' || body === '110' || body === '١١٠') {

            let message = 'إسم السورة بالعربي: النصر \n'
            message += 'إسم السورة بالإنجليزي: Divine Support \n'
            message += 'رقم السورة: 110 \n'
            message += 'عدد الآيات: 3 \n'
            message += 'عدد الكلمات: 19 \n'
            message += 'عدد الحروف: 79 \n'
            message += 'مكان النزول: مدنية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/110.mp3" }, fileName: '110.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'المسد' || body === '111' || body === '١١١') {

            let message = 'إسم السورة بالعربي: المسد \n'
            message += 'إسم السورة بالإنجليزي: The Palm Fibre \n'
            message += 'رقم السورة: 111 \n'
            message += 'عدد الآيات: 5 \n'
            message += 'عدد الكلمات: 29 \n'
            message += 'عدد الحروف: 81 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/111.mp3" }, fileName: '111.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الإخلاص' || body === '112' || body === '١١٢') {

            let message = 'إسم السورة بالعربي: الإخلاص \n'
            message += 'إسم السورة بالإنجليزي: Sincerity \n'
            message += 'رقم السورة: 112 \n'
            message += 'عدد الآيات: 4 \n'
            message += 'عدد الكلمات: 15 \n'
            message += 'عدد الحروف: 47 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/112.mp3" }, fileName: '112.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الفلق' || body === '113' || body === '١١٣') {

            let message = 'إسم السورة بالعربي: الفلق \n'
            message += 'إسم السورة بالإنجليزي: The Dawn \n'
            message += 'رقم السورة: 113 \n'
            message += 'عدد الآيات: 5 \n'
            message += 'عدد الكلمات: 23 \n'
            message += 'عدد الحروف: 71 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/113.mp3" }, fileName: '113.mp3', mimetype: 'audio/mp4', ptt: false}, { quoted: id }).catch((error) => Error(error));
        
        }

        else if (body === 'الناس' || body === '114' || body === '١١٤') {

            let message = 'إسم السورة بالعربي: الناس \n'
            message += 'إسم السورة بالإنجليزي: Mankind \n'
            message += 'رقم السورة: 114 \n'
            message += 'عدد الآيات: 6 \n'
            message += 'عدد الكلمات: 20 \n'
            message += 'عدد الحروف: 80 \n'
            message += 'مكان النزول: مكية'
        
            await client.sendMessage(from, { text: message }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { document: { url: "http://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/114.mp3" }, fileName: '114.mp3', mimetype: 'audio/mp4', ptt: false }, { quoted: id }).catch((error) => Error(error));
        
        }



        else if (body === "*") {

            returnMenu(from, 1)

            let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
            quran_menu += '1- أدريس أبكر \n'
            quran_menu += '2- ماهر المعيقلي \n'
            quran_menu += '3- عبدالله الموسى \n'
            quran_menu += '4- علي جابر \n'
            quran_menu += '5- عبدالرحمن السديس \n'
            quran_menu += '6- خالد الجليل \n\n\n'
            quran_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await client.sendMessage(from, from, { text: message }, { quoted: id }).catch((error) => Error(error));

        }

    }
};

module.exports = {
    abdalbast_abdalsams: abdalbast_abdalsams
}
