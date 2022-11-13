const { Form } = require("enquirer");

module.exports = {
  title: "Formのサンプル",
  async execute() {
    const prompt = new Form({
      message: "一連の入力",
      choices: [
        {name: "lastname", message: "姓を入力"},
        {name: "firstName", message: "名を入力"},
        {name: "middleName", message: "ミドルネームを入力"},
      ]
    });

    const ans = await prompt.run()
    console.log(ans)

  },
};
