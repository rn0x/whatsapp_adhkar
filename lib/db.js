const fs = require('fs-extra');


module.exports = function db() {

    if (fs.existsSync('./db') === false ) {

        fs.mkdirSync('./db');
  
    }

    if (fs.existsSync('./db/Group') === false ) {

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
    
}