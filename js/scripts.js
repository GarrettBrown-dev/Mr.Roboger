const numbers = ["1", "2", "3"];


$(document).ready(function () {
  $("form#formsubmit").submit(function (event) {
    event.preventDefault();
    const userWord = $("#userinput").val();
    const arrayOfInput = [userWord];
    console.log(arrayOfInput);
    // arrayOfInput.push(userWord);
    const pigLatin = arrayOfInput.map(function (text) {
      let transformedText;
      const firstLetterOfWord = text.split('')[0];
      // const twoLetters = text.split('')[]
      console.log("firstLetterOfWord", firstLetterOfWord);
      // does first letter in text contain /[aieou]/
      // 1. seperate out the first letter in text string
      // 2. evalutate first letter against regex
      if (firstLetterOfWord.match(/[aieou]/)) {
        console.log("inside first block");
        transformedText = text + 'way';
        return transformedText
      } else if (!firstLetterOfWord.match(/[aieou]/)) {
        console.log("inside second block");
        transformedText = text.split('');
        console.log(transformedText);
        transformedText.shift();
        transformedText.push(firstLetterOfWord);
        transformedText.push("ay");
        transformedText = transformedText.join('');
        console.log("second block transformed text", transformedText);
        return transformedText;
      }
    });
  });
});