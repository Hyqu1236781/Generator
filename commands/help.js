const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail('https://i.imgur.com/b5MVGYq.png')
.setFooter('©️ CopyRight xaq™️')
.addField('__Help__','__**GENERATOR COMMANDS**__\n\n`.spotify` To Generate a Spotify Account.\n`.nitro` To Generate a Nito Codes. \n`.hulu` To Generate a Hulu Account. \n`.steam` To generate a Steam account. \n`.valorant` To generate a Valorant Account. \n`.epicgames` To Generate an Epic Games Account.\n`.minecraft` To Generate a Minecraft Premium Account.\n`.nordvpn` To Generate a NordVPN Account .\n`.origin` To generate an Origin Account.\n\n **✩**  Remember that you are using a free generator, this account may not work!');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
