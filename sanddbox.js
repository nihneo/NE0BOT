const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('message', message => {
	console.log(message.content);
});
client.login('ODMyMzc3ODY4MTM3OTIyNjEw.YHi6TA.GdDDlsAMGJD8ovCAxeZoLJBc9EY');




client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === 'n.av') {
        message.reply(message.author.displayAvatarURL());
  }
});
client.login('ODMyMzc3ODY4MTM3OTIyNjEw.YHi6TA.GdDDlsAMGJD8ovCAxeZoLJBc9EY');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'n.hi') {
    msg.reply('Hiya! Nice to meet you. My name is Nin. For a list of my commands, say n.help.');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'n.help') {
    msg.reply('Here is a list of all of my commands so far. My creators are making more as we speak!  n.help - sends command list n.ping - makes me respond with pong! n.hi - Greet me, so I can greet you back! n.angry - makes me mad!');

  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'n.angry') {
    msg.reply('I dont give a fuck about you and your little fucking games haha ohh my fucking god you acutally think that you matter in this world holy shit what the fuck Im fucking dying xD really wow just no you are NOTHING in this fucking world tell you what you are a fucking joke NO ONE CARES ABOUT YOU I HOPE YOU FUCKING GET CANCER AND THEN SURVIVE CANCER AND THEN THE CANCER COMES BACK AGAIN HOLY SHIT SERIOUSLY????? xDDDDDDDDDD WOW you are GARBAGE compared to me youre cock is smaller than a cockroach FAGGOT xDDDD SUCK MY GIRLFRIENDS COCK YOU FUCKING LOSER I HOPE A ANGRY JEWISH NIGGER FAGGOT COMES TO YOUR HOUSE AND RIPS YOUR INTESTINES OUT AND BLOOD GOES EVERYWHERE AND THEN HE SHOVES THE INTESTINES DOWN YOUR FUCKING LITTLE THROAT AND YOU CHOKE UNTIL YOUR ABOUT TO DIE BUT WAIT THERES MORE HE RIPS EACH OF YOUR LIMBS OFF AND YOU CRY IN PAIN THEN YOU DIE AND THEN HE BRINGS YOU BACK TO LIFE AND YOU FUCKING DIE AGAINNN!!!!!!!!!!!!!! I HATE YOU SO MUCH!!!!!!!!!!!!!!!!!!!!!!');
  }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'n.updown') {
    msg.reply('˙ʇı ןןɐɔ noʎ ɹǝʌǝʇɐɥʍ ɹo ,ɐʇǝq, pǝɹǝpısuoɔ buıǝq ɟo ʞɔıs ɯ,ı ˙ʇı ʇnoqɐ ʎɹɔ oʇ ǝɯ oʇ ʞןɐʇ ʎןuo puɐ ‘ʇıɥs ǝʞıן ɯǝɥʇ ʇɐǝɹʇ oɥʍ sʎnb bɐqǝɥɔnop ɹǝʇɟɐ ob sʎɐʍןɐ sןɹıb ǝsǝɥʇ puǝ ǝɥʇ uı ˙ʎpɐן,ɯ ɹoɟ buıɥʇʎuɐ op pןnoʍ puɐ ‘qoظ ǝɔıu ɐ ʞɹoʍ ‘ʎnb ǝɔıu ɐ ɯ,ı ˙ǝuoz puǝıɹɟ ǝɥʇ uı ʇnd buıǝq sʎɐʍןɐ ı ɯɐ ʎɥʍ.');
  }
});

 const prefix = "n.";
client.on("message", (message) => {

  if (!message.content.startsWith("n.")) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
   } else
  if (message.content.startsWith(prefix + "terrible")) {
    message.channel.send("Cardi B's music.");
   } else
 if (message.content.startsWith(prefix + 'beep')) 
	message.channel.send('Are you trying to speak robot?');
    else
 if (message.content.startsWith(prefix + 'boop')) 
	message.channel.send('Boop somebody else, ya weeb!');
    else
 if (message.content.startsWith(prefix + 'ily')) 
	message.channel.send('I love me too.');
    else
 if (message.content.startsWith(prefix + 'imposter')) 
	message.channel.send('pretty sus, dont make me mute you.');
  else
   if (message.content === `${prefix}servername`) {
	message.channel.send(`This server's name is: ${message.guild.name}`);
   } else 
  if (message.content === `${prefix}server`) {
	message.channel.send(`Server name: ${message.guild.name}\nMember count: ${message.guild.memberCount}`);
  } else 
  if (message.content === `${prefix}myinfo`) {
	message.channel.send(`Your gamer tag: ${message.author.username}\nYour player ID: ${message.author.id}`);

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}

});

client.login(ODMyMzc3ODY4MTM3OTIyNjEw.YHi6TA.GdDDlsAMGJD8ovCAxeZoLJBc9EY);
  }

 const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
} 
 if (command === 'prune') {
	const amount = parseInt(args[0]);
   if (isNaN(0)) {
		return message.reply('I gotta have more then 1 message to prune, idiot.');
	if (isNaN(amount)) {
	return message.reply('that isnt a valid answer, is it, you idiot?');
 if (amount < 2 || amount > 100) {
	return message.reply('you need to input a number between 2 and 100, dummy.');
  message.channel.bulkDelete(amount);

