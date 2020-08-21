const numbers = [1, 2, 3];


$(document).ready(function () {
  $("form#formsubmit").submit(function (event) {
    event.preventDefault();
    const userNumber = $("#userNumber").val();
    const outputArray = [];
    //const arrayOfInput = [userNumber];
    for (let i = 0; i <= userNumber; i++) {
      const stringifiedNum = i.toString();
      if (stringifiedNum.includes("3")) {
        outputArray.push("Won't you be my neighbor?")
      } else if (stringifiedNum.includes("2")) {
        outputArray.push("Boop.");
      } else (stringifiedNum.includes("1")); {
        outputArray.push("Beep");

        console.log(outputArray)
      }
    }
  });
});