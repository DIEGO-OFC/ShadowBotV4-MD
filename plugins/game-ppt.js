let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
if (!args[0]) return conn.sendHydrated(m.chat, '*PIEDRA, PAPEL, O TIJERA\n\nPUEDES USAR LOS BOTONES PARA JUGAR O TAMBIEN PUEDES USAR ESTOS COMANDOS:\n.ppt piedra\n.ppt papel\n.ppt tijera\n\nuse en minúscula*', wm, pp, null, null, null, null, [
['𝙋𝙞𝙚𝙙𝙧𝙖 🥌', `${usedPrefix + command} piedra`],
['𝙋𝙖𝙥𝙚𝙡 📄', `${usedPrefix + command} papel`],
['𝙏𝙞𝙟𝙚𝙧𝙖 ✂️', `${usedPrefix + command} tijera`]
], m)
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 Empate!\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 Shadow: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 Shadow: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 Shadow: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 Shadow: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 Shadow: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 Shadow: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 Shadow: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 Shadow: ${astro}\n❌ Premio -300 XP*`)
}
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
