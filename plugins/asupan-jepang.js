let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/japan'
    conn.sendButtonImg(m.chat, api-hyzer, 'aqui tiene', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.jepang', m)
}
handler.help = ['jepang']
handler.tags = ['asupan']
handler.command = /^(jepang)$/i

module.exports = handler

