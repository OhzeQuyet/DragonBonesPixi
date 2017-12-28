import * as fs from 'fs'
import * as path from 'path'

const Path = path.resolve(__dirname, 'out', 'dragonBones.d.ts')
const Export = '\r\nexport namespace dragonBones {}'
fs.appendFile(Path, Export, (err) => {
    if (err) console.log('Error appendFile: ', err)
    console.log('Write successfully!')
})