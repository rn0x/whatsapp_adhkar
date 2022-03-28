import fs from 'fs-extra';
import Error from './error.js';

export const hisn_almuslim = {

    async exec({ from, client, body, id }) {

        try {


            let hisn_almuslim_json = fs.readJsonSync('./menu/hisn_almuslim.json');
            let key = Object.keys(hisn_almuslim_json);

            if (body === '1') {

                let msg = `*✽ ${key[0]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[0]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[0]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '2') {
            
                let msg = `*✽ ${key[1]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[1]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[1]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '3') {
            
                let msg = `*✽ ${key[2]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[2]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[2]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '4') {
            
                let msg = `*✽ ${key[3]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[3]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[3]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '5') {
            
                let msg = `*✽ ${key[4]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[4]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[4]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '6') {
            
                let msg = `*✽ ${key[5]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[5]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[5]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '7') {
            
                let msg = `*✽ ${key[6]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[6]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[6]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '8') {
            
                let msg = `*✽ ${key[7]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[7]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[7]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '9') {
            
                let msg = `*✽ ${key[8]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[8]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[8]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '10') {
            
                let msg = `*✽ ${key[9]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[9]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[9]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '11') {
            
                let msg = `*✽ ${key[10]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[10]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[10]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '12') {
            
                let msg = `*✽ ${key[11]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[11]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[11]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '13') {
            
                let msg = `*✽ ${key[12]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[12]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[12]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '14') {
            
                let msg = `*✽ ${key[13]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[13]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[13]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '15') {
            
                let msg = `*✽ ${key[14]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[14]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[14]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '16') {
            
                let msg = `*✽ ${key[15]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[15]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[15]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '17') {
            
                let msg = `*✽ ${key[16]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[16]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[16]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '18') {
            
                let msg = `*✽ ${key[17]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[17]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[17]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '19') {
            
                let msg = `*✽ ${key[18]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[18]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[18]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '20') {
            
                let msg = `*✽ ${key[19]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[19]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[19]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '21') {
            
                let msg = `*✽ ${key[20]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[20]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[20]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '22') {
            
                let msg = `*✽ ${key[21]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[21]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[21]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '23') {
            
                let msg = `*✽ ${key[22]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[22]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[22]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '24') {
            
                let msg = `*✽ ${key[23]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[23]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[23]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '25') {
            
                let msg = `*✽ ${key[24]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[24]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[24]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '26') {
            
                let msg = `*✽ ${key[25]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[25]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[25]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '27') {
            
                let msg = `*✽ ${key[26]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[26]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[26]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '28') {
            
                let msg = `*✽ ${key[27]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[27]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[27]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '29') {
            
                let msg = `*✽ ${key[28]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[28]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[28]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '30') {
            
                let msg = `*✽ ${key[29]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[29]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[29]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '31') {
            
                let msg = `*✽ ${key[30]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[30]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[30]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '32') {
            
                let msg = `*✽ ${key[31]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[31]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[31]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '33') {
            
                let msg = `*✽ ${key[32]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[32]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[32]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '34') {
            
                let msg = `*✽ ${key[33]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[33]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[33]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '35') {
            
                let msg = `*✽ ${key[34]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[34]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[34]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '36') {
            
                let msg = `*✽ ${key[35]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[35]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[35]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '37') {
            
                let msg = `*✽ ${key[36]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[36]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[36]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '38') {
            
                let msg = `*✽ ${key[37]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[37]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[37]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '39') {
            
                let msg = `*✽ ${key[38]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[38]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[38]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '40') {
            
                let msg = `*✽ ${key[39]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[39]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[39]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '41') {
            
                let msg = `*✽ ${key[40]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[40]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[40]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '42') {
            
                let msg = `*✽ ${key[41]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[41]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[41]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '43') {
            
                let msg = `*✽ ${key[42]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[42]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[42]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '44') {
            
                let msg = `*✽ ${key[43]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[43]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[43]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '45') {
            
                let msg = `*✽ ${key[44]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[44]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[44]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '46') {
            
                let msg = `*✽ ${key[45]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[45]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[45]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '47') {
            
                let msg = `*✽ ${key[46]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[46]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[46]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '48') {
            
                let msg = `*✽ ${key[47]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[47]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[47]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '49') {
            
                let msg = `*✽ ${key[48]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[48]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[48]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '50') {
            
                let msg = `*✽ ${key[49]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[49]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[49]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '51') {
            
                let msg = `*✽ ${key[50]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[50]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[50]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '52') {
            
                let msg = `*✽ ${key[51]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[51]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[51]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '53') {
            
                let msg = `*✽ ${key[52]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[52]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[52]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '54') {
            
                let msg = `*✽ ${key[53]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[53]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[53]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '55') {
            
                let msg = `*✽ ${key[54]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[54]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[54]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '56') {
            
                let msg = `*✽ ${key[55]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[55]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[55]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '57') {
            
                let msg = `*✽ ${key[56]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[56]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[56]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '58') {
            
                let msg = `*✽ ${key[57]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[57]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[57]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '59') {
            
                let msg = `*✽ ${key[58]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[58]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[58]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '60') {
            
                let msg = `*✽ ${key[59]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[59]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[59]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '61') {
            
                let msg = `*✽ ${key[60]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[60]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[60]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '62') {
            
                let msg = `*✽ ${key[61]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[61]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[61]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '63') {
            
                let msg = `*✽ ${key[62]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[62]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[62]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '64') {
            
                let msg = `*✽ ${key[63]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[63]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[63]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '65') {
            
                let msg = `*✽ ${key[64]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[64]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[64]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '66') {
            
                let msg = `*✽ ${key[65]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[65]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[65]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '67') {
            
                let msg = `*✽ ${key[66]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[66]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[66]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '68') {
            
                let msg = `*✽ ${key[67]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[67]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[67]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '69') {
            
                let msg = `*✽ ${key[68]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[68]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[68]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '70') {
            
                let msg = `*✽ ${key[69]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[69]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[69]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '71') {
            
                let msg = `*✽ ${key[70]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[70]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[70]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '72') {
            
                let msg = `*✽ ${key[71]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[71]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[71]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '73') {
            
                let msg = `*✽ ${key[72]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[72]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[72]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '74') {
            
                let msg = `*✽ ${key[73]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[73]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[73]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '75') {
            
                let msg = `*✽ ${key[74]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[74]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[74]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '76') {
            
                let msg = `*✽ ${key[75]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[75]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[75]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '77') {
            
                let msg = `*✽ ${key[76]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[76]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[76]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '78') {
            
                let msg = `*✽ ${key[77]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[77]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[77]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '79') {
            
                let msg = `*✽ ${key[78]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[78]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[78]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '80') {
            
                let msg = `*✽ ${key[79]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[79]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[79]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '81') {
            
                let msg = `*✽ ${key[80]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[80]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[80]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '82') {
            
                let msg = `*✽ ${key[81]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[81]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[81]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '83') {
            
                let msg = `*✽ ${key[82]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[82]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[82]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '84') {
            
                let msg = `*✽ ${key[83]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[83]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[83]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '85') {
            
                let msg = `*✽ ${key[84]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[84]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[84]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '86') {
            
                let msg = `*✽ ${key[85]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[85]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[85]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '87') {
            
                let msg = `*✽ ${key[86]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[86]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[86]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '88') {
            
                let msg = `*✽ ${key[87]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[87]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[87]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '89') {
            
                let msg = `*✽ ${key[88]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[88]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[88]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '90') {
            
                let msg = `*✽ ${key[89]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[89]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[89]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '91') {
            
                let msg = `*✽ ${key[90]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[90]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[90]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '92') {
            
                let msg = `*✽ ${key[91]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[91]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[91]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '93') {
            
                let msg = `*✽ ${key[92]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[92]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[92]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '94') {
            
                let msg = `*✽ ${key[93]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[93]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[93]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '95') {
            
                let msg = `*✽ ${key[94]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[94]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[94]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '96') {
            
                let msg = `*✽ ${key[95]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[95]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[95]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '97') {
            
                let msg = `*✽ ${key[96]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[96]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[96]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '98') {
            
                let msg = `*✽ ${key[97]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[97]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[97]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '99') {
            
                let msg = `*✽ ${key[98]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[98]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[98]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '100') {
            
                let msg = `*✽ ${key[99]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[99]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[99]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '101') {
            
                let msg = `*✽ ${key[100]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[100]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[100]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '102') {
            
                let msg = `*✽ ${key[101]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[101]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[101]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '103') {
            
                let msg = `*✽ ${key[102]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[102]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[102]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '104') {
            
                let msg = `*✽ ${key[103]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[103]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[103]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '105') {
            
                let msg = `*✽ ${key[104]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[104]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[104]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '106') {
            
                let msg = `*✽ ${key[105]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[105]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[105]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '107') {
            
                let msg = `*✽ ${key[106]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[106]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[106]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '108') {
            
                let msg = `*✽ ${key[107]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[107]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[107]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '109') {
            
                let msg = `*✽ ${key[108]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[108]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[108]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '110') {
            
                let msg = `*✽ ${key[109]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[109]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[109]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '111') {
            
                let msg = `*✽ ${key[110]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[110]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[110]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '112') {
            
                let msg = `*✽ ${key[111]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[111]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[111]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '113') {
            
                let msg = `*✽ ${key[112]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[112]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[112]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '114') {
            
                let msg = `*✽ ${key[113]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[113]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[113]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '115') {
            
                let msg = `*✽ ${key[114]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[114]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[114]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '116') {
            
                let msg = `*✽ ${key[115]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[115]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[115]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '117') {
            
                let msg = `*✽ ${key[116]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[116]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[116]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '118') {
            
                let msg = `*✽ ${key[117]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[117]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[117]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '119') {
            
                let msg = `*✽ ${key[118]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[118]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[118]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '120') {
            
                let msg = `*✽ ${key[119]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[119]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[119]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '121') {
            
                let msg = `*✽ ${key[120]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[120]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[120]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '122') {
            
                let msg = `*✽ ${key[121]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[121]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[121]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '123') {
            
                let msg = `*✽ ${key[122]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[122]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[122]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '124') {
            
                let msg = `*✽ ${key[123]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[123]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[123]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '125') {
            
                let msg = `*✽ ${key[124]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[124]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[124]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '126') {
            
                let msg = `*✽ ${key[125]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[125]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[125]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '127') {
            
                let msg = `*✽ ${key[126]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[126]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[126]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '128') {
            
                let msg = `*✽ ${key[127]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[127]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[127]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '129') {
            
                let msg = `*✽ ${key[128]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[128]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[128]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '130') {
            
                let msg = `*✽ ${key[129]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[129]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[129]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '131') {
            
                let msg = `*✽ ${key[130]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[130]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[130]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '132') {
            
                let msg = `*✽ ${key[131]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[131]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[131]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '133') {
            
                let msg = `*✽ ${key[132]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[132]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[132]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
            else if (body === '134') {
            
                let msg = `*✽ ${key[133]}*\n\n`
            
                for (let lop of hisn_almuslim_json[key[133]].text) {
            
                    msg += `*${lop}*\n`
                        
                }
                    
                msg += '\n\n\n\n________\n\n'
                    
                for (let lop2 of hisn_almuslim_json[key[133]].footnote) {
                    
                    msg += `${lop2}\n`
                        
                }
            
                await client.reply(from, msg , id).catch((error) => Error(error));
            }
            
            
        } catch (error) {
    
            Error(error);
            
        }
        
    }
}