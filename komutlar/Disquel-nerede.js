const { MessageEmbed } = require('discord.js')
const data = require('quick.db')
const ayarlar = require('../ayarlar.json')
const settings = require('../managment/settings.json')
const jdb = new data.table("cezalar");
const kdb = new data.table("kullanici");
exports.run = async(client, message, args) => {
if(![settings.roller.botcommand].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setDescription(`${message.author} bu komutu kullanabilmek için <@&${settings.roller.botcommand}> rolüne ihtiyacın var. ${settings.durumlar.dogru}`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor(settings.renk.disquelvip)).then(x => x.delete({timeout: 6500}));
let disquel;
let disquel1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let disquel2 = message.guild.members.cache.get(args[0]);
if(!disquel1) return message.channel.send(new MessageEmbed().setTimestamp().setColor('f0ff02').setDescription(`**Bir ID Girmelisin**`))
if (disquel1) {disquel = disquel1;}
if (disquel2) {disquel = disquel2;}
if (!disquel) {disquel = message.member;}
let ses = disquel.voice.channel;
if (!ses) {message.channel.send(new MessageEmbed().setColor('f0ff02').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(`${member} Adlı üye herhangi bir \`Ses Kanalında Değil\` ${settings.durumlar.dogru} `));}
if (ses) {message.channel.send(new MessageEmbed().setColor('#f0ff02').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("<@"+disquel.id+"> Adlı Üye `"+ses.name+"` Adlı Ses Kanalında "));}};

exports.conf = {enabled: true, guildOnly: true, aliases: ["ses"], permLevel: 0}
exports.help = {name: "kontrol"};