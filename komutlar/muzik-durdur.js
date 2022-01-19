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
        
    const err1 = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Bir sesli kanalda değilsin.**`)  
    if (!voiceChannel) return message.channel.send(err1);
    const err2 = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Şuanda herhangi bir şarkı çalmıyor.**`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new MessageEmbed()
    .setColor("B71C1C")
    .setDescription(`**Şarkı başarıyla durduruldu ve odadan ayrıldım!**`)
    serverQueue.connection.dispatcher.destroy();
    voiceChannel.leave();
    message.channel.send(songEnd);
};

exports.conf = {
    enabled: true,
    aliases: ['stop'],
    permLevel: 0
};

exports.help = {
    name: 'durdur',
    description: 'Oynatılan/çalan şarkıyı kapatır.',
    usage: 'durdur'
};
