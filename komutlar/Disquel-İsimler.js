const Discord = require("discord.js"),
client = new Discord.Client();
const disqueldb = require("quick.db");
const settings = require('../managment/settings.json')

module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setFooter("Disquel 🖤").setColor("fff619").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let disquel = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let isimler = disqueldb.get(`isimler.${disquel.id}`) || [];
isimler = isimler.reverse();    
let disquelListe = isimler.length > 0 ? isimler.map((value) => `\`${value.İsim}\``).join("\n") : `**Geçmiş İsimleri Bulunamadı <a:carp:803311815441383424>**`;


message.channel.send(embed.setDescription(`${disquel} Adlı Üyenin Geçmiş isimleri

${disquelListe}
`))

};
exports.conf = {enabled: true, guildOnly: true, aliases: ["geçmiş", "isimler"]};
exports.help = {name: 'isimler'};

//---GENÇLER ÇOK YORULDUM ANLATAMIYORUM AMA ERKEK KADIN YERLERİNİ AÇIKLADIM İYİ İNCELERSENİZ ANLARSINIZ---//
