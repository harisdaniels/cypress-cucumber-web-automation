let randomText = "";
let pattern = "abcdefghijklmnopqrstuvwxyz";

export const generateEmailFormat = () => {
  let emailFormat = "";
  for (let i = 0; i < 10; i ++) {
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
      emailFormat = randomText + "@gmail.com";
  }

  return emailFormat;
}

export const generateText = () => {
  for (let i = 0; i < 10; i ++) {
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
      string = randomText;
  }

  return string;
}