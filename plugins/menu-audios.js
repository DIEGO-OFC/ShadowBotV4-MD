const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*_ãð Hola ${name} ðå½¡_*
*<MENU DE AUDIOS/>*
- Escribe las palabras/frases tal como estan, no hace falta poner ningun prefijo (#, ., *, etc) 

Â° à¶¬âð _Quien es tu sempai botsito 7w7_
Â° à¶¬âð _Te diagnostico con gay_
Â° à¶¬âð _A nadie le importa_
Â° à¶¬âð _Fiesta del admin_
Â° à¶¬âð _Fiesta del administrador_ 
Â° à¶¬âð _Vivan los novios_
Â° à¶¬âð _Feliz cumpleaÃ±os_
Â° à¶¬âð _Noche de paz_
Â° à¶¬âð _Buenos dias_
Â° à¶¬âð _Buenos tardes_
Â° à¶¬âð _Buenos noches_
Â° à¶¬âð _Audio hentai_
Â° à¶¬âð _Chica lgante_
Â° à¶¬âð _Feliz navidad_
Â° à¶¬âð _Vete a la vrg_
Â° à¶¬âð _Pasa pack Bot_
Â° à¶¬âð _Atencion grupo_
Â° à¶¬âð _Marica quien_
Â° à¶¬âð _Murio el grupo_
Â° à¶¬âð _Oh me vengo_
Â° à¶¬âð _tio que rico_
Â° à¶¬âð _Viernes_
Â° à¶¬âð _Baneado_
Â° à¶¬âð _Sexo_
Â° à¶¬âð _Hola_
Â° à¶¬âð _Un pato_
Â° à¶¬âð _Nyanpasu_
Â° à¶¬âð _Te amo_
Â° à¶¬âð _Yamete_
Â° à¶¬âð _BaÃ±ate_
Â° à¶¬âð _Es puto_
Â° à¶¬âð _La biblia_
Â° à¶¬âð _Onichan_
Â° à¶¬âð _Mierda de Bot_
Â° à¶¬âð _Siuuu_
Â° à¶¬âð _Epico_
Â° à¶¬âð _Shitpost_
Â° à¶¬âð _Rawr_
Â° à¶¬âð _UwU_
Â° à¶¬âð _:c_
Â° à¶¬âð _a_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/DIEGO-OFC/ShadowBotV4-MD', 'GITHUB', null, null, [
['ð¼ð´ð½ð ð¿ðð¸ð½ð²ð¸ð¿ð°ð»', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menÃº2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio|keyaudio|keyaudios)$/i
handler.fail = null
export default  handler
