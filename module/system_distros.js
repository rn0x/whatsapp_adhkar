import fs from 'fs-extra';

export default async function system_distros() {

    let os = fs.readFileSync('/etc/os-release', 'utf8');
    let opj = {}

    os?.split('\n')?.forEach((line, index) => {
        let words = line?.split('=')
        let key = words[0]?.toLowerCase()
        if (key === '') return
        let value = words[1]?.replace(/"/g, '')
        opj[key] = value
    })

    return opj

}