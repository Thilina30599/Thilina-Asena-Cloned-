const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'mmpack', fromMe: true, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/0b4f1e3de4f687d8d01b8.jpg";
        r_text[2] ="https://telegra.ph/file/0b4f1e3de4f687d8d01b8.jpg";
        r_text[3] ="https://telegra.ph/file/0b4f1e3de4f687d8d01b8.jpg";
        r_text[4] ="https://telegra.ph/file/febe5fafe800433d3f3a2.jpg";
        r_text[5] ="https://telegra.ph/file/febe5fafe800433d3f3a2.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '   *╔═════◉Thilina◉═════╗*\n           🤖𝓣𝓱𝓲𝓵𝓲𝓷𝓪 𝓑𝓸𝓽🤖\n*❖═මීම් ලැයිස්තුව═❖*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.macn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v* '})
    }));
}
else if (Config.WORKTYPE == 'public') {
	
	Asena.addCommand({pattern: 'mmpack', fromMe: false, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

                r_text[1] = "https://telegra.ph/file/0b4f1e3de4f687d8d01b8.jpg";
        r_text[2] ="https://telegra.ph/file/0b4f1e3de4f687d8d01b8.jpg";
        r_text[3] ="https://telegra.ph/file/0b4f1e3de4f687d8d01b8.jpg";
        r_text[4] ="https://telegra.ph/file/febe5fafe800433d3f3a2.jpg";
        r_text[5] ="https://telegra.ph/file/febe5fafe800433d3f3a2.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' *╔═════◉Thilina◉═════╗*\n           🤖𝓣𝓱𝓲𝓵𝓲𝓷𝓪 𝓑𝓸𝓽🤖\n*❖═මීම් ලැයිස්තුව═❖*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.macn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v* '})
    }));
}
