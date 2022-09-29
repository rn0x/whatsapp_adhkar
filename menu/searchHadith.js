import searchHadith from '../module/searchHadith.js';

export default {

    async exec({ e, body }) {

        if (body) {
            
            if (body.length <= 3) {
                await e.reply('قم بكتابة الكلمة بشكل صحيح').catch(e => console.log(e));
            }

            else {

                let Hadith = await searchHadith(body).catch(e => console.log(e));

                if (Hadith.length === 0) {
                    await e.reply('قم بكتابة الكلمة بشكل صحيح').catch(e => console.log(e));
                }

                else {
                    await e.reply(Hadith).catch(e => console.log(e));
                }
            }
        }
    }
}