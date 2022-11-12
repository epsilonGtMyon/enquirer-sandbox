const { MultiSelect } = require("enquirer");

module.exports = {
  title: "MultiSelectのサンプル",
  async execute() {
    const prompt1 = new MultiSelect({
      name: "value",
      message: "あなたの好き色は(スペースで選択し、エンターで決定)",
      // limit: 5, これは選択肢の数であって選べる数の最大値ではない
      choices: [
        { name: "aqua", value: "#00ffff" },
        { name: "black", value: "#000000" },
        { name: "blue", value: "#0000ff" },
        { name: "fuchsia", value: "#ff00ff" },
        { name: "gray", value: "#808080" },
        { name: "green", value: "#008000" },
        { name: "lime", value: "#00ff00" },
        { name: "maroon", value: "#800000" },
        { name: "navy", value: "#000080" },
        { name: "olive", value: "#808000" },
        { name: "purple", value: "#800080" },
        { name: "red", value: "#ff0000" },
        { name: "silver", value: "#c0c0c0" },
        { name: "teal", value: "#008080" },
        { name: "white", value: "#ffffff" },
        { name: "yellow", value: "#ffff00" },
      ],
      // result関数で 戻す結果を加工できるっぽい
      result(names) {
        return this.map(names);
      },
    });

    const answer = await prompt1.run();
    // resultで加工しているので{name, value} がセットでかえってくる
    // 加工してない場合はnameの内容が返ってくる
    console.log(answer);
  },
};
