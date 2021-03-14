const { MessageEmbed } = require('discord.js');
const config = require("../ayarlar.json")
const settings = require('../managment/settings.json')


exports.run = async(client, message, args) => {
if(![settings.roller.botcommand].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setDescription(`${message.author} bu komutu kullanabilmek için <@&${settings.roller.botcommand}> rolüne ihtiyacın var. ${settings.durumlar.yanlis}`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor(settings.renk.disquelkırmızı)).then(x => x.delete({timeout: 6500}));
const kanal = message.member.voiceChannel
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));



if(!member) return;
if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Etiketlenen Üye Sizinle \`Aynı/Üst\` Pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
message.guild.member(member.id).voice.setChannel(null)



   message.channel.send(new MessageEmbed().setDescription(`${member} Adlı Üyenin Bağlantısı ${message.author} Tarafından Kesildi. \`${kanal}\``).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#7289D').setTimestamp()).then(x => x.delete({timeout: 10000}));
}


exports.conf = { 
enabled: true, 
guildOnly: true, 
aliases: ["ses-kes"]
}

exports.help = {
name: "kes" 
}