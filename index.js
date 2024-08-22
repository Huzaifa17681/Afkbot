
const mineflayer = require("mineflayer");
const options = {
  host: "mc.blockdrop.org",
  username: "zinx",
  version: "1.20",
};

const bot = mineflayer.createBot(options);
bot.once("login", () => {
  console.log("Joined");
  LoginF();
});

bot.on("message", (message) => {
  console.log("[Chat/Server] " + message.toString());
});

function LoginF() {
  bot.chat("/login zinx");
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

bot.once("spawn", async function () {
  await sleep(1000);
  bot.setQuickBarSlot(4);
  await sleep(1000);
  bot.activateItem();
  await sleep(1000);
  bot.clickWindow(14, 0, 0);

});

// Fixed event name from 'messagestr' to 'message'
bot.on("message", function (message) {
  console.log("Received message:", message.toString());
});
