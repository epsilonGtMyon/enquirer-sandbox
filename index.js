const { Select } = require("enquirer");
const samples = require("./samples");

async function main() {
  const choices = [];
  const choicesMap = new Map();
  Object.entries(samples).forEach(([k, v]) => {
    choices.push(v.title);
    choicesMap.set(v.title, k);
  });

  choices.push("exit")

  while (true) {
    const prompt = new Select({
      name: "sample",
      message: "どのサンプルを実行しますか",
      choices,
    });
    const answer = await prompt.run();
    if (answer === "exit") {
      console.log("終了します。");
      break;
    }

    const choiced = samples[choicesMap.get(answer)]
    await choiced.execute()
    console.log(`
    `)
  }
}

main();
