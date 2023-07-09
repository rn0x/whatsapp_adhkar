# Whatsapp_Adhkar واتسب أذكار

<br>

<p align="center">
  <img align="center" src="/README/1.png" alt="whatsapp_adhkar">
</p>

<br>

بوت أذكار يحتوي على العديد من الخدمات المهمه لكل مسلم ومنها

- القرآن الكريم (158 قارئ)
- الباحث القرآني نص + صورة - [**مثال**](https://github.com/rn0x/whatsapp_adhkar/blob/main/files/image/searchQuran.png)
- الباحث الحديثي 
- بطاقات القرآن الكريم
- صحيح البخاري (صور مصممة)
- حصن المسلم  (نص + صوت)
- التقويم الهجري
- فيديوهات عشوائية اكثر من 700 فيديو
- إرسال رسائل مجدولة لجميع القروبات المنظم لها (قرآن كريم , أذكار ,فيديوهات عشوائية , تذكير الجمعة)

<br><br>

# متطلبات التشغيل 

- git
- nodejs 16 ^
- Google Chrome 

# طريقة التثبيت لـ (Linux)


```bash
   > sudo apt-get install nodejs
   > sudo apt-get install git
   > sudo apt-get install google-chrome-stable
   > git clone https://github.com/rn0x/whatsapp_adhkar
   > cd whatsapp_adhkar
   > npm i
   > npm start
```




<br><br>

# طريقة التثبيت لـ (Windows) عبر PowerShell Administrator

يجب عليك اولاً تثبيت مدير الحزم choco ثم تثبيت المتطلبات 

```bash

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

```

```bash
   > choco install nodejs.install
   > choco install git
   > choco install googlechrome
   > git clone https://github.com/rn0x/whatsapp_adhkar
   > cd whatsapp_adhkar
   > npm i
   > npm start
```

# طريقة التثبيت لـ Android [ Termux ]

```bash
   > pkg update && pkg upgrade
   > pkg install proot-distro
   > proot-distro install alpine
   > proot-distro login alpine
   > apk update && apk add --no-cache nmap && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
  apk update && \
  apk add --no-cache \
  chromium
   > apk add --update nodejs npm git
   > git clone https://github.com/rn0x/whatsapp_adhkar
   > cd whatsapp_adhkar
   > npm i
   > npm start
```

### 🌱 ACTIVAR EN KOYEB 

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=https://github.com/Alsarmad/whatsapp_adhkar&branch=main&name=azkar)
# الترخيص 

[MIT](https://github.com/rn0x/whatsapp_adhkar/blob/main/LICENSE)
