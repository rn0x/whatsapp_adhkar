import fs from 'fs-extra';
import path from "path";

/** 
@param {string} type - group or private
*/

export default async function getDatabase(type) {

    let __dirname = path.resolve();
    let database = fs.readdirSync(path.join(__dirname, './database'));
    var group = []
    var private_ = []

    for (let item of database) {

        let id = item?.split('.json')[0]
        let existsSync = fs.existsSync(path.join(__dirname, `./database/${item}`));

        if (existsSync) {

            let chatJson = fs.readJsonSync(path.join(__dirname, `./database/${item}`));

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