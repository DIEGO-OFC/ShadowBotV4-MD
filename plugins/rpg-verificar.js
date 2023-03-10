import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `β οΈ YA ESTAS REGISTRADO/A\n\nΒΏQUIERE VOLVER A REGISTRARSE?\n\n πUSE ESTE COMANDO\n*${usedPrefix}unreg* <NΓΊmero de serie>`
  if (!Reg.test(text)) throw `*β οΈ FORMATO INCORRECTO*\n\n*ββ USO DEL COMANDO: ${usedPrefix + command} nombre.edad*\n*ββ Ejemplo: ${usedPrefix + command} Shadow.18*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*β οΈ DEBES PONER UN NOMBRE*'
  if (!age) throw '*β οΈ LA EDAD NO PUEDE ESTAR VACIA*'
  if (name.length >= 30) throw 'β οΈ EL NOMBRE ES DEMASIADO LARGO' 
  age = parseInt(age)
  if (age > 100) throw '*β οΈ como sigues vivo con esa edad viejo? π΄π»*'
  if (age < 5) throw '*β οΈ un bebΓ© que sabe usar WhatsApp? π²*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `βββΒ°ββ¬ *PERFIL* β­βΒ°βββ
β
β£β ββββββββββββ β β
ββ’ π₯ *NOMBRE:* ${name}
ββ’ π *EDAD:* ${age} aΓ±os
ββ’ ποΈ *NΓMERO DE SERIE:* 
β ${sn}
βββββββββββββββ`
let author = global.author
conn.sendButton(m.chat, caption, `Β‘EL NUMERO DE SERIE SIRVE PARA BORRAR TU RESGISTRO EN EL BOT!\n${author}`, [['PERFIL COMPLETO', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
