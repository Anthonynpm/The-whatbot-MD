let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/hijaber'
    conn.sendButtonImg(m.chat, api-hyzer, 'aqui tiene', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i

module.exports = handler
