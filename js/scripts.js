const numbers = [1, 2, 3];


$(document).ready(function () {
  $("form#formsubmit").submit(function (event) {
    event.preventDefault();
    const userNumber = $("#userNumber").val();
    const arrayOfInput = [userNumber];
    console.log(arrayOfInput);
    const roboWord = arrayOfInput.map(function (text) {
      let transformedText;
      // const twoLetters = text.split('')[]
      // does number in text contain /[1]/
      if (userNumber.match(/[1]/)) {
        transformedText = userNumber.shift('');
        transformedText.push("Beep");
        console.log("inside first block");
        return transformedText
      } else if 
    });
  });
});