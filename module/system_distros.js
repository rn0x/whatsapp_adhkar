import fs from 'fs-extra';
import path from "path";

export default async function system_distros() {

    let opj = {}
    let __dirname = path.resolve();

    if (fs.existsSync(path.join(__dirname, `/etc/os-release`))) {
        let os = fs.readFileSync(path.join(__dirname, '/etc/os-release'), 'utf8');
        os?.split('\n')?.forEach((line, index) => {
            let words = line?.split('=')
            let key = words[0]?.toLowerCase()
            if (key === '') return
            let value = words[1]?.replace(/"/g, '')
            opj[key] = value
        })
    }

    return opj

}