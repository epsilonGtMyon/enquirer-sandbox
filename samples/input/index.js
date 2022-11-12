const { Input } = require('enquirer');

module.exports = {
  title: "Inputのサンプル",
  async execute() {
    const prompt1 = new Input({
      message: 'あなたの苗字は？',
    })

    const familyName = await prompt1.run()

    const firstName = await (new Input({
      message: 'あなたの名前は？',
    }).run())

    console.log("苗字", familyName)
    console.log("名前", firstName)
  }
}