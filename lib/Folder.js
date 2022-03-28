import fs from 'fs-extra';

export default function Folder() {

    if (fs.existsSync('./db') === false) {

        fs.mkdirSync('./db');

    }

    if (fs.existsSync('./db/Group') === false) {

        fs.mkdirSync('./db/Group');

    }

    if (fs.existsSync('./db/group_user.json') === false) {

        fs.writeJsonSync('./db/group_user.json', []);

    }

    if (fs.existsSync('./db/new_user.json') === false) {

        fs.writeJsonSync('./db/new_user.json', []);

    }

    if (fs.existsSync('./db/group_user.json') === false) {

        fs.writeJsonSync('./db/group_user.json', []);

    }

    if (fs.existsSync('./db/GroupsMenu.json') === false) {

        fs.writeJsonSync('./db/GroupsMenu.json', []);

    }

    if (fs.existsSync('./db/Menu.json') === false) {

        fs.writeJsonSync('./db/Menu.json', {});

    }

    if (fs.existsSync('./db/Sticker_Name.json') === false) {

        fs.writeJsonSync('./db/Sticker_Name.json', {});

    }

    if (fs.existsSync('./db/start.json') === false) {


        fs.writeJsonSync('./db/start.json', { start: true });

    }

}