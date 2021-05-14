const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight xaq™️')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`,spotify`: 0.\n`,nitro`: 4320001.\n`,hulu`: 3152.\n`,uplay`: 4590.\n`,minecraft`: 114.\n`,epicgames`: 0.\n`,valorant`: 655.\n`,steam`: 53.\n`,nordvpn`: 1472.\n`,origin` 3809.\n\n **✩** ');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
