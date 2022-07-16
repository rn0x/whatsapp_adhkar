const returnMenu = require('../lib/returnMenu.js');
const fs = require('fs-extra');
const Error = require('../lib/error.js');

const quran_menu = {

    async exec({ from, client, body, id }) {

        

        if (body === '1'){

            returnMenu(from,   2)

            let quran_idr = fs.readFileSync('./media/text/quran_1.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: quran_idr }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '2'){

            returnMenu(from,   3)

            let quran_idr = fs.readFileSync('./media/text/quran_2.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: quran_idr }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));

        }

        else if (body === '3'){

            returnMenu(from,   4)

            let quran_idr = fs.readFileSync('./media/text/quran_3.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: quran_idr }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '4'){ 
            
            returnMenu(from,   5)

            let quran_idr = fs.readFileSync('./media/text/quran_4.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: quran_idr }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));     
            
        }

        else if (body === '5'){ 
            
            returnMenu(from,   13)

            let quran_idr = fs.readFileSync('./media/text/quran_5.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: quran_idr }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));     
            
        }

        else if (body === '6'){ 
            
            returnMenu(from,   14)

            let quran_idr = fs.readFileSync('./media/text/quran_6.txt',{encoding:'utf8', flag:'r'})
            let home = '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*\n'
            home += '*【 للرجوع للخلف أرسل * 】*'
            await client.sendMessage(from, { text: quran_idr }, { quoted: id }).catch((error) => Error(error));
            await client.sendMessage(from, { text: home }, { quoted: id }).catch((error) => Error(error));     
            
        }

    }

}

module.exports = {
    quran_menu: quran_menu
}