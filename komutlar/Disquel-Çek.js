const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply("Ses kanalında olman lazım!");
}
const filter = (reaction, user) => {
return ['802945756754345985', '803311815441383424'].includes(reaction.emoji.name) && user.id === disquelxd.id;
};
  
let disquelxd = message.mentions.members.first()
if (!disquelxd) return message.channel.send('Bir Kullanıcı Belirt.');

let member = message.guild.member(disquelxd);

if (!member.voice.channel) return message.channel.send('Etiketlenen Kullanıcı Ses Kanalında Değil.').then(m => m.delete,{timeout: 5000});

const voiceChannel = message.member.voice.channel.id;
if (!voiceChannel) return;
  
let log = new Discord.MessageEmbed()
.setColor("#7289D")
.setDescription(`${disquelxd} | ${message.author} Adlı Üye Seni \`${message.member.voice.channel.name}\` Adlı Odaya Davet Ediyor Kabul Ediyor Musun ?`)
  
let mesaj = await message.channel.send(log)
await mesaj.react("802945756754345985")
await mesaj.react("803311815441383424")
mesaj.awaitReactions(filter, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.name === '802945756754345985') {
let kabul = new Discord.MessageEmbed()
.setColor("0x348f36")
.setDescription(`${disquelxd} Teklif Kabul edildi `)
message.channel.send(kabul)
disquelxd.voice.setChannel(message.member.voice.channel.id)
} else {
let disquel = new Discord.MessageEmbed()
.setColor("0x800d0d")
.setDescription(`${disquelxd} Teklif Reddedildi `)
message.channel.send(disquel)
}
})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["gel"],
  permLevel: 0,
}

exports.help = {
  name: 'çek'

}