let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'ingrese sus numero de celular qie sera interpetado', m)

	axios.get(`https://kocakz.herokuapp.com/api/primbon/nomorhoki?nomor=${text}`).then ((res) => {
	 	let hasil = `Numero de teléfono : ${res.data.result.hoki}\nPositivo: ${res.data.result.positif}\nNegativo : ${res.data.result.positif}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['nomorhoki'].map(v => v + ' <no hp>')
handler.tags = ['fun']
handler.command = /^(nomorhoki)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
