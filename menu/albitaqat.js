import MenuNmber from '../lib/MenuNmber.js';

export const albitaqat = {

  async exec({ from, client, pushname, body, MessageType, Mimetype }) {

    switch (body) {

      case 'الفاتحة':
      case '1':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/001.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/001.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      
      break;
      case 'البقرة':
      case '2':

      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/002.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/002.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'آل عمران':
      case '3':  

      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/003.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/003.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'النساء':
      case '4':
                
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/004.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/004.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'المائدة':
      case '5':  

      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/005.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/005.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الأنعام':
      case '6':  

      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/006.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/006.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الأعراف':
      case '7': 
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/007.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/007.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الأنفال':
      case '8': 
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/008.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/008.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'التوبة':
      case '9': 
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/009.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/009.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'يونس':
      case '10': 
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/010.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/010.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'هود':
      case '11':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/011.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/011.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'يوسف':
      case '12':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/012.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/012.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));         
      break;
      case 'الرعد':
      case '13':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/013.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/013.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'إبراهيم':
      case '14':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/014.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/014.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الحجر':
      case '15':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/015.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/015.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'النحل':
      case '16':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/016.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/016.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الإسراء':
      case '17':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/017.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/017.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الكهف':
      case '18':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/018.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/018.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'مريم':
      case '19':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/019.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/019.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'طه':
      case '20':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/020.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/020.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الأنبياء':
      case '21':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/021.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/021.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الحج':
      case '22':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/022.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/022.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'المؤمنون':
      case '23':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/023.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/023.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'النور':
      case '24':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/024.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/024.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الفرقان':
      case '25':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/025.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/025.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الشعراء':
      case '26':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/026.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/026.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'النمل':
      case '27':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/027.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/027.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'القصص':
      case '28':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/028.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/028.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'العنكبوت':
      case '29':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/029.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/029.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الروم':
      case '30':
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/030.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/030.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'لقمان':
      case '31':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/031.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/031.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'السجدة':
      case '32':

      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/032.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/032.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الأحزاب':
      case '33':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/033.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/033.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'سبأ':
      case '34':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/034.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/034.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'فاطر':
      case '35':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/035.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/035.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'يس':
      case '36':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/036.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/036.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الصافات':
      case '37':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/037.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/037.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'ص':
      case '38':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/038.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/038.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الزمر':
      case '39':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/039.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/039.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'غافر':
      case '40':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/040.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/040.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'فصلت':
      case '41':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/041.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/041.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الشورى':
      case '42':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/042.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/042.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الزخرف':
      case '43':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/043.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/043.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الدخان':
      case '44':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/044.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/044.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الجاثية':
      case '45':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/045.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/045.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الأحقاف':
      case '46':

      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/046.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/046.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'محمد':
      case '47':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/047.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/047.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الفتح':
      case '48':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/048.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/048.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الحجرات':
      case '49':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/049.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/049.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'ق':
      case '50':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/050.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/050.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الذاريات':
      case '51':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/051.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/051.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الطور':
      case '52':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/052.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/052.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'النجم':
      case '53':

      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/053.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/053.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'القمر':
      case '54':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/054.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/054.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الرحمن':
      case '55':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/055.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/055.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الواقعة':
      case '56':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/056.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/056.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الحديد':
      case '57':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/057.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/057.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'المجادلة':
      case '58':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/058.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/058.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الحشر':
      case '59':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/059.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/059.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الممتحنة':
      case '60':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/060.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/060.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الصف':
      case '61':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/061.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/061.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الجمعة':
      case '62':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/062.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/062.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'المنافقون':
      case '63':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/063.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/063.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'التغابن':
      case '64':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/064.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/064.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الطلاق':
      case '65':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/065.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/065.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'التحريم':
      case '66':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/066.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/066.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الملك':
      case '67':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/067.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/067.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'القلم':
      case '68':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/068.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/068.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الحاقة':
      case '69':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/069.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/069.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'المعارج':
      case '70':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/070.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/070.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'نوح':
      case '71':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/071.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/071.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الجن':
      case '72':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/072.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/072.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'المزمل':
      case '73':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/073.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/073.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'المدثر':
      case '74':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/074.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/074.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'القيامة':
      case '75':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/075.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/075.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الإنسان':
      case '76':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/076.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/076.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'المرسلات':
      case '77':
   
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/077.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/077.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'النبأ':
      case '78':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/078.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/078.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'النازعات':
      case '79':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/079.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/079.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'عبس':
      case '80':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/080.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/080.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'التكوير':
      case '81':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/081.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/081.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الانفطار':
      case '82':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/082.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/082.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'المطففين':
      case '83':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/083.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/083.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الانشقاق':
      case '84':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/084.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/084.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'البروج':
      case '85':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/085.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/085.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الطارق':
      case '86':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/086.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/086.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الأعلى':
      case '87':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/087.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/087.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الغاشية':
      case '88':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/088.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/088.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الفجر':
      case '89':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/089.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/089.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'البلد':
      case '90':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/090.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/090.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الشمس':
      case '91':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/091.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/091.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الليل':
      case '92':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/092.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/092.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الضحى':
      case '93':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/093.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/093.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الشرح':
      case '94':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/094.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/094.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'التين':
      case '95':

      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/095.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/095.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'العلق':
      case '96':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/096.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/096.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'القدر':
      case '97':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/097.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/097.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'البينة':
      case '98':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/098.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/098.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'الزلزلة':
      case '99':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/099.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/099.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'العاديات':
      case '100':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/100.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/100.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'القارعة':
      case '101':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/101.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/101.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'التكاثر':
      case '102':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/102.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/102.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'العصر':
      case '103':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/103.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/103.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الهمزة':
      case '104':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/104.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/104.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'الفيل':
      case '105':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/105.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/105.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'قريش':
      case '106':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/106.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/106.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'الماعون':
      case '107':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/107.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/107.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'الكوثر':
      case '108':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/108.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/108.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الكافرون':
      case '109':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/109.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/109.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'النصر':
      case '110':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/110.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/110.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'المسد':
      case '111':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/111.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/111.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الإخلاص':
      case '112':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/112.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/112.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الفلق':
      case '113':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/113.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/113.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الناس':
      case '114':
      
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/114.jpg" }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/albitaqat/114.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
       
        
    }


    if (body === 'Hi' || body === 'hi' || body === 'خدمة' || body === 'خدمه' || body === '#'){

      MenuNmber(from, 0)

      let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
      mesg += 'من فضلك قم بإرسال رقم الخدمة ✉️ \n\n\n'
      mesg += '1- قائمة القرآن الكريم 📖 \n'
      mesg += '2- قائمة الأذكار 📿 \n'
      mesg += '3- فيديوهات قرآن عشوائية 🎥 \n'
      mesg += '4- صورة عشوائية 🖼️ \n'
      mesg += '5- قائمة الملصقات 🪧 \n'
      mesg += '6- محاضرات عشوائية 🌾 \n'
      mesg += '7- قائمة القروبات ⚜️ \n\n\n\n'
      mesg += 'إحصائيات البوت \n'
      mesg += `عدد المحادثات الحالية : ${client.chats.length}\n`
      mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
      mesg += 'يمكنك متابعة البوت على تيليجرام عبر الحساب @adhk2r_bot 🤖'
      
     
      await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));


    }

  }
};
