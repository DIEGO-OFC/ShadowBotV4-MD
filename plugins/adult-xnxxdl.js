import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*LOS COMANDOS +18 ESTAN DESACTIVADOS EN ESTE GRUPO, SI ES ADMIN Y DESEA ACTIVARLOS  USE EL COMANDO #enable modohorny*'
if (!args[0]) throw `*[β οΈ] INGRESE UN ENLACE DE XNXX, EJEMPLO: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
try {
await conn.reply(m.chat, '[β] πΈπ π£ππππ ππ π‘π π πππππ ππππππ πππ, ππ ππππ π’π ππππππ‘π ππ ππ ππ’π ππ  πππ£ππππ..\n\nοΉ£ α΄Κ α΄Ιͺα΄α΄α΄α΄ α΄α΄ α΄Ι΄α΄ Ιͺα΄ α΄α΄α΄α΄Ι΄α΄α΄ α΄α΄Κ α΄α΄sα΄ Κ α΄α΄Κα΄α΄Ιͺα΄ΜΙ΄ α΄α΄Κ α΄ Ιͺα΄α΄α΄', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*ERROR, POR FAVOR VUELVA A INTENTARLO*\n\n*- COMPRUEBE QUE EL ENLACE SEA SIMILAR A:*\n*β https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*')
}}
handler.command = /^(xnxxdl)$/i
export default handler
