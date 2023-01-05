const { Brainly } = require("brainly-scraper-v2")
Brainly.initialize();

module.exports = {
  start: async function(ctx, { text }) {
    if(!text) return ctx.reply("Cara penggunaan : /braily soal\n\nContoh penggunaan : /brainly Apa itu atom?")
    await ctx.reply("⏳| Silahkan tunggu")
    
    const brain = new Brainly("id")
    const res = await brain.searchWithMT(text, "id")
    const teks = `=======[ <b>🧠Brainly Searching🔍</b> ]=======

🔍Pencarian Soal Dari 
<b>${res[0].question.content}</b>

<b>📜Jawaban:</b>
${res[0].answers.sort((a, b) => b.thanksCount - a.thanksCount)[0].content.trim()}
`.trim()

    await ctx.replyWithHTML(teks)
  },
  tags: "edukasi",
  help: ["brainly", "br"],
  desc: "cari soal brainly"
}
