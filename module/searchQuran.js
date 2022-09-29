import fetch from 'node-fetch';

export default async function searchQuran(text, type) {

    // type = للبحث في الآيات : search || تفسير الجلالين : tafser1 || تفسير الميسر : tafser2 || شرح الآيات باللغة الإنجليزية : english
    let response = await fetch(`https://api-quran.cf/quransql/index.php?text=${text}&type=${type}`, { method: 'GET' });
    let data = await response?.json();

    return data?.result ? data?.result[0] : 'لم يتم التعرف على الكلمة !'

}
