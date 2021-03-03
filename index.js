let Discord = require("discord.js")
let client = new Discord.Client({ fetchAllMembers: true })
const MusicClient = require("discord-music-core")
const musicPlayer = new MusicClient("Youtube Api key")

client.on("message", message => {
  let prefix = 'sl/'
  if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
  if(command === "play"){
    if(!message.member.voiceChannel)return(message.channel.send("Please be in a voice channel!"))
    let searchArray = args.join(' ')
    musicPlayer.play(message, searchArray)
  }else if(command === "stop"){
    if(!message.member.voiceChannel)return(message.channel.send("Please be in a voice channel!"))
    musicPlayer.stop(message)
  }else if(command === "queue"){
    musicPlayer.showQueue(message)
  }else if(command === "np"){
    musicPlayer.nowPlaying(message)
  }else if(command === "loop"){
    if(!message.member.voiceChannel)return(message.channel.send("Please be in a voice channel!"))
    musicPlayer.loop(message)
  }else if(command === "skip"){
    if(!message.member.voiceChannel)return(message.channel.send("Please be in a voice channel!"))
    musicPlayer.skip(message)
  }
})

client.login("ODA3MTgzOTg1OTg1MzIzMDI5.YB0Sqw.dxz-RBouX4Ab3Ah3xXWeJPxnEnU")
