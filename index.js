import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { res } from "./val/call.js";

const rl = createInterface({
  input: stdin,
  output: stdout,
});

const tanggal = async () => {
  const answer = await rl.question("Masukan Format Tanggal DD-MM-YYYY :");

  res(answer);

  rl.close();
};

tanggal();
