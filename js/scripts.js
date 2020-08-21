const numbers = [1, 2, 3];



$(document).ready(function () {
  $("form#formsubmit").submit(function (event) {
    event.preventDefault();
    let userNumber = $("#userinput").val();
    let arrayOfInput = [];
    arrayOfInput.push(userNumber);
    const roboWord = arrayOfInput.map(function (text) {
      if (/[1]/) {
        arrayOfInput.push("Beep");
        arrayOfInput.join("");
        console.log(userNumber)
      }
      else if (/[^aieou]/i) {
        arrayOfInput.replace(/[aieou]/gi, (charAt(0) + "Boop"));
      }
      else if (/[qu]/gi) {
        $(string).slice(+ "quay");
      }

      else if ("begins with y"); {
      }
      return (text);
    });
    $("#translation").show();
  });
});