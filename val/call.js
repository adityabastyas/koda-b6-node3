export function res(masuk) {
  if (
    typeof masuk !== "string" ||
    masuk.length !== 10 ||
    !masuk.includes("-") ||
    masuk[2] !== "-" ||
    masuk[5] !== "-"
  ) {
    console.log("format tidak valid");
  }

  let n = "";
  for (let i = 0; i < masuk.length; i++) {
    if (masuk[i] === "-") {
      n = n + "/";
    } else {
      n = n + masuk[i];
    }
  }
  console.log(n);
}
