const { Confirm  } = require('enquirer');

module.exports = {
  title: "Confirm のサンプル",
  async execute() {
    const prompt = new Confirm({
      message: '確認でーす',
    })

    const result = await prompt.run()
    console.log("結果", result)
  }
}