/*Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'workingbot', fromMe: false}, (async (message, match) => {

    await message.sendMessage("*Bang!! Bang!! My Bot is 🤖𝓣𝓱𝓲𝓵𝓲𝓷𝓪 𝓑𝓸𝓽🤖*");

}));
