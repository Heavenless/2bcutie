
const Discord = require('discord.js');
const config = require('./config/config');
const PREFIX = "b!";
var bot = new Discord.Client();
const botStats = {};

bot.on("ready", function() {
   
    let statuses = ['2B BOT // -beta 0.1v', 'MADE BY NERO', 'Welcoming People!']
  
     setInterval(function() {
      
      let status = statuses[Math.floor(Math.random()*statuses.length)]
      
      bot.user.setPresence({ game: {name: status }, status: 'idle' });
    
    }, 5000)
    
  })


bot.on("ready", function() {
    console.log("Ready!")
    
  
});

bot.on('guildMemberAdd', member => {
    let embed = new Discord.MessageEmbed()
        .addField("💖 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨  💖 ", member.user.tag)
        .addField("Welcome to 【Ｃｉｔｙ　Ｒｕｉｎｓ】 a trophy hunting & NieR community, we would hope you to enjoy your time here and make sure you checkout the rules   ", "uwu")
        .setImage("https://media.giphy.com/media/XGPLifOZrwnxE0CbWt/giphy.gif")
        .setFooter("Made by @𝐍𝐞𝐫𝐨 💫 #8000  with Love! ")
        .setColor('#F4D5FF');
  let channel = member.guild.channels.cache.find(channel => channel.id === '750217219044016250');
  return channel.send({embed: embed})
    
});
       
bot.on('guildMemberRemove', member => {
    let embed = new Discord.MessageEmbed()
        .addField("*Initiating Black Box Signal* ", member.user.tag)
        .addField("An Android Black box has been activated, Farewell.")
        .setImage("https://media.giphy.com/media/hQFLfd8nCuBJZpIwRl/giphy.gif")
        .setFooter("Made by @𝐡𝐞𝐚𝐯𝐞𝐧𝐥𝐞𝐬𝐬#5598 with Love! ")
        .setColor('#AAB7B8');
    let channel = member.guild.channels.cache.find(channel => channel.id === '750971737268551701');
  return channel.send({embed: embed});


});



          
bot.login(process.env.BOT_TOKEN);
