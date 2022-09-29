import searchQuran from '../module/searchQuran.js';

export default {

    async exec({ e, body }) {

        if (body) {

            let search = await searchQuran(body, 'search').catch(e => console.log(e));
            let tafser1 = await searchQuran(body, 'tafser1').catch(e => console.log(e));
            let tafser2 = await searchQuran(body, 'tafser2').catch(e => console.log(e));
            let english = await searchQuran(body, 'english').catch(e => console.log(e));
            let err = 'لم يتم التعرف على الكلمة !'

            if (search === err || tafser1 === err || tafser2 === err || english === err) {
                await e.reply('لم يتم التعرف على الكلمة !').catch(e => console.log(e));
            }

            else {
                let message = `*${search?.split('\n')[0]}*\n\n`
                message += '*تفسير الجلالين :* \n\n'
                message += `${tafser1?.split(search)[1]?.split('--------------\n')[0]}\n\n`
                message += '*تفسير الميسر :* \n\n'
                message += `${tafser2?.split(search)[1]?.split('--------------\n')[0]}\n\n`
                message += '*شرح الآيات باللغة الإنجليزية :* \n\n'
                message += `${english?.split(search)[1]?.split('--------------\n')[0]}`

                await e.reply(message).catch(e => console.log(e));
            }

        }
    }
}
