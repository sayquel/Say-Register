const { MessageEmbed } = require('discord.js')
const data = require('quick.db')
const ayarlar = require('../ayarlar.json')
const settings = require('../managment/settings.json')



exports.run = async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setDescription(`Bu komutu kullanmak için \`Owner.\` Yetkisine İhtiyacın var ${settings.durumlar.yanlis}`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor(settings.renk.disquelkırmızı)).then(x => x.delete({timeout: 6500}));


let members = message.guild.members.cache.filter(member => member.roles.cache.has(settings.roller.katıldı) && member.voice.channelID != settings.kanallar.toplantı);
members.array().forEach((member, index) => {setTimeout(() => {member.roles.remove(settings.roller.katıldı).catch();}, index * 1250)});


let verildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has(settings.roller.katıldı) && !member.user.bot)
verildi.array().forEach((member, index) => {setTimeout(() => {member.roles.add(settings.roller.katıldı).catch();}, index * 1250)});


message.channel.send(new MessageEmbed().setDescription(`<@&${settings.roller.katıldı}> Rolü <#${settings.kanallar.toplantı}> Kanalında Bulunan Üyelere Dağıtılmaya Başladı.\n\n ${settings.durumlar.dogru} Toplam Rol Verilen Kullanıcı: \n \`${verildi.size}\` \n\n ${settings.durumlar.yanlis} Rolleri Geri Alınan Kullanıcı Sayısı: \n \`${members.size}\``).setColor(settings.renk.disquelmor).setTitle(`Disquel 🖤`).setThumbnail(message.guild.iconURL({dynamic:true})))}




exports.conf = {enabled: true, guildOnly: true, aliases: ["toplantı", "toplantı-kontrol", "yoklama"], permLevel: 0,}
exports.help = {name: "toplantıkontrol"}