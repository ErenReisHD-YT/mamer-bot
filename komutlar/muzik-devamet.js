const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const ayarlar = require('../ayarlar.json');
const youtube = new YouTube(ayarlar.youtube_api);

exports.run = async (client, message, args) => {
  const queue = client.queue;
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voice.channel;
        
    const a = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Bir sesli kanalda değilsin.**`)  
  if (!voiceChannel) return message.channel.send(a)

    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Şarkı başarıyla devam ettiriliyor...**`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    const b = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Şuanda herhangi bir şarkı çalmıyor.**`)
    if (!serverQueue) return message.channel.send(b);

};

exports.conf = {
    enabled: true,
    aliases: ['devam-et'],
    permLevel: 0
};

exports.help = {
    name: 'devamet',
    description: 'Duraklatılmış şarkıyı devam ettirir.',
    usage: 'devamet'
};
   