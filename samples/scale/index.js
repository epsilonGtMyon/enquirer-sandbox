const { Scale } = require("enquirer");

module.exports = {
  title: "Scaleのサンプル",
  async execute() {
    const prompt = new Scale({
      message: "いろいろな質問？",
      scale: [
        { name: '1', message: '全く思わない' },
        { name: '2', message: 'ややそうではない' },
        { name: '3', message: 'どちらでもない' },
        { name: '4', message: 'ときどきそう思う' },
        { name: '5', message: '全くその通りだ' }
      ],
      // 不明
      // margin: [0, 0, 2, 1], 
      choices: [{
        name: 'question1',
        message: 'あれこれ1',
        initial: 1
      },{
        name: 'question2',
        message: 'あれこれ2',
        initial: 2
      },{
        name: 'question3',
        message: 'あれこれ3',
        initial: 3
      }]
    });

    const ans = await prompt.run()
    console.log(ans)

  },
};
