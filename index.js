const { Client, Intents, ActivityType, ButtonBuilder, ButtonStyle, SlashCommandBuilder} = require("discord.js");
const { token } = require('./config.json');
const { prefix } = require('./prefix.json');


const maxNumber = 100; // 猜數字範圍最大值
const minNumber = 1; // 猜數字範圍最小值

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// 生成一個隨機數字
function generateRandomNumber() {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

client.on("ready", () => {
    console.log("機器人已經成功上線且載入成功!");
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;
   
    const args = message.content.slice(prefix.length).split(" ");
    switch (args[0]) {
      case "intro":
        message.reply("加密人俱樂部(Crypto Humans Club)是由5000個Crypto Humans NFT所組成的NFT項目，加密人既是收藏品，也是加密人俱樂部的會員卡，因此享有會員專屬權益，只要是會員，除了等待NFT的增值外，會員可以透過我們的路線圖解鎖尚未開放的領域以及權益。每個加密人價格是0.15ETH，遊戲規則很簡單，持有加密人便是我們的成員之一，可以加入我們專屬會員專區，只要是成員都能定期獲得獎勵,持有加密人越多，獎勵也越多，也能得到高級會員身份，以及隨加密人的發展逐漸增加的各種福利。");
    }
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;
   
    const args = message.content.slice(prefix.length).split(" ");
    switch (args[0]) {
      case "os":
        message.reply("https://opensea.io/collection/cryptohumansclub");
    }
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;
   
    const args = message.content.slice(prefix.length).split(" ");
    switch (args[0]) {
      case "lobby":
        message.reply("<#920168613653127208>\n<#938004528299667497>\n<#1009098931382263850>\n<#964159444764229642>\n<#946728852330254376>");
    }
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;
   
    const args = message.content.slice(prefix.length).split(" ");
    switch (args[0]) {
      case "role_en":
        message.reply("<@&933456553351217232> Creator and Founder of the Project \n<@&1004774660296151170> Administrator of the Crypto Humans Club Discord server\n<@&943149177762881596> Team of the Crypto Humans NFT project\n<@&944940653647900752> Holder of Crypto Humans NFTs\n<@&1009042732850876476> Holding 10 or more Crypto Humans NFTs grants this role group.\n<@&932648568337092629> Booster of the community, with special privileges.\n<@&1009050794739380264> Community blogger whose posts are automatically shared to the Discord community, for those who hold this role.（Partners who hold 10 Crypto Humans NFTs can submit a customer service request ticket.）\n<@&954362698722865244> Story Creator of Crypto Humans, a prestigious title in recognition of the need for engaging stories within a quality community. If you're confident in your ability to craft a compelling Crypto Humans story, you may submit a customer service request to apply for this title.\n<@&973921661365661736> Obtaining this title through completing tasks in activities.\n<@&1009022461800624158> Podcastor!\n<@&934445110584823848> Verified Discord member.\n<@&1002650808837492867> If you buy a ticket for a spaceship to the moon, you become a moon citizen, which is like a self-governing district for members of the server.\n<@&1004755919030210611> The rulers of CHV Moon have the same level of power as <@&1004774660296151170>.\n<@&944919071802163231>  Birthday person of the day.");
    }
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;
   
    const args = message.content.slice(prefix.length).split(" ");
    switch (args[0]) {
      case "role_zh":
        message.reply("<@&933456553351217232> 項目創建者 \n<@&1004774660296151170> 社群管理員\n<@&943149177762881596> 項目團隊\n<@&944940653647900752> 加密人NFT持有者\n<@&1009042732850876476> 持有10個加密人的Holder\n<@&932648568337092629> 加成伺服器的成員\n<@&1009050794739380264> 加密人部落客，具有OG身份的持有者可透過客服單申請，你於社群媒體發的文章將會自動公佈於加密人俱樂部Discord中\n<@&954362698722865244> 加密人故事的創作者，如果有理想有抱負想讓加密人世界的故事支線更為豐富，歡迎申請！\n<@&973921661365661736> 透過特定社群任務獲得\n<@&1009022461800624158> 語音頻道主持人\n<@&934445110584823848> 經過驗證的一般成員\n<@&1002650808837492867> 購買月球飛船票飛往月球將獲得此身份組\n<@&1004755919030210611> 月球王，權力等同<@&1004774660296151170>\n<@&944919071802163231> 當天生日的夥伴");
    }
});


  

client.login(token);