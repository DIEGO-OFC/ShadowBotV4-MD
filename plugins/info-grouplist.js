let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nββ ${await conn.getName(jid)}\nβ€ ${jid} [${chat?.metadata?.read_only ? 'π½πΎ πΏπ°πππΈπ²πΈπΏπ°π½ππ΄' : 'πΏπ°πππΈπ²πΈπΏπ°π½ππ΄'}]\n\n`
m.reply(`*GRUPOS EN LOS QUE ESTA THE SHADOW BROKERS - BOT:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler
