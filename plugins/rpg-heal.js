import { join } from 'path' 
import { promises } from 'fs'
let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
if (user.health >= 100) return conn.sendButton(m.chat, `*TU SALUD ESTA LLENA*β€οΈ`, wm, imgr + `SALUD: ${user.health}`, [
[`ποΈ AVENTURAR`, `${usedPrefix}adventure`]], m)
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
if (user.potion < count) return conn.sendButton(m.chat,`${htki} ππΈπ½ πΏπΎπ²πΈπΎπ½π΄π ${htka}`, 
`π½ECESITAS ${count - user.potion} POCION π₯€ PARA CURARTE
SALUD Β» ${user.health} β€οΈ
POCION Β» ${user.potion} π₯€
COMPRA POCION O PIDELE A ALGUIEN`.trim(), imgr + 'POCION BAJA', [
[`COMPRAR POCIΓN π₯€`, `${usedPrefix}buy potion ${count - user.potion}`],
[`PEDIR AYUDA π£`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* π₯€ 
*Β» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)
user.potion -= count * 1 //1 potion = count (1) 
user.health += heal * count 
conn.sendButton(m.chat, `*βββγ β ππ°π»ππ³ π²πΎπΌπΏπ»π΄ππ° γβββ*`, `EEXITOSAMENTE USO ${count} DE POCIONπ₯€ PARA RECUPERAR SU SALUD\n\πSALUD Β» ${user.health} β€οΈ`, imgr + 'SALUD COMPLETADA', [
[`AVENTURAR ποΈ`, `${usedPrefix}adventure`]], m)}
handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
export default handler
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)}
