let handler = async (m, { conn }) => {
let api-hyzer = `https://api.lolhuman.xyz/api/random/exo?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.exo', m)
}
handler.help = ['exo']
handler.tags = ['asupan', 'image']
handler.command = /^(exo)$/i

module.exports = handler
