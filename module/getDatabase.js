import fs from 'fs-extra';


/** 
@param {string} type - group or private
*/

export default async function getDatabase(type) {

    let database = fs.readdirSync('./database');
    var group = []
    var private_ = []

    for (let item of database) {

        let id = item.split('.json')[0]
        let existsSync = fs.existsSync(`./database/${item}`);

        if (existsSync) {

            let chatJson = fs.readJsonSync(`./database/${item}`);

            if (chatJson?.isGroup) {
                group.push(id);
            }

            else if (chatJson?.isGroup === false) {
                private_.push(id);
            }
        }

    }

    if (type === 'group') {
        return group
    }

    else if (type === 'private') {
        return private_
    }

}