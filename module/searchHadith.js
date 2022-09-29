import fetch from 'node-fetch';
import { convert } from 'html-to-text';

export default async function searchHadith(text) {

    let response = await fetch(`https://dorar.net/dorar_api.json?skey=${text}`, { method: 'GET' });
    let data = await response?.json();
    let html_to_text = convert(data?.ahadith?.result, {
        wordwrap: 130
    });
    let Hadith = html_to_text?.split('\n\n\nالمزيد')[0]?.split('\n\nالمزيد')[0]

    return Hadith

}
