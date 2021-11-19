module.exports = {
	name: 'restart',
	category: 'owner',
	run: async (client, message, args) => {
		if (message.author.id !== '852901991722123274') {
			return message.channel.send('Geliştiricim olmadan bu komutu kullanamazsın!');
		}
		await message.channel.send('Bot restartlanıyor...')


		return process.exit();
	},
};