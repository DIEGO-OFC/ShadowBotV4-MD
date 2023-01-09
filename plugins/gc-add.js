let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, args }) => {  
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 𝚃𝙸𝙴𝙽𝙴 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙴𝙻 𝚄𝚂𝙾 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*'
if (!args[0]) throw '*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝚁*'    
try {    
let _participants = participants.map(user => user.id)
let users = (await Promise.all(
text.split(',')
.map(v => v.replace(/[^0-9]/g, ''))
.filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
.map(async v => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
const response = await conn.query({ tag: 'iq', attrs: { type: 'set', xmlns: 'w:g2', to: m.chat }, content: users.map(jid => ({ tag: 'add', attrs: {}, content: [{ tag: 'participant', attrs: { jid } }]}))})
const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
const add = getBinaryNodeChild(response, 'add')
const participant = getBinaryNodeChildren(add, 'participant')
for (const user of participant.filter(item => item.attrs.error == 403)) {
const jid = user.attrs.jid
const content = getBinaryNodeChild(user, 'add_request')
const invite_code = content.attrs.code
const invite_code_exp = content.attrs.expiration
let teks = `*No fue posible añadir a @${jid.split('@')[0]}*\n*Enviando invitacion a su privado...*`
m.reply(teks, null, { mentions: conn.parseMention(teks)})
let captionn = `Hey!! Hola, me presento, soy The Shadow Brokers - Bot, y soy un Bot para WhatsApp, una persona del grupo utilizo el comando para añadirte al grupo, pero no pude agregarte, asi que te mando la invitacion para que te agregues, te esperamos!!`    
var messaa = await prepareWAMessageMedia({ image: jpegThumbnail }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ groupInviteMessage: { groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail }}), { userJid: jid })
await conn.relayMessage(jid, groupInvite.message, { messageId: groupInvite.key.id })}
} catch {
throw '*El numero se salio recientemente*\n*La unica manera de añadirlo es por medio del enlace del grupo. Usa ${usedPrefix}link para obtener el enlace*'
}}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.admin = handler.group = handler.botAdmin = true
export default handler
