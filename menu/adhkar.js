const Error = require('../lib/error.js');
const { adhkar_all } = require('./adhkar_all.js');
const fs = require('fs-extra');


const adhkar = {
    

    async exec({ from, client, body, id }) {

        

        if (body === '1'){

            let adhkar_sbh = fs.readFileSync('./media/text/adhkar_sbh.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_sbh }, { quoted: id }).catch((error) => Error(error));
        }

        else if (body === '2'){

            let adhkar_msa = fs.readFileSync('./media/text/adhkar_msa.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_msa }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '3'){

            let adhkar_nom = fs.readFileSync('./media/text/adhkar_nom.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_nom }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '4'){

            let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
            await client.sendMessage(from, { text: listadk }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '5'){

            let ad3yh_nboyh = fs.readFileSync('./media/text/ad3yh_nboyh.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: ad3yh_nboyh }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '6'){

            let adhkar_al2dan = fs.readFileSync('./media/text/adhkar_al2dan.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_al2dan }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '7'){

            let adhkar_almsgd = fs.readFileSync('./media/text/adhkar_almsgd.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_almsgd }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '8'){

            let adhkar_alwdo2 = fs.readFileSync('./media/text/adhkar_alwdo2.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_alwdo2 }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '9'){

            let adhkar_home = fs.readFileSync('./media/text/adhkar_home.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_home }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '10'){

            let adhkar_al5la = fs.readFileSync('./media/text/adhkar_al5la.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_al5la }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '11'){

            let adhkar_food = fs.readFileSync('./media/text/adhkar_food.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhkar_food }, { quoted: id }).catch((error) => Error(error));
            
        }

        else if (body === '12'){

            let adhka_5tm = fs.readFileSync('./media/text/adhka_5tm.txt',{encoding:'utf8', flag:'r'})
            await client.sendMessage(from, { text: adhka_5tm }, { quoted: id }).catch((error) => Error(error));
            
        }

    }


}

module.exports = {
    adhkar: adhkar
}