const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple keep-alive server
app.get("/", (req, res) => {
    res.send("Bot is alive!");
});
app.listen(port, () => {
    console.log(`Keep-alive server running on port ${port}`);
});

// Your bot logic here
console.log("Bot started. Connect this logic to your Aternos AFK bot code.");
