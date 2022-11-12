const { BasicAuth } = require("enquirer");

function sleep(mills) {
  return new Promise((resolve) => setTimeout(() => resolve(), mills));
}

async function mockRequest(username, password) {
  await sleep(1000);
  return username === "admin" && password === "asdf";
}

module.exports = {
  title: "BasicAuth のサンプル",
  async execute() {
    // Basic認証をするわけではない

    const BasicAuthPrompt = BasicAuth.create(async (value, state) => {
      // サーバーなどで認証して結果を返す
      const result = await mockRequest(value.username, value.password)
      const message = result ? "認証成功" : "認証失敗"

      // 任意のオブジェクト
      return { result, message };
    });

    const prompt = new BasicAuthPrompt({
      name: "password",
      message: "ユーザー名とパスワードいれてください\r\n",
      showPassword: false,
    });

    const x = await prompt.run();

    console.log(x);
  },
};
