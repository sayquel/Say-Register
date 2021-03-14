const Discord = require("discord.js");//Disquel#1485
const mapping = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
};



//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬BURADA SAYILARIMIZI TANIMLADIK İSTERSENİZ  EMOJİLİDE YAPABİLİRSİNİZ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//




"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {

  let toplam = message.guild.memberCount;
  let disquelsunucu = 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let disquelonline =
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let tag = message.guild.members.cache.filter(m => m.user.username.includes("Disquel")).size;
  let disqueltagdakiler = 
      `${tag}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let disquelses =
      `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let boost = message.guild.premiumSubscriptionCount
  let disquelboostcuk = `${boost}`.split("").map(a => mapping[a] || '0')
  .join("")


  //-------TANIMLARIMIZ BİTTİ SIRADA .SAY MESAJINI ATMA KISMINDA-----//
  const disquel = new Discord.MessageEmbed()
  .setDescription(`\`•\` Seste toplam **${disquelses}** kullanıcı var.
\`•\` Toplam **${disqueltagdakiler}** kişi tagımıza sahip.
\`•\` Sunucumuzda toplam **${disquelsunucu}** üye var.
\`•\` Sunucumuza toplam **${disquelboostcuk}** takviye yapılmış.
\`•\` Sunucumuzda toplam **${disquelonline}** çevrimiçi üye var.`)
.setColor("#fff619");
  message.channel.send(disquel)//kurulumu yapamazsanız Disquel#1845
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: " DİSQUELLLLLLLLLLLLLLLLLLLLLLL",
  desscription: "disquel"
};//disquel