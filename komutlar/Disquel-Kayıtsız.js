const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
const settings = require('../managment/settings.json')
exports.run = async (client, message, args) => {



//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬GEREKLİ ŞEYLERİ TANIMLADIKTAN SONRA EKSİK GİRİLEN KISIMLARA BİR MESAJ ATMASINI SAĞLAYACAĞIZ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//


if(!message.member.roles.cache.get(settings.roller.botcommand) && !message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Bu komutu kullanmak için \`<@&${settings.roller.botcommand}>\` yetkisine sahip olmalısın.`)
.setColor(settings.renk.disquelkırmızı))

let disquel = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(new MessageEmbed().setDescription(`Lütfen tüm argümanları düzgün yerleştiriniz ve tekrar deneyiniz. \nÖrnek \`.kayıtsız @Disquel/ID\``).setColor("#fff619")).then(msg => msg.delete({timeout: 5000}))




//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Hatalar Bitti Ve Başarılı Mesajı Atıyoruz▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//



if(message.member.roles.highest.position <= disquel.roles.highest.position) return 
if(member.manageable)  disquel.setNickname(member.user.username).catch();
let digerroller = [];
disquel.roles.cache.filter(r => r.id).map(r => {digerroller.push(r.id)})
disquel.roles.remove(digerroller)
await disquel.roles.add(settings.roller.kayıtsızrol)
disquel.roles.add(settings.roller.kayıtsızrol)
message.channel.send(new MessageEmbed().setDescription(`${disquel} Adlı kullanıcı ${message.author} tarafından kayıtsıza atıldı! | <@&${settings.roller.kayıtsızrol}>`).setColor("#fff619")).then(msg => msg.delete({timeout: 10000}))

message.react(settings.durumlar.dogru)
}  

exports.conf = { enabled: true, guildOnly: true , aliases: ["kayıtsız", "unregsiter"]}
exports.help = { name: "kayıtsız"}