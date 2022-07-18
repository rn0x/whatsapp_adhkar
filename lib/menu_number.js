const { menu } = require('../menu/menu.js');
const { quran_menu } = require('../menu/quran_menu.js');
const { quran_idris } = require('../menu/quran_idris.js');
const { quran_mahar } = require('../menu/quran_mahar.js');
const { quran_almosa } = require('../menu/quran_almosa.js');
const { quran_alli } = require('../menu/quran_alli.js');
const { adhkar } = require('../menu/adhkar.js');
const { sticker_menu } = require('../menu/sticker_menu.js');
const { maker_sticker } = require('../menu/maker_sticker.js');
const { Groups } = require('../menu/Groups.js');
const { Group_Name } = require('../menu/Group_Name.js');
const { Group_Url } = require('../menu/Group_Url.js');
const { albitaqat } = require('../menu/albitaqat.js');
const { Abdullrahman_Alsudais } = require('../menu/Abdullrahman_Alsudais.js');
const { Khalid_Galilee } = require('../menu/Khalid_Galilee.js');
const { hisn_almuslim } = require('../menu/hisn_almuslim.js');


const menu_number = [
  {
    menu_name: menu,
  },
  {
    menu_name: quran_menu,
  },
  {
    menu_name: quran_idris,
  },
  {
    menu_name: quran_mahar,
  },
  {
    menu_name: quran_almosa,
  },
  {
    menu_name: quran_alli,
  },
  {
    menu_name: adhkar,
  },
  {
    menu_name: sticker_menu,
  },
  {
    menu_name: maker_sticker,
  },
  {
    menu_name: Groups,
  },
  {
    menu_name: Group_Name,
  },
  {
    menu_name: Group_Url,
  },
  {
    menu_name: albitaqat,
  },
  {
    menu_name: Abdullrahman_Alsudais,
  },
  {
    menu_name: Khalid_Galilee,
  },
  {
    menu_name: hisn_almuslim
  }
];

module.exports = {
  menu_number: menu_number
}