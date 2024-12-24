const TelegramBot = require('node-telegram-bot-api');

// Replace with your API token
const token = '7913037388:AAE4Xim0BV1IbHsbaaBRrIm4-hIekVjbVHI';
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userFirstName = msg.from.first_name;

    // Compose the welcome message
    const welcomeMessage = `
👋 Hello ${userFirstName}!

Welcome to **[Your App Name]**! 🌟

🚀 Here's what you can do:
✨ Post your thoughts and content.
❤️ Like and comment on others' posts.
🤝 Follow your favorite users.
💰 Earn rewards by posting and completing tasks.

Let's get started on your journey to connect, create, and earn! 🎉

Type /help to learn more about available commands.
    `;

    // Send the message
    bot.sendMessage(chatId, welcomeMessage, { parse_mode: "Markdown" });
});
