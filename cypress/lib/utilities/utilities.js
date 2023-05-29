let pattern = "abcdefghijklmnopqrstuvwxyz";

export const generateEmailFormat = () => {
  let randomText = "";
  let emailFormat = "";
  for (let i = 0; i < 10; i ++) {
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
      emailFormat = randomText + "@gmail.com";
  }
  return emailFormat;
}

export const generateText = () => {
  let randomText = "";
  for (let i = 0; i < 10; i ++) {
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
  }
  return randomText;
}