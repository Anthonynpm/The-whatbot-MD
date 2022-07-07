const fs = require('fs')
const path = require('path')
let handler = async (m, { usedPrefix, command, text }) => {
    if (!text) throw `donde está el texto?\n\nejemplo: ${usedPrefix + command} menu`
    const filename = path.join(__dirname, `./${text}${!/\.js$/i.test(text) ? '.js' : ''}`)
    const listPlugins = fs.readdirSync(path.join(__dirname)).map(v => v.replace(/\.js/, ''))
    if (!fs.existsSync(filename)) return m.reply(`
'${filename}' extraviado!
${listPlugins.map(v => v).join('\n').trim()}
`.trim())
    m.reply(fs.readFileSync(filename, 'utf8'))
}
handler.help = ['getplugin'].map(v => v + ' [filename]')
handler.tags = ['owner']
handler.command = /^(getplugin|get ?plugin|gp)$/i

handler.rowner = true

module.exports = handler
