const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('782665567264833566') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL())
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Youtube ErenReisHD & Mami Oyunda TR`)
        .setDescription(`
me!çal ➠ Belirtilen müziği oynatmayı sağlar.
me!geç ➠ Sıradaki müziğe geçiş yapar.
me!devam ➠ Müziği devam ettirir.
me!ses ➠ Müziğin sesini ayarlar.
me!kapat ➠ Müziği kapatır.
me!tekrar ➠ Müzik bittikten sonra tekrar açar.` )  
        .setThumbnail(client.user.avatarURL())
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL())
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};