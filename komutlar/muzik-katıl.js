let { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  const serverQueue = client.queue
var voiceChannel = message.member.voice.channel
  const voiceChannelAdd = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Lütfen herhangi bir sesli kanala katılınız.`)
  if (!voiceChannel) return message.channel.send(voiceChannelAdd);
    var permissions = voiceChannel.permissionsFor(client.user); 
if (!permissions.has('CONNECT')) {
  const warningErr = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Herhangi bir sesli kanala katılabilmek için yeterli iznim yok.`)
  return message.channel.send(warningErr);
}
  voiceChannel.join()
 const err0s = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`🧪Sesli kanala katıldım..`) 
message.channel.send(err0s)
 }

exports.conf = {
    aliases: ['katil']
}

exports.help = {
    name: "katıl",
    description: "Sesli kanala katılır.",
    usage: "katıl"
}